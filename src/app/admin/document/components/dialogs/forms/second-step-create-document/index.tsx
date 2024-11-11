"use client";

import { Button } from "@/components/ui/button";
import { BaseFieldType } from "@prisma/client";
import { Plus } from "lucide-react";
import { Dispatch, FC, SetStateAction } from "react";
import { Field, RenderField } from "./components/field";

export const SecondStepCreateDocument: FC<{
  fields: Field[];
  setFields: Dispatch<SetStateAction<Field[]>>;
  fieldTypes: { id: number; name: string; baseType: BaseFieldType }[];
}> = ({ fields, setFields, fieldTypes }) => {
  return (
    <>
      <div className="flex flex-col gap-y-2 divide-y divide-foreground">
        {fields
          .sort((a, b) => a.fieldNumber - b.fieldNumber)
          .map((field) => (
            <RenderField
              key={field.fieldNumber}
              field={field}
              fieldTypes={fieldTypes}
              fields={fields}
              setFields={setFields}
            />
          ))}
      </div>
      {fieldTypes.length > 0 && (
        <Button
          className="w-full"
          variant={"default"}
          onClick={() => {
            setFields((prevFields) => [
              ...prevFields,
              {
                fieldNumber: prevFields.length + 1,
                fieldTypeId: fieldTypes[0]?.id ?? 0, // Use `0` or another default ID if `fieldTypes` is empty
                label: "Input Baru",
                required: false,
              },
            ]);
          }}
        >
          Tambah Input <Plus />
        </Button>
      )}
    </>
  );
};
