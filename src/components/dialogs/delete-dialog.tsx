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
import { ActionResponse } from "@/types/actions";
import { DialogBaseProps } from "@/types/dialog";
import { FC } from "react";
import { useRouter } from "next/navigation";

export const ConfirmDeletionDialog: FC<
  DialogBaseProps & {
    id: any;
    description: string;
    serverAction: (id: any) => Promise<
      ActionResponse<{
        id: any;
      }>
    >;
  }
> = ({ open, setIsOpen, id, description, serverAction }) => {
  const { toast, dismiss } = useToast();
  const router = useRouter();

  return (
    <AlertDialog open={open} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah anda yakin?</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
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

              const deleteAction = await serverAction(id);
              if (deleteAction.error) {
                dismiss(loadingToast.id);
                return toast({
                  title: "Gagal menghapus!",
                  description: `Gagal menghapus data dengan ID ${id} (${deleteAction.error.message})`,
                });
              }

              dismiss(loadingToast.id);
              toast({
                title: "Berhasil menghapus!",
                description: `Berhasil menghapus data dengan ID ${id}`,
              });
              setIsOpen(false);
              return router.refresh();
            }}
          >
            Konfirmasi
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
