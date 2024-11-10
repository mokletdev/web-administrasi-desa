"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FileField } from "@/components/ui/input";
import { normalizeVariableName } from "@/lib/utils";
import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

export const ThirdStepCreateDocument: FC<{
  fieldLabels: string[];
  form: UseFormReturn<{
    content: FileList;
    positionIds: string[];
  }>;
  positions: { id: number; title: string }[];
}> = ({ fieldLabels, form, positions }) => {
  return (
    <>
      <div className="mb-4">
        <h5 className="font-semibold">Variabel</h5>
        <p>
          Berikut adalah variabel yang dapat anda gunakan:{" "}
          {fieldLabels
            .map((label) => `{${normalizeVariableName(label)}}`)
            .join(", ")}
        </p>
      </div>
      <FileField
        name="content"
        label="Upload Template"
        register={form.register}
        accept={
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        }
        errorMessage={form.formState.errors.content?.message?.toString()}
      />
      <FormField
        control={form.control}
        name="positionIds"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-base">Tandan Tangan</FormLabel>
              <FormDescription>
                Pilih posisi dan tanda tangan yang diperlukan
              </FormDescription>
            </div>
            {positions.map((position) => (
              <FormField
                key={position.id}
                control={form.control}
                name="positionIds"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={position.id}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(
                            position.id.toString(),
                          )}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([
                                  ...field.value,
                                  position.id.toString(),
                                ])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== position.id.toString(),
                                  ),
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {position.title}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
