"use client";

import { Button } from "@/components/ui/button";
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
import { UserRole } from "@prisma/client";
import { debounce } from "lodash";
import { useRouter } from "next/navigation";
import { FC, useMemo, useState } from "react";
import AsyncSelect from "react-select/async";
import { z } from "zod";
import { searchUnit, upsertUser } from "../../actions";
import {
  defaultClassNames as reactSelectClassNames,
  defaultStyles as reactSelectStyles,
} from "@/components/ui/react-select";

export const CreateUserDialog: FC<
  DialogBaseProps & {
    user: {
      role: UserRole;
    };
  }
> = ({ open, setIsOpen, user }) => {
  const createUserSchema = useMemo(
    () =>
      z.object({
        username: z
          .string()
          .min(1, { message: "Username is required" })
          .max(255),
        email: z.string().email({ message: "Invalid email address" }),
        NIK:
          user.role === "SUBDISTRICT_ADMIN"
            ? z.string().min(1, { message: "NIK is required" }).max(255)
            : z.string().max(255).optional(),
        name: z.string().min(1, { message: "Name is required" }).max(255),
        password: z
          .string()
          .min(8, { message: "Password must be at least 8 characters long" }),
        role: z.nativeEnum(UserRole),
        administrativeUnitId:
          user.role === "SUBDISTRICT_ADMIN"
            ? z.object({
                label: z.string().min(1, {
                  message: "Administrative Unit label is required",
                }),
                value: z.string().uuid({
                  message: "Administrative Unit value must be a valid UUID",
                }),
              })
            : z.union([
                z.object({
                  label: z.string().min(1, {
                    message: "Administrative Unit label is required",
                  }),
                  value: z.string().uuid({
                    message: "Administrative Unit value must be a valid UUID",
                  }),
                }),
                z.object({
                  label: z.string(),
                  value: z.string(),
                }),
              ]),
      }),
    [user.role],
  );

  const form = useZodForm({
    defaultValues: {
      username: "",
      email: "",
      NIK: "",
      name: "",
      password: "",
      role: "CITIZEN",
      administrativeUnitId: { label: "", value: "" },
    },
    schema: createUserSchema,
  });
  const [loading, setLoading] = useState(false);
  const { toast, dismiss } = useToast();
  const router = useRouter();

  const onSubmit = form.handleSubmit(async (fields) => {
    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan penambahan anda sedang diproses",
    });

    const { administrativeUnitId, ...data } = fields;

    const createUserAction = await upsertUser({
      ...data,
      administrativeUnitId:
        administrativeUnitId?.value !== ""
          ? administrativeUnitId?.value
          : undefined,
    });
    if (createUserAction.error) {
      dismiss(loadingToast.id);
      return toast({
        title: "Gagal Menambahkan!",
        description: `Gagal menambah data pengguna (${createUserAction.error.message})`,
      });
    }

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Menambahkan!",
      description: `Berhasil menambahkan data pengguna baru`,
    });
    form.reset();
    setLoading(false);
    setIsOpen(false);
    return router.refresh();
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        form.reset();
        setIsOpen(open);
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambahkan Pengguna</DialogTitle>
          <DialogDescription>
            Tambahkan pengguna baru disini. Tekan tombol simpan jika telah
            selesai.
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
                    <FormLabel htmlFor="name">Nama</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Nama pengguna" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Email pengguna"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="NIK"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel htmlFor="NIK">NIK</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="NIK pengguna"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Username pengguna" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel htmlFor="password">Password Baru</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Password baru pengguna"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {user.role !== "SUBDISTRICT_ADMIN" && (
                <>
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="role">Role</FormLabel>
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
                            {Object.keys(UserRole).map((role) => (
                              <SelectItem key={role} value={role}>
                                {role}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="administrativeUnitId"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Unit Administratif</FormLabel>
                        <AsyncSelect
                          {...field}
                          cacheOptions
                          unstyled
                          classNames={reactSelectClassNames}
                          styles={reactSelectStyles}
                          loadOptions={debounce((query, callback) => {
                            searchUnit(query).then((res) => callback(res));
                          }, 1000)}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
