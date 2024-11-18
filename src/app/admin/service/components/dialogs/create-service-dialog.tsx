"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { DialogBaseProps } from "@/types/dialog";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { useZodForm } from "@/hooks/use-zod-form";
import { z } from "zod";
import { upsertService } from "../../actions";
import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const createServiceSchema = z.object({
  name: z.string().min(1),
});

export const CreateServiceDialog: FC<DialogBaseProps> = ({
  open,
  setIsOpen,
}) => {
  const form = useZodForm({
    values: { name: "" },
    schema: createServiceSchema,
  });
  const [loading, setLoading] = useState(false);
  const { toast, dismiss } = useToast();
  const router = useRouter();

  const onSubmit = form.handleSubmit(async ({ name }) => {
    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan penambahan anda sedang diproses",
    });

    const res = await upsertService(name);

    if (res.error) {
      dismiss(loadingToast.id);
      return toast({
        title: "Gagal Menambahkan!",
        description: `Gagal menambah layanan (${res.error.message})`,
      });
    }

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Menambahkan!",
      description: `Berhasil menambahkan layanan baru`,
    });
    setLoading(false);
    setIsOpen(false);
    return router.push("/admin/service/" + res.data?.id);
  });

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambahkan Layanan</DialogTitle>
          <DialogDescription>
            Tambahkan Layanan disini. Tekan tombol simpan jika telah selesai.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={onSubmit}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-1.5">
                  <FormLabel htmlFor="label">Nama Layanan</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Nama layanan" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Button onClick={onSubmit} disabled={loading}>
          Tambahkan
        </Button>
      </DialogContent>
    </Dialog>
  );
};
