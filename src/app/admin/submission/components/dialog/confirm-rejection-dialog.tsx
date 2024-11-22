"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { DialogBaseProps } from "@/types/dialog";
import { FC } from "react";
import { handleApproval } from "../../actions";

export const ConfirmRejectionDialog: FC<
  DialogBaseProps & {
    id: string;
  }
> = ({ open, setIsOpen, id }) => {
  const { toast, dismiss } = useToast();

  return (
    <AlertDialog open={open} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah anda yakin?</AlertDialogTitle>
          <AlertDialogDescription>
            Apakah anda yakin ingin menolak permintaan ini?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Batalkan
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              const loadingToast = toast({
                title: "Menolak...",
                description:
                  "Permintaan penolakan permintaan anda sedang diproses",
              });

              const rejectAction = await handleApproval(id, "REJECT");
              if (rejectAction.error) {
                dismiss(loadingToast.id);
                return toast({
                  title: "Gagal menolak permintaan!",
                  description: `Gagal menolak permintaan dengan ID ${id} (${rejectAction.error.message})`,
                });
              }

              dismiss(loadingToast.id);
              toast({
                title: "Berhasil menolak!",
                description: `Berhasil menolak permintaan dengan ID ${id}`,
              });
              setIsOpen(false);
            }}
          >
            Konfirmasi
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
