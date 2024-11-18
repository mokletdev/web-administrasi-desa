"use client";

import { Button } from "@/components/ui/button";
import { downloadBase64File } from "@/lib/utils";
import { Download } from "lucide-react";
import { FC } from "react";

export const DownloadTemplateButton: FC<{
  base64: string;
  filename: string;
}> = ({ base64, filename }) => {
  const handleDownload = () => {
    downloadBase64File(base64, filename);
  };

  return (
    <Button
      onClick={handleDownload}
      variant={"default"}
      size={"sm"}
      className="w-fit"
    >
      Download Template <Download />
    </Button>
  );
};
