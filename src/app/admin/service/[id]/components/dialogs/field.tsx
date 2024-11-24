import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { labelVariants } from "@/components/ui/label";
import { useZodForm } from "@/hooks/use-zod-form";
import { BaseFieldType } from "@prisma/client";
import { ArrowDown, ArrowRight, ArrowUp, Plus, Trash } from "lucide-react";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { z } from "zod";

const upsertFieldSchema = z.object({
  label: z.string().optional(),
  fieldTypeId: z.number(),
  fieldNumber: z.number(),
  options: z
    .array(
      z.object({
        id: z.string().optional(),
        value: z.string(),
      }),
    )
    .optional(),
});

export type Field = z.infer<typeof upsertFieldSchema> & { id?: number };

export const RenderField: FC<{
  field: Field;
  fieldTypes?: { id: number; label: string; baseType: BaseFieldType }[];
  fields: Field[];
  setFields: Dispatch<SetStateAction<Field[]>>;
}> = ({ field, fieldTypes, fields, setFields }) => {
  const form = useZodForm({ values: { ...field }, schema: upsertFieldSchema });

  const fieldTypeId = form.watch("fieldTypeId");
  const baseType = fieldTypes?.find(
    (fieldType) => fieldType.id === fieldTypeId,
  )?.baseType;

  const [newOption, setNewOption] = useState<string>("");

  const handleChange = (name: string, value: unknown) => {
    // Update the specific field in fields array
    setFields((prevFields) =>
      prevFields.map((f) =>
        f.fieldNumber === field.fieldNumber ? { ...f, [name]: value } : f,
      ),
    );
  };

  useEffect(() => {
    if (baseType !== "radio" && baseType !== "checkbox") {
      // Update current field's options
      setFields((prevFields) =>
        prevFields.map((f) =>
          f.fieldNumber === field.fieldNumber
            ? { ...f, options: undefined }
            : f,
        ),
      );
    }
  }, [baseType, field.fieldNumber, setFields]);

  return (
    <div className="flex w-full flex-col gap-y-1.5 rounded-md border border-input bg-background p-4 shadow-sm transition-all duration-300">
      <div className="mb-2 flex items-center justify-between">
        <p
          className={labelVariants({
            className: "font-bold text-foreground",
          })}
        >
          {fieldTypes ? "Input" : "Persyaratan"} No. {field.fieldNumber}
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant={"outline"}
            disabled={field.fieldNumber === 1}
            size={"icon"}
            type="button"
            onClick={() => {
              // Increase current field's fieldNumber
              setFields((prevFields) =>
                prevFields.map((f) => {
                  if (f.fieldNumber === field.fieldNumber) {
                    return { ...f, fieldNumber: field.fieldNumber - 1 };
                  } else if (f.fieldNumber === field.fieldNumber - 1) {
                    return { ...f, fieldNumber: f.fieldNumber + 1 };
                  }

                  return f;
                }),
              );
            }}
          >
            <ArrowUp />
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            type="button"
            disabled={field.fieldNumber === fields.length}
            onClick={() => {
              // Decrease current field's fieldNumber
              setFields((prevFields) =>
                prevFields.map((f) => {
                  if (f.fieldNumber === field.fieldNumber) {
                    return { ...f, fieldNumber: field.fieldNumber + 1 };
                  } else if (f.fieldNumber === field.fieldNumber + 1) {
                    return { ...f, fieldNumber: f.fieldNumber - 1 };
                  }

                  return f;
                }),
              );
            }}
          >
            <ArrowDown />
          </Button>
          {field.label !== "NIK" && (
            <Button
              variant={"destructive"}
              size={"icon"}
              type="button"
              onClick={() => {
                // Delete current field
                setFields((prevFields) =>
                  prevFields
                    .filter((f) => f.fieldNumber !== field.fieldNumber)
                    .map((f) => {
                      if (f.fieldNumber > field.fieldNumber) {
                        return { ...f, fieldNumber: f.fieldNumber - 1 };
                      }

                      return f;
                    }),
                );
              }}
            >
              <Trash />
            </Button>
          )}
        </div>
      </div>
      <FormField
        control={form.control}
        name="label"
        render={({ field: localField }) => (
          <FormItem className="flex flex-col space-y-1.5">
            <FormLabel htmlFor="label">Label</FormLabel>
            <FormControl>
              <Input
                {...localField}
                onChange={(e) => {
                  handleChange("label", e.target.value);
                  localField.onChange(e);
                }}
                disabled={field.label === "NIK"}
                placeholder="Label kolom"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {fieldTypes && fieldTypes?.length > 0 && (
        <FormField
          control={form.control}
          name="fieldTypeId"
          render={({ field: localField }) => (
            <FormItem>
              <FormLabel>Tipe Input</FormLabel>
              <Combobox
                disabled={field.label === "NIK"}
                options={fieldTypes.map((fieldType) => ({
                  label: fieldType.label,
                  value: fieldType.id.toString(),
                }))}
                placeholder="Pilih tipe input"
                value={localField.value.toString()}
                onChange={(e) => {
                  handleChange("fieldTypeId", Number(e));
                  localField.onChange(e);
                }}
              />
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      {baseType && (baseType === "checkbox" || baseType === "radio") && (
        <>
          <FormItem className="w-full space-y-1.5">
            <FormLabel htmlFor="option">Opsi Jawaban</FormLabel>
            <div className="flex w-full items-center justify-between">
              <div className="w-[85%]">
                <Input
                  placeholder="Tambahkan pilihan jawaban"
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                />
              </div>
              <Button
                size={"icon"}
                type="button"
                onClick={() => {
                  // Check if the newOption is not empty
                  if (newOption !== "") {
                    // Add the new option to field's options
                    setFields((prevFields) =>
                      prevFields.map((f) =>
                        f.fieldNumber === field.fieldNumber
                          ? {
                              ...f,
                              options: f.options
                                ? [...f.options, { value: newOption }]
                                : [{ value: newOption }],
                            }
                          : f,
                      ),
                    );
                    setNewOption("");
                  }
                }}
              >
                <Plus />
              </Button>
            </div>
          </FormItem>
          {field.options && (
            <ul className="flex w-full flex-col gap-1">
              {field.options.map((option, index) => (
                <div key={index} className="flex items-center justify-between">
                  <p className="flex items-center gap-1">
                    <ArrowRight size={14} />
                    {option.value}
                  </p>
                  <Button
                    variant={"destructive"}
                    size={"icon"}
                    onClick={() => {
                      // Delete the current option by value, because there's no way that more than one unique value are in one options
                      setFields((prevFields) =>
                        prevFields.map((f) =>
                          f.fieldNumber === field.fieldNumber &&
                          f.fieldTypeId === field.fieldTypeId
                            ? {
                                ...f,
                                options: f.options?.filter(
                                  (o) => o.value !== option.value,
                                ),
                              }
                            : f,
                        ),
                      );
                    }}
                  >
                    <Trash />
                  </Button>
                </div>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};
