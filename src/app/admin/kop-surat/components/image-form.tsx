"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { AdministrativeUnit } from "@prisma/client";
import { Upload } from "lucide-react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { DragEvent, useEffect, useState } from "react";
import upsertLetterHead from "../action";
import Link from "next/link";

const ImageForm = ({
  administrativeUnit,
}: {
  administrativeUnit: AdministrativeUnit;
}) => {
  let imageBuff;
  if (administrativeUnit.letterhead) {
    imageBuff = Buffer.from(administrativeUnit.letterhead!, "base64");
  }
  const [image, setImage] = useState<File | null>();

  const [preview, setPreview] = useState<string | null>(
    administrativeUnit.letterhead ?? null,
  );

  useEffect(() => {
    if (image) {
      image.arrayBuffer().then((i) => {
        console.log(image);
        const imageBuffer = Buffer.from(i);
        const imageBase64 =
          "data:" + image.type + ";base64," + imageBuffer.toString("base64");
        setPreview(imageBase64);
      });
    }
  }, [image]);

  const [isDrag, setIsDrag] = useState(false);
  const [loading, setLoading] = useState(false);
  const { dismiss, toast } = useToast();
  const router = useRouter();
  const acceptedMimeType = ["image/jpg", "image/png", "image/jpeg"];

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();

    const droppedFiles = event.dataTransfer.files;
    if (
      droppedFiles.length > 0 &&
      acceptedMimeType.some((i) => i === droppedFiles[0].type)
    ) {
      setImage(droppedFiles[0]);
    }
    setIsDrag(false);
  };

  const onSubmit = async (FormData: FormData) => {
    if (!image)
      return toast({
        title: "Gagal Mengirim!",
        description: `Gagal upload data Kop Surat (Kop surat kosong)`,
      });
    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan uplad anda sedang diproses",
    });
    if ((FormData.get("headerimage") as File).size < 1) {
      FormData.set("headerimage", image);
    }

    const res = await upsertLetterHead(FormData, administrativeUnit.id);

    if (res.error) {
      dismiss(loadingToast.id);
      return toast({
        title: "Gagal Upload!",
        description: `Gagal upload data Kop Surat (${res.error.message})`,
      });
    }

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Terkirim!",
      description: `Berhasil mengubah Kop Surat`,
    });
    setLoading(false);
    setImage(null);
    return router.refresh();
  };

  return (
    <>
      <form action={onSubmit} className="">
        <div>
          <label
            htmlFor="kopInput"
            className={`flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-neutral-500 bg-neutral-200 ${isDrag ? "bg-opacity-45" : "bg-opacity-0"} px-6 py-4 transition-all duration-300 hover:cursor-pointer hover:bg-opacity-45`}
            onDrop={handleDrop}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDrag(true);
            }}
            title={isDrag ? "Drop Image Anda" : undefined}
            onDragLeave={() => setIsDrag(false)}
          >
            {isDrag
              ? "Drop File Anda!"
              : `${image ? "Update" : "Ganti"} Kop Surat Anda`}
            {preview ? (
              <Image
                src={preview}
                width={200}
                height={300}
                alt={"Kop Surat " + administrativeUnit.name}
                unoptimized
                className="rounded-xl object-cover"
              />
            ) : (
              <Upload className="size-16" color="#313131" strokeWidth={1} />
            )}
            {"(PNG/JPG/JPEG)"} Max. 5 MB
          </label>
          <input
            type="file"
            className="absolute z-[-1] h-[0.1px] w-[0.1px] overflow-hidden opacity-0"
            id="kopInput"
            name="headerimage"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setImage(e.target.files?.[0]);
              }
            }}
            accept={acceptedMimeType.join(",")}
          />
        </div>
        <Button
          disabled={!image || loading}
          type="submit"
          className="mt-2 w-full"
        >
          Simpan
        </Button>
      </form>
      {administrativeUnit.letterhead && (
        <Link
          href={administrativeUnit.letterhead}
          className="mt-2 inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          target="_blank"
          download={`kop-surat-${administrativeUnit.name.toLowerCase().split(" ").join("-")}`}
        >
          Download template!
        </Link>
      )}
    </>
  );
};

export default ImageForm;
