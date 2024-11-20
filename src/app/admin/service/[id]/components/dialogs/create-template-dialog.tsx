"use client";

import { Button } from "@/components/ui/button";
import {
  DialogFullscreen,
  DialogFullscreenContent,
  DialogFullscreenDescription,
  DialogFullscreenHeader,
  DialogFullscreenTitle,
} from "@/components/ui/dialog-fullscreen";
import { divisionLevelMap } from "@/lib/utils";
import { DialogBaseProps } from "@/types/dialog";
import { AdministrativeLevel } from "@prisma/client";
import { Label } from "@radix-ui/react-label";
import { FC } from "react";
import { z } from "zod";
import { useZodForm } from "@/hooks/use-zod-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { roleLevelMap } from "@/lib/utils";
import { Input, FileField } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { convertToPdf } from "@/app/actions/docx-pdf";
import { Document, Page } from "react-pdf";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
  DialogBaseProps & { adminLevel: AdministrativeLevel }
> = ({ open, setIsOpen, adminLevel }) => {
  const form = useZodForm({
    defaultValues: { title: "" },
    schema: createTemplateSchema,
  });

  const content = form.watch("content");

  const [preview, setPreview] = useState<string>();
  const [previewPageNumber, setPreviewPageNumber] = useState(1);

  useEffect(() => {
    const updatePreview = async () => {
      if (content && content[0] instanceof File) {
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
          {preview && (
            <div className="relative mb-12 block">
              <div className="flex items-center justify-between">
                <Button variant={"outline"}>
                  <ArrowLeft /> Halaman Sebelumnya
                </Button>
                <Button variant="outline">
                  Halaman Selanjutnya <ArrowRight />
                </Button>
              </div>
              <iframe
                src={`data:application/pdf;base64,${preview}`}
                scrolling="no"
                className="h-full w-full"
              ></iframe>
            </div>
          )}
        </Form>
        <Button type="submit">Tambahkan</Button>
      </DialogFullscreenContent>
    </DialogFullscreen>
  );
};
