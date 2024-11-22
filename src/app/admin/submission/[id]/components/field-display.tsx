"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BaseFieldType } from "@prisma/client";
import { FC } from "react";

export const FieldsDisplay: FC<{
  fields: { label: string; answer: string; type: BaseFieldType }[];
}> = ({ fields }) => {
  return (
    <div className="mt-2 flex flex-col gap-y-2">
      {fields.map((field) => (
        <div key={field.label} className="rounded-md border border-input p-4">
          <Label>{field.label}</Label>
          {field.type !== "file" && field.type !== "checkbox" && (
            <Input value={field.answer} disabled />
          )}
          {/* TODO: Download file if the type is file */}
          {/* {field.type === "file"} */}
          {field.type === "checkbox" &&
            field.answer
              .split(", ")
              .map((option) => <Input value={option} disabled />)}
        </div>
      ))}
    </div>
  );
};
