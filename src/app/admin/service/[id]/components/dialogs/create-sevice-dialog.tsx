"use client";

import { Button } from "@/components/ui/button";
import {
  DialogFullscreen,
  DialogFullscreenContent,
  DialogFullscreenDescription,
  DialogFullscreenHeader,
  DialogFullscreenTitle,
} from "@/components/ui/dialog-fullscreen";
import { cn } from "@/lib/utils";
import { DialogBaseProps } from "@/types/dialog";
import { AdministrativeLevel } from "@prisma/client";
import { Label } from "@radix-ui/react-label";
import { FC } from "react";

export const CreateServiceDialog: FC<DialogBaseProps & {AdminLevel:AdministrativeLevel}> = ({
  open,
  setIsOpen,
  AdminLevel
}) => {
  return (
    <DialogFullscreen open={open} onOpenChange={setIsOpen}>
      <DialogFullscreenContent className="sm:max-w-[425px]">
        <DialogFullscreenHeader>
          <DialogFullscreenTitle>Tambahkan Pejabat</DialogFullscreenTitle>
          <DialogFullscreenDescription>
            Tambahkan Tipe Input disini. Tekan tombol simpan jika telah selesai.
          </DialogFullscreenDescription>
        </DialogFullscreenHeader>
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
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label className={cn("text-black")} htmlFor={"name"}>
              User
            </Label>
            {/* <Select
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
            /> */}
          </div>
        </div>
        <Button>Tambahkan</Button>
      </DialogFullscreenContent>
    </DialogFullscreen>
  );
};
