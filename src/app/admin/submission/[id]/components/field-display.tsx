"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { downloadBase64File } from "@/lib/utils";
import { BaseFieldType } from "@prisma/client";
import { FC } from "react";

export const FieldsDisplay: FC<{
  fields: {
    label: string;
    answer: string;
    type: BaseFieldType;
    variableName: string;
  }[];
}> = ({ fields }) => {
  return (
    <div className="mt-2 flex flex-col gap-y-2">
      {fields.map((field) => (
        <div
          key={field.variableName}
          className="rounded-md border border-input p-4"
        >
          <Label>{field.variableName}</Label>
          {field.type !== "file" && field.type !== "checkbox" && (
            <Input value={field.answer} disabled />
          )}
          {field.type === "file" && (
            <Button
              variant={"default"}
              type="button"
              onClick={() =>
                downloadBase64File(field.answer, field.variableName)
              }
              className="w-full"
            >
              Download
            </Button>
          )}
          {field.type === "checkbox" &&
            field.answer
              .split(", ")
              .map((option) => <Input key={option} value={option} disabled />)}
        </div>
      ))}
    </div>
  );
};
