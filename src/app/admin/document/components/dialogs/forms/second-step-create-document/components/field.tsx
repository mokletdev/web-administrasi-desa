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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useZodForm } from "@/hooks/use-zod-form";
import { BaseFieldType } from "@prisma/client";
import { ArrowDown, ArrowUp, Plus, Trash } from "lucide-react";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { z } from "zod";

const upsertFieldSchema = z.object({
  label: z.string(),
  required: z.boolean(),
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
  fieldTypes: { id: number; name: string; baseType: BaseFieldType }[];
  fields: Field[];
  setFields: Dispatch<SetStateAction<Field[]>>;
}> = ({ field, fieldTypes, fields, setFields }) => {
  const form = useZodForm({ values: { ...field }, schema: upsertFieldSchema });

  const fieldTypeId = form.watch("fieldTypeId");
  const baseType = fieldTypes.find(
    (fieldType) => fieldType.id === fieldTypeId,
  )?.baseType;

  const [newOption, setNewOption] = useState<string>("");

  const handleChange = (name: string, value: any) => {
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
  }, [baseType]);

  return (
    <>
      <div className="flex w-full flex-col gap-y-1.5 py-4">
        <div className="mb-2 flex items-center justify-between">
          <h5 className="font-bold">Input No. {field.fieldNumber}</h5>
          <div className="flex items-center gap-2">
            <Button
              variant={"outline"}
              disabled={field.fieldNumber === 1}
              size={"icon"}
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
            <Button
              variant={"destructive"}
              size={"icon"}
              onClick={() => {
                // Delete current field
                setFields((prevFields) =>
                  prevFields.filter((f) => f.fieldNumber !== field.fieldNumber),
                );
              }}
            >
              <Trash />
            </Button>
          </div>
        </div>
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-1.5">
              <FormLabel htmlFor="label">Label</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={(e) => {
                    handleChange("label", e.target.value);
                    field.onChange(e);
                  }}
                  placeholder="Label kolom"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="required"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel htmlFor="required">Wajib Diisi</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(e) => {
                    handleChange("required", e === "true");
                    field.onChange(e);
                  }}
                  value={field.value ? "true" : "false"}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="true" />
                    </FormControl>
                    <FormLabel className="font-normal">Yes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="false" />
                    </FormControl>
                    <FormLabel className="font-normal">No</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fieldTypeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipe Input</FormLabel>
              <Combobox
                options={fieldTypes.map((fieldType) => ({
                  label: fieldType.name,
                  value: fieldType.id.toString(),
                }))}
                placeholder="Pilih tipe input"
                value={field.value.toString()}
                onChange={(e) => {
                  handleChange("fieldTypeId", Number(e));
                  field.onChange(e);
                }}
              />
              <FormMessage />
            </FormItem>
          )}
        />
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
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <p>{option.value}</p>
                    <Button
                      variant={"destructive"}
                      size={"icon"}
                      onClick={() => {
                        // Delete the current option by value, because there's no way that more than one unique value are in one options
                        setFields((prevFields) =>
                          prevFields.map((f) =>
                            f.fieldNumber === field.fieldNumber
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
    </>
  );
};
