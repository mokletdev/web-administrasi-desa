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
import { BaseFieldType } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { z } from "zod";
import {
  getAllTableNames,
  getColumnNames,
  upsertFieldType,
} from "../../actions";

const baseFieldTypeEnum = Object.keys(BaseFieldType);

const createFieldTypeSchema = z
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

export const CreateFieldTypeDialog: FC<DialogBaseProps> = ({
  open,
  setIsOpen,
}) => {
  const form = useZodForm({
    defaultValues: {
      name: "",
      baseType: "",
      defaultValue: "",
      placeholder: "",
      targetTable: "",
      targetField: "",
    },
    schema: createFieldTypeSchema,
  });
  const [loading, setLoading] = useState(false);
  const { toast, dismiss } = useToast();
  const router = useRouter();

  const [isRelation, setIsRelation] = useState(false);

  const onSubmit = form.handleSubmit(async (fields) => {
    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan penambahan anda sedang diproses",
    });

    const data = new FormData();
    const {
      name,
      baseType,
      defaultValue,
      placeholder,
      targetTable,
      targetField,
    } = fields;
    data.append("name", name);
    data.append("baseType", baseType);
    defaultValue && data.append("defaultValue", defaultValue);
    placeholder && data.append("placeholder", placeholder);
    targetTable && data.append("targetTable", targetTable);
    targetField && data.append("targetField", targetField);

    const createFieldTypeAction = await upsertFieldType(data);
    if (createFieldTypeAction.error) {
      dismiss(loadingToast.id);
      return toast({
        title: "Gagal Menambahkan!",
        description: `Gagal menambah data tipe input (${createFieldTypeAction.error.message})`,
      });
    }

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Menambahkan!",
      description: `Berhasil menambahkan data tipe input baru`,
    });
    form.reset();
    setLoading(false);
    setIsOpen(false);
    return router.refresh();
  });

  const baseType = form.watch("baseType");
  const targetTable = form.watch("targetTable");

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
  }, [baseType]);

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
  }, [targetTable]);

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambahkan Tipe Input</DialogTitle>
          <DialogDescription>
            Tambahkan Tipe Input disini. Tekan tombol simpan jika telah selesai.
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
              <FormField
                control={form.control}
                name="defaultValue"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel htmlFor="defaultValue">Default value</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Default value" />
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
