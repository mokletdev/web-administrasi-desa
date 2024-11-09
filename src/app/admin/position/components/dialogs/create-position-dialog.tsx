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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useZodForm } from "@/hooks/use-zod-form";
import { DialogBaseProps } from "@/types/dialog";
import { DivisionLevel } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { z } from "zod";
import { upsertPosition } from "../../actions";
import { divisionLevelMap } from "@/lib/utils";

const createPositionSchema = z.object({
  title: z.string().min(1),
  level: z.enum(Object.keys(DivisionLevel) as [string, ...string[]]),
});

export const CreatePositionDialog: FC<DialogBaseProps> = ({
  open,
  setIsOpen,
}) => {
  const form = useZodForm({
    defaultValues: {
      title: "",
    },
    schema: createPositionSchema,
  });
  const [loading, setLoading] = useState(false);
  const { toast, dismiss } = useToast();
  const router = useRouter();

  const onSubmit = form.handleSubmit(async (fields) => {
    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan penambahan anda sedang diproses",
    });

    const data = new FormData();
    const { title, level } = fields;
    data.append("title", title);
    data.append("level", level);

    const createPositionAction = await upsertPosition(data);
    if (createPositionAction.error) {
      dismiss(loadingToast.id);
      return toast({
        title: "Gagal Menambahkan!",
        description: `Gagal menambah data posisi (${createPositionAction.error.message})`,
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

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambahkan Posisi</DialogTitle>
          <DialogDescription>
            Tambahkan Posisi disini. Tekan tombol simpan jika telah selesai.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={onSubmit} className="w-full">
            <div className="grid w-full gap-4 py-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel htmlFor="title">Nama Posisi</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Nama posisi" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tingkat Jabatan</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border border-neutral-300">
                          <SelectValue placeholder="Pilih tingkat jabatan" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.keys(DivisionLevel).map((l) => (
                          <SelectItem key={l} value={l}>
                            {
                              divisionLevelMap[
                                l as keyof typeof divisionLevelMap
                              ]
                            }
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
