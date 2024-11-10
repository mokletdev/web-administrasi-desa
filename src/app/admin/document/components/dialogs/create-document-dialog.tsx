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
import { FC, useMemo, useState } from "react";
import { z } from "zod";
import { upsertDocumentForm } from "../../actions";
import {
  documentUserRole,
  FirstStepCreateDocumment,
} from "./forms/first-step-create-document";
import { SecondStepCreateDocument } from "./forms/second-step-create-document";
import { Field } from "./forms/second-step-create-document/components/field";
import { ThirdStepCreateDocument } from "./forms/third-step-create-document";
import { validateFields } from "@/lib/utils";

const MAX_STEP = 3;
const DESCRIPTIONS = [
  "Informasi dasar template surat",
  "Kolom-kolom dalam formulir template surat",
  "Upload template surat dalam bentuk .docx",
];

const MAX_FILE_SIZE = 5_000_000;
const contentSchema = z
  .instanceof(FileList)
  .refine((files) => {
    return files.length !== 0;
  }, "Template harus diupload!")
  .refine((files) => {
    // Select only the first file
    const file = files[0];
    // If file size exceed the maximum limit, then throw error
    return !file || file?.size <= MAX_FILE_SIZE;
  }, `Maximum file size is 15MB`)
  .refine((files: FileList) => {
    // Select only the first file
    const file = files[0];
    // If file's extension is not allowed, then throw error
    return (
      !file ||
      file?.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );
  });

const createDocumentSchema = z.object({
  title: z.string().min(1),
  level: z.enum(documentUserRole),
  content: contentSchema,
  positionIds: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
});

export const CreateDocumentDialog: FC<
  DialogBaseProps & {
    fieldTypes: { id: number; name: string; baseType: BaseFieldType }[];
    positions: { id: number; title: string }[];
  }
> = ({ open, setIsOpen, fieldTypes, positions }) => {
  const [step, setStep] = useState(1);

  const form = useZodForm({
    defaultValues: {
      title: "",
      level: "",
      positionIds: [],
    },
    schema: createDocumentSchema,
  });
  const [loading, setLoading] = useState(false);
  const { toast, dismiss } = useToast();
  const router = useRouter();

  const [fields, setFields] = useState<Field[]>([]);

  const onSubmit = form.handleSubmit(async (values) => {
    if (step < MAX_STEP) {
      return setStep(step + 1);
    }

    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan penambahan anda sedang diproses",
    });

    const contentFormData = new FormData();
    const { content, level, title } = values;
    contentFormData.append("content", content[0]);

    const createDocumentAction = await upsertDocumentForm({
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
      signs: [],
    });
    if (createDocumentAction.error) {
      dismiss(loadingToast.id);
      return toast({
        title: "Gagal Menambahkan!",
        description: `Gagal menambah data posisi (${createDocumentAction.error.message})`,
      });
    }

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Menambahkan!",
      description: `Berhasil menambahkan data posisi baru`,
    });
    form.reset();
    setLoading(false);
    setIsOpen(false);
    return router.refresh();
  });

  // const forms = useMemo(
  //   () => [
  //     <FirstStepCreateDocumment form={form as any} />,
  //     <SecondStepCreateDocument
  //       fieldTypes={fieldTypes}
  //       fields={fields}
  //       setFields={setFields}
  //     />,
  //     <ThirdStepCreateDocument
  //       fieldLabels={fields.map((field) => field.label)}
  //       form={form as any}
  //       positions={positions}
  //     />,
  //   ],
  //   [fields, fieldTypes],
  // );

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
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
              {step === 1 && <FirstStepCreateDocumment form={form as any} />}
              {step === 2 && (
                <SecondStepCreateDocument
                  fieldTypes={fieldTypes}
                  fields={fields}
                  setFields={setFields}
                />
              )}
              {step === 3 && (
                <ThirdStepCreateDocument
                  fieldLabels={fields.map((field) => field.label)}
                  form={form as any}
                  positions={positions}
                />
              )}
            </div>
            <DialogFooter>
              {step > 1 && (
                <Button
                  variant={"outline"}
                  type="button"
                  onClick={() => setStep(step - 1)}
                  disabled={loading}
                >
                  Kembali
                </Button>
              )}
              <Button
                variant={"default"}
                type={step < MAX_STEP ? "button" : "submit"}
                onClick={
                  step < MAX_STEP
                    ? async () => {
                        const fieldsToTrigger: string[][] = [
                          ["title", "level"],
                          ["title", "level"],
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

                        if (step !== 2) {
                          isValid && setStep(step + 1);
                        } else {
                          isFieldsValid && setStep(step + 1);
                        }
                      }
                    : undefined
                }
                disabled={loading}
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
