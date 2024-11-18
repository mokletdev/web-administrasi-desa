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
import { cn } from "@/lib/utils";
import { DialogBaseProps } from "@/types/dialog";
import { User } from "@prisma/client";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import Select, { SingleValue } from "react-select";
import upsertOfficial from "../../action";

export const CreateOfficialDialog: FC<
  DialogBaseProps & {
    userInArea: User[];
    unitId: string;
  }
> = ({ open, setIsOpen, userInArea, unitId }) => {
  const [userId, setUserId] = useState<
    SingleValue<{ value: string; label: string }> | undefined
  >();
  const [name, setName] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const { toast, dismiss } = useToast();
  const router = useRouter();

  const selectOption = userInArea.map((i) => ({ value: i.id, label: i.name }));

  const resetInput = () => {
    setUserId(undefined);
    setName(undefined);
  };
  const onSubmit = async () => {
    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan penambahan anda sedang diproses",
    });

    const res = await upsertOfficial(name, unitId, userId?.value);

    if (res.error) {
      dismiss(loadingToast.id);
      return toast({
        title: "Gagal Menambahkan!",
        description: `Gagal menambah data tipe input (${res.error.message})`,
      });
    }

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Menambahkan!",
      description: `Berhasil menambahkan data tipe input baru`,
    });
    setLoading(false);
    setIsOpen(false);
    resetInput();
    return router.refresh();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(a) => {
        setIsOpen(a);
        resetInput();
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambahkan Pejabat</DialogTitle>
          <DialogDescription>
            Tambahkan Tipe Input disini. Tekan tombol simpan jika telah selesai.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="flex flex-col space-y-1.5">
            <Label className={cn("text-black")} htmlFor={"name"}>
              Nama Jabatan
            </Label>
            <input
              type={"text"}
              className={cn(
                "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
              )}
              placeholder="Nama jabatan"
              id="name"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label className={cn("text-black")} htmlFor={"name"}>
              User
            </Label>
            <Select
              value={userId}
              options={selectOption}
              onChange={(e) => {
                setUserId(e);
              }}
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
              placeholder="Nama user"
            />
          </div>
        </div>
        <Button
          onClick={onSubmit}
          disabled={loading || !userId || !name ? true : false}
        >
          Tambahkan
        </Button>
      </DialogContent>
    </Dialog>
  );
};
