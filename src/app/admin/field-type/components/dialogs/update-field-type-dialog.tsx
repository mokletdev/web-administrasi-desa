"use client";

import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useZodForm } from "@/hooks/use-zod-form";
import { DialogBaseProps } from "@/types/dialog";
import { BaseFieldType, Prisma } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { z } from "zod";
import {
  getAllTableNames,
  getColumnNames,
  upsertFieldType,
} from "../../actions";

const baseFieldTypeEnum = Object.keys(BaseFieldType);

const updateFieldTypeSchema = z
  .object({
    name: z.string().min(1),
    placeholder: z.string().optional(),
    defaultValue: z.string().optional(),
    baseType: z.enum(baseFieldTypeEnum as [string, ...string[]]),
    targetTable: z.string().optional(),
    targetField: z.string().optional(),
  })
  .refine(
    (data) => {
      // If baseType is 'relation', both targetTable and targetField must be present
      if (data.baseType === "relation") {
        return data.targetTable && data.targetField;
      }
      // If baseType is not 'relation', we don't require targetTable or targetField
      return true;
    },
    {
      message:
        "targetTable and targetField are required when baseType is 'relation'",
      path: ["targetTable"], // The path to display the error, you could also target "targetField" or use `superRefine` for both.
    },
  );

export const UpdateFieldTypeDialog: FC<
  DialogBaseProps & {
    fieldTypeData: Prisma.FieldTypeGetPayload<{
      include: { relation: true };
    }> | null;
  }
> = ({ open, setIsOpen, fieldTypeData }) => {
  const form = useZodForm({
    values: fieldTypeData
      ? {
          name: fieldTypeData.name,
          placeholder:
            fieldTypeData.placeholder === null
              ? undefined
              : fieldTypeData.placeholder,
          defaultValue:
            fieldTypeData.defaultValue === null
              ? undefined
              : fieldTypeData.defaultValue,
          baseType: fieldTypeData.baseType,
          targetTable: fieldTypeData.relation?.targetTable,
          targetField: fieldTypeData.relation?.targetField,
        }
      : undefined,
    schema: updateFieldTypeSchema,
  });
  const [loading, setLoading] = useState(false);
  const { toast, dismiss } = useToast();
  const router = useRouter();

  const onSubmit = form.handleSubmit(async (fields) => {
    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan perubahan anda sedang diproses",
    });

    const data = new FormData();
    const { id } = fieldTypeData!;
    const { name, baseType, defaultValue, placeholder } = fields;
    data.append("id", id.toString());
    data.append("name", name);
    data.append("baseType", baseType);
    defaultValue && !isRelation && data.append("defaultValue", defaultValue);
    placeholder && data.append("placeholder", placeholder);

    const updateFieldTypeAction = await upsertFieldType(data);
    if (updateFieldTypeAction.error) {
      dismiss(loadingToast.id);
      return toast({
        title: "Gagal Mengubah!",
        description: `Gagal mengubah data tipe input dengan ID ${fieldTypeData?.id} (${updateFieldTypeAction.error.message})`,
      });
    }

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Mengubah!",
      description: `Berhasil mengubah data tipe input dengan ID ${fieldTypeData?.id}`,
    });
    setLoading(false);
    setIsOpen(false);
    return router.refresh();
  });

  const baseType = form.watch("baseType");
  const targetTable = form.watch("targetTable");

  const [isRelation, setIsRelation] = useState(false);

  const [tableNames, setTableNames] = useState<string[]>([]);
  const [fieldNames, setFieldNames] = useState<string[]>([]);

  useEffect(() => {
    const handleRelation = async () => {
      setIsRelation(true);
      const fetchTableNames = await getAllTableNames();
      if (fetchTableNames.data) {
        setTableNames(fetchTableNames.data);
      }
    };

    if (baseType === "relation") {
      handleRelation();
    } else {
      setIsRelation(false);
    }
  }, [baseType, fieldTypeData]);

  // Handle target table change
  useEffect(() => {
    const handleTargetTableChange = async () => {
      if (targetTable && targetTable !== "") {
        const fetchFieldNames = await getColumnNames(targetTable);

        if (fetchFieldNames.data) {
          setFieldNames(fetchFieldNames.data);
        }
      }
    };

    handleTargetTableChange();
  }, [targetTable, fieldTypeData]);

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Tipe Input</DialogTitle>
          <DialogDescription>
            Perbarui Tipe Input disini. Tekan tombol simpan jika telah selesai.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={onSubmit} className="w-full">
            <div className="grid w-full gap-4 py-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel htmlFor="label">Nama</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Nama input" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="baseType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipe input</FormLabel>
                    <Combobox
                      options={baseFieldTypeEnum.map((typeName) => ({
                        label: typeName,
                        value: typeName,
                      }))}
                      placeholder="Pilih tipe input"
                      value={field.value}
                      onChange={field.onChange}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              {!isRelation &&
                baseType !== "radio" &&
                baseType !== "checkbox" && (
                  <FormField
                    control={form.control}
                    name="placeholder"
                    render={({ field }) => (
                      <FormItem className="flex flex-col space-y-1.5">
                        <FormLabel htmlFor="placeholder">Placeholder</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Placeholder input" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              {!isRelation &&
                baseType !== "radio" &&
                baseType !== "checkbox" && (
                  <FormField
                    control={form.control}
                    name="defaultValue"
                    render={({ field }) => (
                      <FormItem className="flex flex-col space-y-1.5">
                        <FormLabel htmlFor="defaultValue">
                          Default value
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Default value" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              {!isRelation && (
                <FormField
                  control={form.control}
                  name="defaultValue"
                  render={({ field }) => (
                    <FormItem className="flex flex-col space-y-1.5">
                      <FormLabel htmlFor="defaultValue">
                        Default value
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Default value" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              {isRelation && (
                <>
                  <FormField
                    control={form.control}
                    name="targetTable"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Tabel Target</FormLabel>
                        <Combobox
                          options={tableNames.map((tableName) => ({
                            label: tableName,
                            value: tableName,
                          }))}
                          placeholder="Pilih tabel target"
                          value={field.value}
                          onChange={field.onChange}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {targetTable && targetTable !== "" && (
                    <FormField
                      control={form.control}
                      name="targetField"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Kolom Target</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border border-neutral-300">
                                <SelectValue placeholder="Pilih nama kolom" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {fieldNames.map((fieldName) => (
                                <SelectItem key={fieldName} value={fieldName}>
                                  {fieldName}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </>
              )}
            </div>
            <DialogFooter>
              <Button variant={"default"} type="submit" disabled={loading}>
                Simpan
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
