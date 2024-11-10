"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useZodForm } from "@/hooks/use-zod-form";
import { DialogBaseProps } from "@/types/dialog";
import { BaseFieldType, UserRole } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FC, useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { upsertDocumentForm } from "../../actions";
import {
  documentUserRole,
  FirstStepCreateDocumment,
} from "./forms/first-step-upsert-document";
import { SecondStepCreateDocument } from "./forms/second-step-create-document";
import { Field } from "./forms/second-step-create-document/components/field";
import { ThirdStepCreateDocument } from "./forms/third-step-upsert-document";
import { validateFields } from "@/lib/utils";

const MAX_STEP = 3;
const DESCRIPTIONS = [
  "Informasi dasar template surat",
  "Kolom-kolom dalam formulir template surat",
  "Upload template surat dalam bentuk .docx",
];

const MAX_FILE_SIZE = 5_000_000;

const generateDocumentSchema = (isUpdating: boolean) => {
  const contentSchema = z
    .instanceof(FileList || File)
    .refine((files) => {
      return isUpdating ? true : files.length !== 0;
    }, "Template harus diupload!")
    .refine((files) => {
      // Select only the first file
      const file = files[0];
      // If file size exceed the maximum limit, then throw error
      if (!isUpdating) return file?.size <= MAX_FILE_SIZE;
      return !file || file?.size <= MAX_FILE_SIZE;
    }, `Maximum file size is 15MB`)
    .refine((files: FileList) => {
      // Select only the first file
      const file = files[0];
      // If file's extension is not allowed, then throw error
      if (!isUpdating)
        return (
          file?.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        );
      return (
        !file ||
        file?.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      );
    });

  return z.object({
    title: z.string().min(1),
    level: z.enum(documentUserRole),
    content: contentSchema,
    positionIds: z
      .array(z.number())
      .refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
      }),
  });
};

export const UpsertDocumentDialog: FC<
  DialogBaseProps & {
    fieldTypes: { id: number; name: string; baseType: BaseFieldType }[];
    positions: { id: number; title: string }[];

    data?: {
      id: string;
      title: string;
      level: UserRole;
      positionIds: number[];
      fields: Field[];
    };
  }
> = ({ open, setIsOpen, fieldTypes, positions, data }) => {
  const [step, setStep] = useState(1);

  const form = useZodForm({
    defaultValues: {
      title: data?.title || "",
      level: data?.level || "",
      positionIds: data?.positionIds || [],
    },
    schema: generateDocumentSchema(data !== undefined),
  });
  const [loading, setLoading] = useState(false);
  const { toast, dismiss } = useToast();
  const router = useRouter();

  const [fields, setFields] = useState<Field[]>(data?.fields || []);

  const onSubmit = form.handleSubmit(async (values) => {
    setIsOpen(false);
    setStep(1);
    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: `Permintaan ${data ? "Perubahan" : "Penambahan"} anda sedang diproses`,
    });

    const contentFormData = new FormData();
    const { content, level, title } = values;
    content[0] && contentFormData.append("content", content[0]);

    const upsertDocumentAction = await upsertDocumentForm({
      id: data?.id,
      title,
      content: contentFormData,
      level: level as UserRole,
      form: {
        fields: fields.map((field) => ({
          label: field.label,
          fieldNumber: field.fieldNumber,
          fieldTypeId: field.fieldTypeId,
          required: field.required,
          options: field.options,
        })),
      },
      signs: values.positionIds.map((positionId) => ({ positionId })),
    });

    if (upsertDocumentAction.error) {
      dismiss(loadingToast.id);
      toast({
        title: `Gagal ${data ? "Mengubah" : "Menambahkan"}!`,
        description: `Gagal ${data ? "mengubah" : "menambahkan"} data template surat (${upsertDocumentAction.error.message})`,
      });
      return setLoading(false);
    }

    dismiss(loadingToast.id);
    toast({
      title: `Berhasil ${data ? "Mengubah" : "Menambahkan"}!`,
      description: `Berhasil ${data ? "mengubah" : "menambahkan"} data template surat baru`,
    });
    form.reset();
    setLoading(false);
    return router.refresh();
  });

  useEffect(() => {
    form.reset({
      title: data?.title || "",
      level: data?.level || "",
      positionIds: data?.positionIds || [],
    });
    setFields(data?.fields || []);
  }, [form.reset, data]);

  const forms = useMemo(
    () => [
      <FirstStepCreateDocumment form={form as any} />,
      <SecondStepCreateDocument
        fieldTypes={fieldTypes}
        fields={fields}
        setFields={setFields}
      />,
      <ThirdStepCreateDocument
        fieldLabels={fields.map((field) => field.label)}
        form={form as any}
        positions={positions}
      />,
    ],
    [form, fields, fieldTypes],
  );

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setIsOpen(v);
        setStep(1);
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambahkan Template Surat</DialogTitle>
          <DialogDescription>
            Tambahkan Template Surat disini. Tekan tombol selanjutnya/simpan
            jika telah selesai.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={onSubmit} className="w-full">
            <div className="grid w-full gap-4 py-4">
              <div className="mb-2">
                <h4>Tahap {step}</h4>
                <p>{DESCRIPTIONS[step - 1]}</p>
              </div>
              {step < MAX_STEP + 1 ? forms[step - 1] : undefined}
            </div>
            <DialogFooter>
              {step > 1 && (
                <Button
                  variant={"outline"}
                  type="button"
                  onClick={() => setStep((currentStep) => currentStep - 1)}
                  disabled={loading}
                >
                  Kembali
                </Button>
              )}
              <Button
                type={step <= MAX_STEP ? "button" : "submit"}
                onClick={
                  step <= MAX_STEP
                    ? async () => {
                        const fieldsToTrigger: string[][] = [
                          ["title", "level"],
                          [],
                          ["content", "positionIds"],
                        ];

                        const isValid = await form.trigger(
                          fieldsToTrigger[step - 1] as any,
                        );

                        const isFieldsValid =
                          step === 2 &&
                          validateFields(
                            fields,
                            fieldTypes
                              .filter(
                                (fieldType) =>
                                  fieldType.baseType === "radio" ||
                                  fieldType.baseType === "checkbox",
                              )
                              .map((fieldType) => fieldType.id),
                          );

                        if ((step === 2 && isFieldsValid) || isValid) {
                          setStep((currentStep) => currentStep + 1);
                        }
                      }
                    : undefined
                }
                variant={"default"}
              >
                {step < MAX_STEP ? "Selanjutnya" : "Simpan"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
