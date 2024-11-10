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
import { BaseFieldType } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FC, useMemo, useState } from "react";
import { z } from "zod";
import {
  documentUserRole,
  FirstStepCreateDocumment,
} from "./forms/first-step-create-document";
import { SecondStepCreateDocument } from "./forms/second-step-create-document";
import { Field } from "./forms/second-step-create-document/components/field";

const MAX_STEP = 4;
const DESCRIPTIONS = [
  "Informasi dasar template surat",
  "Kolom-kolom dalam formulir template surat",
];

const createDocumentSchema = z.object({
  title: z.string().min(1),
  level: z.enum(documentUserRole),
  content: z.string().min(1),
});

export const CreateDocumentDialog: FC<
  DialogBaseProps & {
    fieldTypes: { id: number; name: string; baseType: BaseFieldType }[];
  }
> = ({ open, setIsOpen, fieldTypes }) => {
  const [step, setStep] = useState(1);

  const form = useZodForm({
    values: {
      title: "",
      content: "",
      level: "",
    },
    schema: createDocumentSchema,
  });
  const [loading, setLoading] = useState(false);
  const { toast, dismiss } = useToast();
  const router = useRouter();

  const [fields, setFields] = useState<Field[]>([]);

  const onSubmit = form.handleSubmit(async (fields) => {
    if (step < MAX_STEP) {
      return setStep(step + 1);
    }

    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan penambahan anda sedang diproses",
    });

    const data = new FormData();
    const { title, level } = fields;
    data.append("title", title);
    data.append("level", level);

    // const createPositionAction = await upsertPosition(data);
    // if (createPositionAction.error) {
    //   dismiss(loadingToast.id);
    //   return toast({
    //     title: "Gagal Menambahkan!",
    //     description: `Gagal menambah data posisi (${createPositionAction.error.message})`,
    //   });
    // }

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

  const forms = useMemo(
    () => [
      <FirstStepCreateDocumment form={form} />,
      <SecondStepCreateDocument
        fieldTypes={fieldTypes}
        fields={fields}
        setFields={setFields}
      />,
    ],
    [fields, fieldTypes],
  );

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
              {forms[step - 1]}
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
                type={step < 4 ? "button" : "submit"}
                onClick={
                  step < 4
                    ? async () => {
                        const fieldsToTrigger: {
                          [key: string]: any[];
                        } = {
                          "1": ["title", "level"],
                          "2": [],
                          "3": [],
                          "4": ["content"],
                        };

                        const isValid = await form.trigger(
                          fieldsToTrigger[
                            step.toString() as keyof typeof fieldsToTrigger
                          ],
                        );

                        isValid && setStep(step + 1);
                      }
                    : undefined
                }
                disabled={loading}
              >
                {step < 4 ? "Selanjutnya" : "Simpan"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
