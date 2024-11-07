import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useZodForm } from "@/hooks/use-zod-form";
import { FieldType } from "@prisma/client";
import { useRouter } from "next/navigation";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { z } from "zod";

const updateFieldTypeSchema = z.object({
  label: z.string().min(1),
  placeholder: z.string().optional(),
  defaultValue: z.string().optional(),
});

export const UpdateFieldTypeDialog: FC<{
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  fieldTypeData: FieldType;
}> = ({ open, setIsOpen, fieldTypeData }) => {
  const form = useZodForm({
    values: {
      label: fieldTypeData.label,
      placeholder:
        fieldTypeData.placeholder === null
          ? undefined
          : fieldTypeData.placeholder,
      defaultValue:
        fieldTypeData.defaultValue === null
          ? undefined
          : fieldTypeData.defaultValue,
    },
    schema: updateFieldTypeSchema,
  });
  const [loading, setLoading] = useState(false);
  const { toast, dismiss } = useToast();
  const router = useRouter();

  const onSubmit = form.handleSubmit(async (fields) => {
    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan perubahan anda sedang diproses",
    });

    console.log(fields);
    // TODO: Update action

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Mengubah!",
      description: `Berhasil mengubah data tipe input dengan ID ${fieldTypeData?.id}`,
    });
    setLoading(false);
    setIsOpen(false);
    return router.refresh();
  });

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Tipe Input</DialogTitle>
          <DialogDescription>
            Perbarui Tipe Input disini. Tekan tombol simpan jika telah selesai.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={onSubmit} className="w-full">
            <div className="grid w-full gap-4 py-4">
              <FormField
                control={form.control}
                name="label"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel htmlFor="label">Label</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Label input" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="placeholder"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel htmlFor="placeholder">Placeholder</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Placeholder input" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="defaultValue"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel htmlFor="defaultValue">Default value</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Default value" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button variant={"default"} type="submit" disabled={loading}>
                Simpan
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
