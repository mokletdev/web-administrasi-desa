"use client";

import { convertToPdf } from "@/app/actions/docx-pdf";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DialogFullscreen,
  DialogFullscreenContent,
  DialogFullscreenDescription,
  DialogFullscreenHeader,
  DialogFullscreenTitle,
} from "@/components/ui/dialog-fullscreen";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FileField, Input } from "@/components/ui/input";
import { Label, labelVariants } from "@/components/ui/label";
import { MultiSelect } from "@/components/ui/multi-select";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { useZodForm } from "@/hooks/use-zod-form";
import { cn, divisionLevelMap, normalizeVariableName } from "@/lib/utils";
import { DialogBaseProps } from "@/types/dialog";
import { AdministrativeLevel, BaseFieldType, Official } from "@prisma/client";
import { ArrowLeft, ArrowRight, ChevronsUpDown, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, Fragment, useEffect, useMemo, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { z } from "zod";
import { upsertTemplate } from "../../actions";
import { Field, RenderField } from "./field";

// Initiate pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type Sign = {
  officialId: string;
  officialName: string;
  coordX: number;
  coordY: number;
  size: number;
  page: number;
};

const MAX_FILE_SIZE = 5_000_000;
const ALLOWED_MIME_TYPES = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
];

export const UpdateTemplateDialog: FC<
  DialogBaseProps & {
    officials: Official[];
    adminLevel: AdministrativeLevel;
    serviceId: string;
    fieldTypes: { id: number; label: string; baseType: BaseFieldType }[];

    id: string;
    title: string;
    content: string;
    signs: Sign[];
    fields: Field[];
  }
> = ({
  open,
  setIsOpen,
  officials,
  adminLevel,
  fieldTypes,
  serviceId,

  id,
  title: presetTitle,
  content: contentBase64,
  signs: presetSigns,
  fields: presetFields,
}) => {
  const createTemplateSchema = useMemo(
    () =>
      z.object({
        title: z.string().min(1),
        content: z
          .union([
            z.instanceof(FileList), // Valid if it's a FileList
            z.literal(undefined), // Valid if it's undefined (optional input)
          ])
          .refine(
            (files) =>
              !files || files.length === 0 || files[0]?.size <= MAX_FILE_SIZE,
            { message: "Maximum file size is 15MB." },
          )
          .refine(
            (files) =>
              !files ||
              files.length === 0 ||
              ALLOWED_MIME_TYPES.includes(files[0]?.type || ""),
            { message: "Invalid file type. Only .docx files are allowed." },
          ),
      }),
    [],
  );
  const form = useZodForm({
    defaultValues: { title: presetTitle },
    schema: createTemplateSchema,
  });
  const { toast, dismiss } = useToast();

  const router = useRouter();

  const content = form.watch("content");

  const [preview, setPreview] = useState<string>(contentBase64);
  const [previewPageNumber, setPreviewPageNumber] = useState(1);
  const [previewMaxWidth, setPreviewMaxWidth] = useState<number>();
  const [previewMaxHeight, setPreviewMaxHeight] = useState<number>();
  const [loading, setLoading] = useState(false);
  const [previewLoading, setPreviewLoading] = useState(true);
  const [previewPageCount, setPreviewPageCount] = useState<number>();
  const reactPdfOptions = useMemo(
    () => ({
      cMapUrl: "cmaps/",
      cMapPacked: true,
      standardFontDataUrl: "standard_fonts/",
    }),
    [],
  );
  const [variablesOpen, setVariablesOpen] = useState(false);

  const [signs, setSigns] = useState<Sign[]>(presetSigns);
  const [officialIdToEdit, setOfficialIdToEdit] = useState<string>();

  const [fields, setFields] = useState<Field[]>(presetFields);

  useEffect(() => {
    if (signs.length > 0 && officialIdToEdit === undefined) {
      setOfficialIdToEdit(signs[0].officialId);
    }
  }, [officialIdToEdit, signs]);

  useEffect(() => {
    const updatePreview = async () => {
      if (content && content[0] instanceof File) {
        setPreviewLoading(true);

        const data = new FormData();
        data.append("content", content[0]);

        const convertAction = await convertToPdf(data);

        if (convertAction.data) {
          setPreview(convertAction.data);
        }
      }
    };

    updatePreview();
  }, [content]);

  // Sign position and size handler
  const handleXChange = (e: number, officialId: string) => {
    setSigns((prev) => {
      return prev.map((sign) => {
        if (sign.officialId === officialId) {
          return { ...sign, coordX: e };
        }

        return sign;
      });
    });
  };

  const handleYChange = (e: number, officialId: string) => {
    setSigns((prev) => {
      return prev.map((sign) => {
        if (sign.officialId === officialId) {
          return { ...sign, coordY: e };
        }

        return sign;
      });
    });
  };

  const handleSizeChange = (e: number, officialId: string) => {
    setSigns((prev) => {
      return prev.map((sign) => {
        if (sign.officialId === officialId) {
          return { ...sign, size: e };
        }

        return sign;
      });
    });
  };

  const onSubmit = form.handleSubmit(async ({ title, content }) => {
    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan penambahan anda sedang diproses",
    });

    const contentFormData = new FormData();
    content &&
      content.length > 0 &&
      contentFormData.append("content", content[0]);

    const res = await upsertTemplate({
      id,
      administrativeServiceId: serviceId,
      title,
      content: contentFormData,
      fields,
      level: adminLevel,
      signs: signs.map(({ coordX, coordY, officialId, size }) => ({
        coordX,
        coordY,
        officialId,
        size,
      })),
    });

    if (res.error) {
      setLoading(false);
      dismiss(loadingToast.id);
      return toast({
        title: "Gagal Menambahkan!",
        description: `Gagal menambah template (${res.error.message})`,
      });
    }

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Menambahkan!",
      description: `Berhasil menambahkan template baru`,
    });
    setLoading(false);
    setIsOpen(false);
    return router.refresh();
  });

  return (
    <DialogFullscreen open={open} onOpenChange={setIsOpen}>
      <DialogFullscreenContent className="sm:max-w-[425px]">
        <DialogFullscreenHeader>
          <DialogFullscreenTitle>
            Tambahkan Template{" "}
            {divisionLevelMap[adminLevel as keyof typeof divisionLevelMap]}
          </DialogFullscreenTitle>
          <DialogFullscreenDescription>
            Tambahkan Template{" "}
            {divisionLevelMap[adminLevel as keyof typeof divisionLevelMap]}{" "}
            disini. Tekan tombol simpan jika telah selesai.
          </DialogFullscreenDescription>
        </DialogFullscreenHeader>
        <Form {...form}>
          <form onSubmit={onSubmit}>
            <FormField
              control={form.control}
              name="title"
              defaultValue={presetTitle}
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-1.5">
                  <FormLabel htmlFor="label">Judul Surat</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Judul template" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-4 w-full space-y-1.5">
              <h2 className={labelVariants({ className: "text-foreground" })}>
                Manajemen Variabel Input
              </h2>
              <div className="flex flex-col gap-y-2">
                {fields
                  .filter(
                    (i) =>
                      i.fieldTypeId !==
                      fieldTypes[
                        fieldTypes.findIndex((j) => j.baseType === "file")
                      ].id,
                  )
                  .sort((a, b) => a.fieldNumber - b.fieldNumber)
                  .map((field) => (
                    <RenderField
                      key={field.fieldNumber}
                      field={field}
                      fieldTypes={fieldTypes}
                      fields={fields}
                      setFields={setFields}
                    />
                  ))}
              </div>
              {fieldTypes.length > 0 && (
                <Button
                  className="w-full"
                  variant={"outline"}
                  type="button"
                  onClick={() => {
                    setFields((prevFields) => [
                      ...prevFields,
                      {
                        fieldNumber: prevFields.length + 1,
                        fieldTypeId: fieldTypes[0]?.id ?? 0, // Use `0` or another default ID if `fieldTypes` is empty
                        label: "Input Baru",
                        required: false,
                      },
                    ]);
                  }}
                >
                  Tambah Input <Plus />
                </Button>
              )}
            </div>
            <div className="mt-4 w-full space-y-1.5">
              <h2 className={labelVariants({ className: "text-foreground" })}>
                Manajemen Persyaratan
              </h2>
              <div className="flex flex-col gap-y-2">
                {fields
                  .filter(
                    (i) =>
                      i.fieldTypeId ===
                      fieldTypes[
                        fieldTypes.findIndex((j) => j.baseType === "file")
                      ].id,
                  )
                  .sort((a, b) => a.fieldNumber - b.fieldNumber)
                  .map((field) => (
                    <RenderField
                      key={field.fieldNumber}
                      field={field}
                      fields={fields}
                      setFields={setFields}
                    />
                  ))}
              </div>
              {fieldTypes.length > 0 && (
                <Button
                  className="w-full"
                  variant={"outline"}
                  type="button"
                  onClick={() => {
                    setFields((prevFields) => [
                      ...prevFields,
                      {
                        fieldNumber: prevFields.length + 1,
                        fieldTypeId:
                          fieldTypes[
                            fieldTypes.findIndex((j) => j.baseType === "file")
                          ]?.id ?? 0, // Use `0` or another default ID if `fieldTypes` is empty
                        label: "Persyaratan Baru",
                        required: false,
                      },
                    ]);
                  }}
                >
                  Tambah Persyaratan <Plus />
                </Button>
              )}
            </div>
            <FileField
              name="content"
              label="Upload Template"
              register={form.register}
              accept={
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              }
              errorMessage={form.formState.errors.content?.message?.toString()}
            />
            <div
              id="container"
              className={cn(
                "relative block w-full rounded-md",
                loading || preview ? "mb-12" : "mb-0",
              )}
            >
              {previewLoading && (
                <p className="w-full text-center">Loading preview...</p>
              )}
              {preview && (
                <>
                  <div className="flex flex-col gap-y-1.5">
                    <Label>Pilih Pejabat untuk TTE</Label>
                    <MultiSelect
                      options={officials.map((official) => ({
                        label: official.name,
                        value: official.id,
                      }))}
                      onValueChange={(values) => {
                        setSigns(
                          values.map((value) => ({
                            officialId: value,
                            officialName: officials.find(
                              (official) => official.id === value,
                            )!.name,
                            coordX: 0,
                            coordY: 0,
                            size: 42,
                            page: 1,
                          })),
                        );
                      }}
                      defaultValue={signs.map((sign) => sign.officialId)}
                      value={signs.map((sign) => sign.officialId)}
                      placeholder="Select official for TTE"
                      variant="inverted"
                      animation={2}
                      maxCount={3}
                    />
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <Button
                      variant={"outline"}
                      disabled={previewPageNumber === 1}
                      onClick={() => {
                        setPreviewPageNumber((prev) => prev - 1);
                      }}
                    >
                      <ArrowLeft />
                    </Button>
                    <p>
                      {previewPageNumber} / {previewPageCount}
                    </p>
                    <Button
                      variant="outline"
                      disabled={previewPageNumber === (previewPageCount || 1)}
                      onClick={() => {
                        setPreviewPageNumber((prev) =>
                          prev < previewPageCount!
                            ? prev + 1
                            : previewPageCount!,
                        );
                      }}
                    >
                      <ArrowRight />
                    </Button>
                  </div>
                  <Document
                    file={`data:application/pdf;base64,${preview}`}
                    onLoadSuccess={({ numPages }) => {
                      setPreviewPageCount(numPages);
                    }}
                    options={reactPdfOptions}
                    renderMode="canvas"
                    className="h-full w-full"
                  >
                    <Page
                      className={cn("mx-auto h-fit w-fit")}
                      scale={1}
                      key={previewPageNumber}
                      pageNumber={previewPageNumber}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                      onLoadSuccess={({ originalWidth, originalHeight }) => {
                        setPreviewMaxHeight(originalHeight);
                        setPreviewMaxWidth(originalWidth);
                        setPreviewLoading(false);
                      }}
                      onRenderError={() => setPreviewLoading(false)}
                    >
                      {signs
                        .filter((sign) => sign.page === previewPageNumber)
                        .map((sign) => (
                          <TooltipProvider key={sign.officialId}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  type="button"
                                  className={cn(
                                    "absolute flex size-5 items-center justify-center rounded-sm border border-input p-2",
                                    officialIdToEdit === sign.officialId
                                      ? "bg-foreground"
                                      : "bg-input",
                                  )}
                                  onClick={() =>
                                    setOfficialIdToEdit(sign.officialId)
                                  }
                                  style={{
                                    left: `${sign.coordX}px`,
                                    bottom: `${sign.coordY}px`,
                                    width: `${sign.size}px`,
                                    height: `${sign.size}px`,
                                  }}
                                >
                                  <p
                                    className={cn(
                                      "line-clamp-1 text-xs",
                                      officialIdToEdit === sign.officialId
                                        ? "text-background"
                                        : "text-foreground",
                                    )}
                                  >
                                    {sign.officialName}
                                  </p>
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-background">
                                  {sign.officialName}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ))}
                    </Page>
                  </Document>
                </>
              )}
            </div>
            {!!officialIdToEdit && (
              <div className="mb-4 flex flex-col gap-y-4">
                <p className="mb-2 text-foreground">
                  Edit TTE{" "}
                  {
                    signs.find((sign) => sign.officialId === officialIdToEdit)
                      ?.officialName
                  }
                </p>
                <div className="flex flex-col gap-y-2">
                  <div>
                    <Label htmlFor="page">Halaman</Label>
                    <Input
                      name="page"
                      type="number"
                      max={previewPageCount}
                      min={1}
                      onChange={(e) => {
                        setSigns((prev) => {
                          return prev.map((sign) => {
                            if (sign.officialId === officialIdToEdit) {
                              return { ...sign, page: Number(e.target.value) };
                            }

                            return sign;
                          });
                        });
                      }}
                      value={
                        signs.find(
                          (sign) => sign.officialId === officialIdToEdit,
                        )!.page
                      }
                    />
                  </div>
                  <div>
                    <Label>Posisi X</Label>
                    <Slider
                      defaultValue={[0]}
                      value={[
                        signs.find(
                          (sign) => sign.officialId === officialIdToEdit,
                        )!.coordX,
                      ]}
                      max={previewMaxWidth}
                      step={1}
                      onValueChange={(e) =>
                        handleXChange(e[0], officialIdToEdit)
                      }
                    />
                  </div>
                  <div>
                    <Label>Posisi Y</Label>
                    <Slider
                      defaultValue={[0]}
                      value={[
                        signs.find(
                          (sign) => sign.officialId === officialIdToEdit,
                        )!.coordY,
                      ]}
                      max={previewMaxHeight}
                      step={1}
                      onValueChange={(e) =>
                        handleYChange(e[0], officialIdToEdit)
                      }
                    />
                  </div>
                  <div>
                    <Label>Skala</Label>
                    <Slider
                      defaultValue={[0]}
                      value={[
                        signs.find(
                          (sign) => sign.officialId === officialIdToEdit,
                        )!.size,
                      ]}
                      max={300}
                      step={1}
                      onValueChange={(e) =>
                        handleSizeChange(e[0], officialIdToEdit)
                      }
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="mb-1 flex w-full items-center">
              <Collapsible
                open={variablesOpen}
                onOpenChange={setVariablesOpen}
                className="w-full space-y-2"
              >
                <div className="flex items-center justify-between space-x-4 px-4">
                  <p className="text-xs font-semibold">
                    Variabel yang dapat digunakan dalam template
                  </p>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="w-full space-y-2">
                  <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                    {`{{tgl_surat}}`}
                  </div>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                    {`{{no_surat}}`}
                  </div>
                  {signs.map((sign) => (
                    <Fragment key={sign.officialId}>
                      <div
                        key={sign.officialId}
                        className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm"
                      >
                        {`{{tte_${normalizeVariableName(sign.officialName)}}}`}
                      </div>
                      <div
                        key={sign.officialId + "_tgl"}
                        className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm"
                      >
                        {`{{tte_${normalizeVariableName(sign.officialName)}_tgl}}`}
                      </div>
                      <div
                        key={sign.officialId + "_location"}
                        className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm"
                      >
                        {`{{tte_${normalizeVariableName(sign.officialName)}_location}}`}
                      </div>
                    </Fragment>
                  ))}
                  {fields.map((field) => (
                    <div
                      key={field.fieldNumber}
                      className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm"
                    >
                      {`{{${normalizeVariableName(field.label || "")}}}`}
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </div>
            <Button type="submit" className="mt-6 w-full" disabled={loading}>
              Konfirmasi
            </Button>
          </form>
        </Form>
      </DialogFullscreenContent>
    </DialogFullscreen>
  );
};
