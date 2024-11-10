import {
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
import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

export const documentUserRole: readonly [string, ...string[]] = [
  "CITIZEN",
  "CITY_ADMIN",
  "DISTRICT_ADMIN",
  "SUBDISTRICT_ADMIN",
];

export const FirstStepCreateDocumment: FC<{
  form: UseFormReturn<{
    title: string;
    level: string;
  }>;
}> = ({ form }) => {
  return (
    <>
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem className="flex flex-col space-y-1.5">
            <FormLabel htmlFor="title">Nama Posisi</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Nama template surat" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="level"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="level">Tingkatan</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="border border-neutral-300">
                  <SelectValue placeholder="Pilih tingkat jabatan" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {documentUserRole.map((l) => (
                  <SelectItem key={l} value={l}>
                    {l}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
