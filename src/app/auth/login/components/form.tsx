"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useZodForm } from "@/hooks/use-zod-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email!"),
  password: z.string().min(8, "Password must contain 8 characters!"),
});

export const LoginForm: FC = () => {
  const [loading, setLoading] = useState(false);
  const form = useZodForm({ schema: loginSchema });
  const { toast, dismiss } = useToast();
  const router = useRouter();

  const { handleSubmit } = form;

  const onSubmit = handleSubmit(async (fields) => {
    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan autentikasi anda sedang diproses",
    });

    const loginResult = await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email: fields.email,
      password: fields.password,
    });

    if (loginResult?.error) {
      setLoading(false);
      dismiss(loadingToast.id);
      return toast({
        title:
          loginResult.error === "CredentialsSignin"
            ? "Kredensial salah!"
            : "Terjadi kesalahan",
        description:
          loginResult.error === "CredentialsSignin"
            ? "Tolong periksa email atau password anda"
            : "Terjadi kesalahan pada sistem kami, coba lagi nanti",
        variant: "destructive",
      });
    }

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Masuk!",
      description: `Berhasil masuk ke akun ${fields.email}`,
    });
    setLoading(false);
    return router.push(`/`);
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="w-full">
        <div className="grid w-full items-center gap-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-1.5">
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Email anda" />
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
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Password anda"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-4 w-full">
            <Button
              type="submit"
              variant={"default"}
              className="w-full"
              disabled={loading}
            >
              Masuk
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
