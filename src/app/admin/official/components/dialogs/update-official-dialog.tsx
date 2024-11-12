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
import { useToast } from "@/hooks/use-toast";
import { useZodForm } from "@/hooks/use-zod-form";
import { DialogBaseProps } from "@/types/dialog";
import { DivisionLevel, Official, Position, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import Select, { MultiValue } from "react-select";
import { z } from "zod";
import upsertOfficial from "../../action";

const createOfficialSchema = z.object({
  title: z.string().min(1),
  level: z.enum(Object.keys(DivisionLevel) as [string, ...string[]]),
});

export const UpdateOfficialDialog: FC<
  DialogBaseProps & {
    officialData:
      | ({ officials: (Official & { user: User })[] } & Position)
      | null;
    officials: ({ official: Official } & User)[];
  }
> = ({ open, setIsOpen, officialData, officials }) => {
  const form = useZodForm({
    values: officialData
      ? {
          title: officialData.title,
          level: officialData.title,
        }
      : undefined,
    schema: createOfficialSchema,
  });

  const selectOptions: { value: string; label: string }[] = officials
    .filter((l) => !l.official)
    .map((i) => ({ value: i.id, label: i.name }))
    .filter(
      (item) =>
        !officialData?.officials
          .map((j) => ({ value: j.id, label: j.user.name }))
          .some((k) => item.value === k.value),
    );

  const [loading, setLoading] = useState(false);
  const { toast, dismiss } = useToast();
  const router = useRouter();
  const [selectedOfficials, setSelectedOfficials] = useState<
    MultiValue<{ label: string; value: string }>
  >([]);
  const [disconnectOfficial, setDisconnectOfficial] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    if (officialData) {
      setSelectedOfficials(
        officialData.officials.map((i) => ({
          label: i.user.name,
          value: i.userId!,
        })),
      );
    }
  }, [officialData]);

  useEffect(() => {
    if (officialData)
      setDisconnectOfficial(
        officialData.officials
          .filter((i) => !selectedOfficials.some((j) => i.userId === j.value))
          .map((k) => ({ label: k.user.name, value: k.userId! })),
      );
  }, [selectedOfficials]);

  const onSubmit = async () => {
    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan perubahan anda sedang diproses",
    });
    const updateOfficialAction = await upsertOfficial(
      officialData?.id!,
      selectedOfficials,
      disconnectOfficial,
    );
    if (updateOfficialAction.error) {
      setLoading(false);
      dismiss(loadingToast.id);
      return toast({
        title: "Gagal Mengubah!",
        description: `Gagal mengubah data posisi dengan ID ${officialData?.id} (${updateOfficialAction.error.message})`,
      });
    }

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Mengubah!",
      description: `Berhasil mengubah data tipe input dengan ID ${officialData?.id}`,
    });
    setLoading(false);
    setIsOpen(false);
    return router.refresh();
  };

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Perbarui Pejabat</DialogTitle>
          <DialogDescription>
            Perbarui Pejabat disini. Tekan tombol simpan jika telah selesai.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={onSubmit} className="w-full">
            <div className="grid w-full gap-4 py-4">
              <FormField
                name="officials"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel htmlFor="title">Pejabat</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        value={selectedOfficials}
                        options={selectOptions}
                        onChange={(e) => {
                          setSelectedOfficials(e);
                        }}
                        isMulti
                        unstyled
                        classNames={{
                          container: () =>
                            "border border-neutral-200 px-3 py-1 rounded-md",
                          multiValue: () =>
                            "px-2 py-1 bg-black me-2 rounded-lg text-white",
                          menu: () =>
                            "bg-white border border-neutral-200 -left-0 rounded-b-md px-2 py-1",
                          menuList: () => "gap-2 flex flex-col ",
                          option: () =>
                            "bg-white hover:bg-muted duration-300 transition-all rounded-md px-4 py-2",
                        }}
                        placeholder="Nama posisi"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button variant={"default"} onClick={onSubmit} disabled={loading}>
                Simpan
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
