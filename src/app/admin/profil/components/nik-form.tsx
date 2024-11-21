"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import updateUserEsign, { checkNIKStatus } from "../action";

const NikForm = ({
  nikData,
  userId,
}: {
  nikData: string | null | undefined;
  userId: string;
}) => {
  const [nik, setNik] = useState<string | null | undefined>(nikData);
  const [loading, setLoading] = useState<boolean>(false);
  const [nikStatus, setNikStatus] = useState<
    | "ISSUE"
    | "EXPIRED"
    | "RENEW"
    | "WAITING_FOR_VERIFICATION"
    | "NEW"
    | "NO_CERTIFICATE"
    | "NOT_REGISTERED"
    | "SUSPEND"
    | "REVOKE"
    | undefined
  >();
  const [nikMessage, setNikMessage] = useState<string | undefined>();
  const [verifyLoading, setVerifyLoading] = useState<boolean>(false);

  const { dismiss, toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    console.log(nikStatus);
  }, [nikStatus]);

  async function handleSubmit() {
    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan perubahan anda sedang diproses",
    });
    if (!nik) {
      dismiss(loadingToast.id);
      return toast({
        title: "Gagal Mengubah!",
        description: `NIK tidak boleh kosong!)`,
      });
    }

    const res = await updateUserEsign(userId, nik);

    if (res.error) {
      dismiss(loadingToast.id);
      setLoading(false);
      return toast({
        title: "Gagal Mengubah!",
        description: `Gagal mengubah nik! (${res.error.message})`,
      });
    }

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Mengubah!",
      description: `Berhasil mengubah nik!`,
    });
    setLoading(false);
    return router.refresh();
  }

  async function handleVerify() {
    setVerifyLoading(true);

    const loadingToast = toast({
      title: "Memverifikasi...",
      description: "Permintaan perubahan anda sedang diproses",
    });

    if (!nikData) {
      dismiss(loadingToast.id);
      setVerifyLoading(false);
      return toast({
        title: "Gagal Verifikasi!",
        description: `Nik kosong`,
      });
    }

    const res = await checkNIKStatus(nikData);

    if (res.error) {
      dismiss(loadingToast.id);
      setVerifyLoading(false);
      return toast({
        title: "Gagal Verifikasi!",
        description: `Gagal Memverifikasi nik! (${res.error.message})`,
      });
    }
    setNikStatus(res.data.status);
    setNikMessage(res.data.message);

    dismiss(loadingToast.id);
    setVerifyLoading(false);
    return toast({
      title: "Berhasil Memverifikas!",
      description: `Berhasil memverifikasi nik!`,
    });
  }

  return (
    <>
      <Input
        onChange={(e) => setNik(e.target.value)}
        type="number"
        onWheel={(e) => e.currentTarget.blur()}
        value={nik ?? ""}
        className="mb-2"
      />
      <div className="mt-4 flex min-h-20 flex-col gap-8">
        {nikStatus && (
          <>
            <p className="w-fit rounded-md bg-black px-2 py-1 text-white">
              {nikStatus}
            </p>
            <p>{nikMessage}</p>
          </>
        )}
      </div>
      <div className="flex w-full justify-end">
        <div className="flex w-[30%] gap-2">
          <Button
            className="max-w-[40%] flex-grow"
            disabled={!nikData || verifyLoading}
            onClick={handleVerify}
          >
            Cek Status NIK
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={loading || !nik}
            className="flex-grow"
          >
            Simpan
          </Button>
        </div>
      </div>
    </>
  );
};

export default NikForm;
