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
import { useRouter } from "next/navigation";
import { Dispatch, FC, SetStateAction } from "react";
import { submitForm } from "../../actions";

export const ConfirmationDialog: FC<
  DialogBaseProps & {
    userId: string;
    formId: string;
    answers: { name: string; value: string }[];
    setLoading: Dispatch<SetStateAction<boolean>>;
  }
> = ({ open, setIsOpen, userId, formId, answers, setLoading }) => {
  const { toast, dismiss } = useToast();
  const router = useRouter();

  return (
    <AlertDialog open={open} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah anda yakin?</AlertDialogTitle>
          <AlertDialogDescription>
            Apakah anda yakin untuk mengirim permintaan pengajuan pembuatan
            surat ini? Aksi ini tidak dapat dibatalkan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Batalkan
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              const loadingToast = toast({
                title: "Memproses...",
                description:
                  "Permintaan pengajuan surat anda sedang diproses, mohon menunggu",
              });

              const submissionResult = await submitForm({
                userId,
                formId,
                answers,
              });

              if (submissionResult?.error) {
                setLoading(false);
                dismiss(loadingToast.id);
                return toast({
                  title: "Gagal Mengirim!",
                  description: `Gagal mengirim permintaan pengajuan surat (${submissionResult.error.message})`,
                });
              }

              dismiss(loadingToast.id);
              toast({
                title: "Berhasil Menambahkan!",
                description: `Berhasil mengirim data formulir pengajuan surat. Anda akan diarahkan ke riwayat permintaan anda.`,
              });
              setLoading(false);
              return router.push("/dashboard/request");
            }}
          >
            Konfirmasi
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
