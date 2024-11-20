"use client";

import { convertToPdf } from "@/app/actions/docx-pdf";
import { Button } from "@/components/ui/button";
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
import { useZodForm } from "@/hooks/use-zod-form";
import { cn, divisionLevelMap } from "@/lib/utils";
import { DialogBaseProps } from "@/types/dialog";
import { AdministrativeLevel, BaseFieldType, Sign } from "@prisma/client";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { FC, useEffect, useMemo, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { z } from "zod";
import { Field, RenderField } from "./field";
import { labelVariants } from "@/components/ui/label";

// Initiate pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const MAX_FILE_SIZE = 5_000_000;

const createTemplateSchema = z.object({
  title: z.string().min(1),
  content: z
    .instanceof(File, { message: "Please upload a file." })
    .array()
    .or(z.undefined())
    .refine((files) => {
      if (!files) return false;
      return files.length !== 0;
    }, "Template harus diupload!")
    .refine((files) => {
      if (!files) return true;
      // Select only the first file
      const file = files[0];
      // If file size exceed the maximum limit, then throw error
      return !file || file?.size <= MAX_FILE_SIZE;
    }, `Maximum file size is 15MB`)
    .refine((files) => {
      if (!files) return true;
      // Select only the first file
      const file = files[0];
      // If file's extension is not allowed, then throw error
      return (
        file?.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      );
    }),
});

export const CreateTemplateDialog: FC<
  DialogBaseProps & {
    adminLevel: AdministrativeLevel;
    fieldTypes: { id: number; label: string; baseType: BaseFieldType }[];
  }
> = ({ open, setIsOpen, adminLevel, fieldTypes }) => {
  const form = useZodForm({
    defaultValues: { title: "" },
    schema: createTemplateSchema,
  });

  const content = form.watch("content");

  const [preview, setPreview] = useState<string>();
  const [previewPageNumber, setPreviewPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [previewPageCount, setPreviewPageCount] = useState<number>();
  const reactPdfOptions = useMemo(
    () => ({
      cMapUrl: "cmaps/",
      cMapPacked: true,
      standardFontDataUrl: "standard_fonts/",
    }),
    [],
  );

  const [signs, setSigns] = useState<Sign[]>([]);

  const [fields, setFields] = useState<Field[]>([]);

  useEffect(() => {
    const updatePreview = async () => {
      if (content && content[0] instanceof File) {
        setLoading(true);

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

  const onSubmit = form.handleSubmit(async () => {});

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
            <FileField
              name="content"
              label="Upload Template"
              register={form.register}
              accept={
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              }
              errorMessage={form.formState.errors.content?.message?.toString()}
            />
          </form>
          <div
            id="container"
            className={cn(
              "relative block w-full rounded-md",
              loading || preview ? "mb-12" : "mb-0",
            )}
          >
            {loading && (
              <p className="w-full text-center">Loading preview...</p>
            )}
            {preview && (
              <>
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
                        prev < previewPageCount! ? prev + 1 : previewPageCount!,
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
                    onLoadSuccess={() => {
                      setLoading(false);
                    }}
                    canvasBackground="#000"
                    onRenderError={() => setLoading(false)}
                  >
                    {signs.map((sign) => (
                      <div key={sign.id} className="size-5 bg-black"></div>
                    ))}
                  </Page>
                </Document>
              </>
            )}
          </div>
        </Form>
        <Button type="submit">Tambahkan</Button>
      </DialogFullscreenContent>
    </DialogFullscreen>
  );
};
