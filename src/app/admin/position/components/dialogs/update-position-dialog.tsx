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
import { DivisionLevel, Position } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { z } from "zod";
import { upsertPosition } from "../../actions";

const createPositionSchema = z.object({
  title: z.string().min(1),
  level: z.enum(Object.keys(DivisionLevel) as [string, ...string[]]),
});

const levelMap = {
  CITY: "Kota",
  DISTRICT: "Kecamatan",
  SUBDISTRICT: "Kelurahan",
};

export const UpdatePositionDialog: FC<
  DialogBaseProps & { positionData: Position | null }
> = ({ open, setIsOpen, positionData }) => {
  const form = useZodForm({
    values: positionData
      ? {
          title: positionData.title,
          level: positionData.level,
        }
      : undefined,
    schema: createPositionSchema,
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

    const data = new FormData();
    const { id } = positionData!;
    const { title, level } = fields;
    data.append("id", id.toString());
    data.append("title", title);
    data.append("level", level);

    const updatePositionAction = await upsertPosition(data);
    if (updatePositionAction.error) {
      dismiss(loadingToast.id);
      return toast({
        title: "Gagal Mengubah!",
        description: `Gagal mengubah data posisi dengan ID ${positionData?.id} (${updatePositionAction.error.message})`,
      });
    }

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Mengubah!",
      description: `Berhasil mengubah data tipe input dengan ID ${positionData?.id}`,
    });
    setLoading(false);
    setIsOpen(false);
    return router.refresh();
  });

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Perbarui Posisi</DialogTitle>
          <DialogDescription>
            Perbarui Posisi disini. Tekan tombol simpan jika telah selesai.
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
                            {levelMap[l as keyof typeof levelMap]}
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
