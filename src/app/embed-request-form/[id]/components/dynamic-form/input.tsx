"use client";

import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { extension } from "mime-types";
import { ChangeEvent, DragEvent, FC, useEffect, useState } from "react";

// Types
interface FileData {
  name: string;
  value: File | undefined;
}

interface FileInputProps {
  fieldName: string;
  required: boolean;
  accept: string[];
  centerText: string;
  name: string;
  id: string;
  files: FileData[];
  setFiles: (files: FileData[]) => void;
}

interface DragLabelProps {
  isDragging: boolean;
  centerText: string;
  file: File | null;
  acceptedFormats: string;
  onDrop: (event: DragEvent<HTMLLabelElement>) => void;
  onDragOver: (event: DragEvent<HTMLLabelElement>) => void;
  onDragLeave: () => void;
  htmlFor: string;
}

// Components
const RequiredMark: FC = () => (
  <span className="font-bold text-destructive"> *</span>
);

const DragLabel: FC<DragLabelProps> = ({
  isDragging,
  centerText,
  file,
  acceptedFormats,
  onDrop,
  onDragOver,
  onDragLeave,
  htmlFor,
}) => (
  <label
    htmlFor={htmlFor}
    className={`flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-neutral-500 bg-neutral-200 px-6 py-4 transition-all duration-300 hover:cursor-pointer hover:bg-opacity-45 ${isDragging ? "bg-opacity-45" : "bg-opacity-0"} `}
    onDrop={onDrop}
    onDragOver={onDragOver}
    onDragLeave={onDragLeave}
    title={isDragging ? "Drop File Anda" : undefined}
  >
    {isDragging ? "Drop File Anda!" : centerText}
    {file ? (
      <p>{file.name}</p>
    ) : (
      <Upload className="size-16" color="#313131" strokeWidth={1} />
    )}
    {acceptedFormats} Max. 5 MB
  </label>
);

const FileInput: FC<FileInputProps> = ({
  fieldName,
  required,
  accept,
  centerText,
  name,
  id,
  files,
  setFiles,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Update files state when file changes
  useEffect(() => {
    if (!file) return;

    setFiles(
      files.map((fileData) =>
        fileData.name === name ? { ...fileData, value: file } : fileData,
      ),
    );
  }, [file, name, files, setFiles]);

  // File validation
  const isValidFileType = (file: File): boolean => {
    return accept.some((type) => type === file.type);
  };

  // Event handlers
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && isValidFileType(selectedFile)) {
      setFile(selectedFile);
    }
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();

    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && isValidFileType(droppedFile)) {
      setFile(droppedFile);
    }
    setIsDragging(false);
  };

  const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const acceptedFormats = accept
    .map((type) => (extension(type) as string).toUpperCase())
    .join("/");

  return (
    <div>
      <div>
        <Label>{fieldName}</Label>
        {required && <RequiredMark />}
      </div>

      <DragLabel
        isDragging={isDragging}
        centerText={centerText}
        file={file}
        acceptedFormats={acceptedFormats}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={() => setIsDragging(false)}
        htmlFor={id}
      />

      <input
        type="file"
        id={id}
        name={name}
        onChange={handleFileChange}
        accept={accept.join(",")}
        className="absolute z-[-1] h-[0.1px] w-[0.1px] overflow-hidden opacity-0"
      />
    </div>
  );
};

export default FileInput;
