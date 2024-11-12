import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { DynamicForm } from "./components/dynamic-form";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function RequestDocument({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!id) return notFound();

  const form = await prisma.form.findUnique({
    where: { documentId: id },
    select: {
      id: true,
      fields: { include: { options: true, fieldType: true } },
      document: { select: { title: true } },
    },
  });

  if (!form) return notFound();

  return (
    <>
      <div className="mb-12 flex flex-col">
        <Link
          href={"/dashboard/document"}
          className={buttonVariants({
            variant: "ghost",
            className: "mb-4 w-fit",
          })}
        >
          <ArrowLeft />
          Kembali
        </Link>
        <div className="flex flex-col gap-y-2">
          <h1>Pengajuan Pembuatan {form.document.title}</h1>
          <p>
            Untuk mengajukan pembuatan {form.document.title}, anda perlu mengisi
            kolom-kolom dibawah ini. Pastikan data yang anda isi sesuai agar
            menghindari ketidaksesuaian data yang akan ditinjau nantinya.
          </p>
        </div>
      </div>
      <DynamicForm fields={form.fields} />
    </>
  );
}
