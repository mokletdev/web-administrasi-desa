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
import { FC, useMemo, useState } from "react";
import { useZodForm } from "@/hooks/use-zod-form";
import { z } from "zod";
import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { handleApproval, handleSign } from "../../actions";

export const ParaphraseOrRegisterNumberDialog: FC<
  DialogBaseProps & { id: string; officialId?: string }
> = ({ open, setIsOpen, officialId, id }) => {
  const createServiceSchema = useMemo(
    () =>
      z.object({
        paraphraseOrRegisterNumber: z.string().min(1),
      }),
    [],
  );
  const form = useZodForm({
    values: { paraphraseOrRegisterNumber: "" },
    schema: createServiceSchema,
  });
  const [loading, setLoading] = useState(false);
  const { toast, dismiss } = useToast();
  const router = useRouter();

  const onSubmit = form.handleSubmit(async ({ paraphraseOrRegisterNumber }) => {
    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan penambahan anda sedang diproses",
    });

    if (officialId) {
      // Handle official approval
      const res = await handleSign(
        id,
        "ACCEPT",
        officialId,
        paraphraseOrRegisterNumber,
      );

      if (res.error) {
        dismiss(loadingToast.id);
        setLoading(false);
        return toast({
          title: "Gagal Menambahkan!",
          description: `Gagal menambah layanan (${res.error.message})`,
        });
      }
    } else {
      // If isParaphrase is true, then we'll use another function
      const res = await handleApproval(
        id,
        "ACCEPT",
        paraphraseOrRegisterNumber,
      );

      if (res.error) {
        dismiss(loadingToast.id);
        setLoading(false);
        return toast({
          title: "Gagal Menambahkan!",
          description: `Gagal menambah layanan (${res.error.message})`,
        });
      }
    }

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Menambahkan!",
      description: `Berhasil menambahkan layanan baru`,
    });
    setLoading(false);
    setIsOpen(false);
    return router.refresh();
  });

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {officialId ? "Tanda Tangani Permintaan" : "Setujui Permintaan"}
          </DialogTitle>
          <DialogDescription>
            Setujui permintaan disini. Tekan tombol simpan jika telah selesai.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={onSubmit}>
            <FormField
              control={form.control}
              name="paraphraseOrRegisterNumber"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-1.5">
                  <FormLabel htmlFor="paraphraseOrRegisterNumber">
                    {officialId ? "Parafrase" : "Nomor Registrasi"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={
                        officialId ? "Parafrase anda" : "Nomor registrasi"
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Button onClick={onSubmit} disabled={loading}>
          Konfirmasi Persetujuan
        </Button>
      </DialogContent>
    </Dialog>
  );
};
