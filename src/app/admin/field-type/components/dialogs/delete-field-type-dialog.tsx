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
import { deleteFieldType } from "../../actions";

export const ConfirmDeletionDialog: FC<
  DialogBaseProps & {
    fieldTypeIdToDelete?: number;
  }
> = ({ open, setIsOpen, fieldTypeIdToDelete }) => {
  const { toast, dismiss } = useToast();

  return (
    <AlertDialog open={open} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah anda yakin?</AlertDialogTitle>
          <AlertDialogDescription>
            Anda akan menghapus Tipe Input dengan ID {fieldTypeIdToDelete}. Aksi
            ini tidak bisa di undo. Ini akan secara permanen menghapus data ini
            dan menghapusnya dari server kami.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Batalkan
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              const loadingToast = toast({
                title: "Menghapus...",
                description: "Permintaan penghapusan data anda sedang diproses",
              });

              const data = new FormData();

              data.append("id", fieldTypeIdToDelete!.toString());
              const deleteFieldTypeAction = await deleteFieldType(data);
              if (deleteFieldTypeAction.error) {
                dismiss(loadingToast.id);
                return toast({
                  title: "Gagal menghapus!",
                  description: `Gagal menghapus data tipe input dengan ID ${fieldTypeIdToDelete} (${deleteFieldTypeAction.error.message})`,
                });
              }

              dismiss(loadingToast.id);
              setIsOpen(false);
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
