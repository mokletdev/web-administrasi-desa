"use client";

import { z } from "zod";
import { FC } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useZodForm } from "@/hooks/use-zod-form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { upsertService } from "../../actions";
import { Button } from "@/components/ui/button";

const updateServiceSchema = z.object({
  name: z.string().min(1),
});

export const UpdateServiceForm: FC<{ name: string; id: string }> = ({
  name,
  id,
}) => {
  const form = useZodForm({
    defaultValues: { name },
    schema: updateServiceSchema,
  });
  const { dismiss, toast } = useToast();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = form.handleSubmit(async ({ name }) => {
    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan penambahan anda sedang diproses",
    });

    const res = await upsertService(name, id);

    if (res.error) {
      dismiss(loadingToast.id);
      return toast({
        title: "Gagal Menambahkan!",
        description: `Gagal menambah layanan (${res.error.message})`,
      });
    }

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Menyimpan!",
      description: `Berhasil menyimpan perubahan`,
    });
    setLoading(false);
    return router.push("/admin/service/" + res.data?.id);
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="flex flex-col gap-y-3">
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
        <Button type="submit" disabled={loading}>
          Simpan
        </Button>
      </form>
    </Form>
  );
};
