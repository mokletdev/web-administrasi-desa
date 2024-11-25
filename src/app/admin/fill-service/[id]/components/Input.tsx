"use client";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import {
  Dispatch,
  DragEvent,
  FC,
  InputHTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { extension } from "mime-types";

const RequiredMark: FC = () => {
  return <span className="font-bold text-destructive"> *</span>;
};

const FileInput = ({
  fieldName,
  required,
  accept,
  centerText,
  name,
  id,
  files,
  setFiles,
}: {
  fieldName: string;
  required: boolean;
  accept: InputHTMLAttributes<HTMLInputElement>["accept"][];
  centerText: string;
  name: string;
  id: string;
  setFiles: Dispatch<
    SetStateAction<
      {
        name: string;
        value: File | undefined;
      }[]
    >
  >;
  files: {
    name: string;
    value: File | undefined;
  }[];
}) => {
  const [file, setFile] = useState<File | null>();

  const [isDrag, setIsDrag] = useState(false);

  useEffect(() => {
    if (file) {
      let currFiles = files;
      const arrIndex = currFiles.findIndex((obj) => obj.name === name);
      currFiles[arrIndex].value = file;
      setFiles(currFiles);
    }
  }, [file]);

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();

    const droppedFiles = event.dataTransfer.files;
    if (
      droppedFiles.length > 0 &&
      accept.some((i) => i === droppedFiles[0].type)
    ) {
      setFile(droppedFiles[0]);
    }
    setIsDrag(false);
  };
  return (
    <>
      <div>
        <div>
          <Label>{fieldName}</Label>
          {required && <RequiredMark />}
        </div>
        <label
          htmlFor={id}
          className={`flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-neutral-500 bg-neutral-200 ${isDrag ? "bg-opacity-45" : "bg-opacity-0"} px-6 py-4 transition-all duration-300 hover:cursor-pointer hover:bg-opacity-45`}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDrag(true);
          }}
          title={isDrag ? "Drop File Anda" : undefined}
          onDragLeave={() => setIsDrag(false)}
        >
          {isDrag ? "Drop File Anda!" : `${centerText}`}
          {file ? (
            <p>{file.name}</p>
          ) : (
            <Upload className="size-16" color="#313131" strokeWidth={1} />
          )}
          {accept.map((i) => (extension(i!) as string).toUpperCase()).join("/")}{" "}
          Max. 5 MB
        </label>
        <input
          type="file"
          className="absolute z-[-1] h-[0.1px] w-[0.1px] overflow-hidden opacity-0"
          id={id}
          name={name}
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setFile(e.target.files?.[0]);
            }
          }}
          accept={accept.join(",")}
        />
      </div>
    </>
  );
};

export default FileInput;
