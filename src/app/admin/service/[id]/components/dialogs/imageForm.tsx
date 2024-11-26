"use client";

import { Upload } from "lucide-react";
import Image from "next/image";
import { DragEvent, useEffect, useState } from "react";

const ImageForm = ({
  ttdFile,
  onChange,
}: {
  ttdFile: File | null | undefined;
  onChange: (e: File) => void;
}) => {
  let imageBuff;
  let ttdImage;
  ttdFile?.arrayBuffer().then((i) => {
    const imageBuffer = Buffer.from(i);
    const imageBase64 =
      "data:" + ttdFile.type + ";base64," + imageBuffer.toString("base64");
    ttdImage = imageBase64;
  });
  if (ttdImage) {
    imageBuff = Buffer.from(ttdImage!, "base64");
  }
  const [image, setImage] = useState<File | null>();

  const [preview, setPreview] = useState<string | null>(ttdImage || null);

  useEffect(() => {
    if (image) {
      image.arrayBuffer().then((i) => {
        const imageBuffer = Buffer.from(i);
        const imageBase64 =
          "data:" + image.type + ";base64," + imageBuffer.toString("base64");
        setPreview(imageBase64);
      });
      onChange(image);
    }
  }, [image]);

  const [isDrag, setIsDrag] = useState(false);
  const acceptedMimeType = ["image/png"];

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

  return (
    <>
      <div>
        <label
          htmlFor="tteManual"
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
            : `${image ? "Update" : "Ganti"} TTE Anda`}
          {preview ? (
            <Image
              src={preview}
              width={200}
              height={300}
              alt={"aw"}
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
          id="tteManual"
          name="tteManual"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setImage(e.target.files?.[0]);
            }
          }}
          accept={acceptedMimeType.join(",")}
        />
      </div>
    </>
  );
};

export default ImageForm;
