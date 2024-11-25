import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { DynamicForm } from "./components/dynamic-form";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getServerSession } from "@/lib/next-auth";
import { normalizeVariableName } from "@/lib/utils";

export default async function RequestDocument({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!id) return notFound();

  const service = await prisma.administrativeService.findUnique({
    where: { id },
    include: {
      templates: {
        include: { fields: { include: { options: true, fieldType: true } } },
      },
    },
  });

  if (!service) return notFound();

  const fields = service.templates
    .map((item) => item.fields)
    .flat()
    .map((item) => ({
      ...item,
      variableName: normalizeVariableName(item.label ?? item.fieldType.label),
    }));

  const filteredFields = fields.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.variableName === value.variableName),
  );

  const session = await getServerSession();

  return (
    <>
      <div className="mb-12 flex flex-col">
        <Link
          href={"/admin"}
          className={buttonVariants({
            variant: "ghost",
            className: "mb-4 w-fit",
          })}
        >
          <ArrowLeft />
          Kembali
        </Link>
        <div className="flex flex-col gap-y-2">
          <h1>Pengajuan Pembuatan {service.name}</h1>
          <p>
            Untuk mengajukan pembuatan {service.name}, anda perlu mengisi
            kolom-kolom dibawah ini. Pastikan data yang anda isi sesuai agar
            menghindari ketidaksesuaian data yang akan ditinjau nantinya. Kolom
            yang wajib diisi ditandai dengan simbol{" "}
            <span className="font-bold text-foreground">" * "</span>
          </p>
        </div>
      </div>
      <DynamicForm
        fields={filteredFields}
        serviceId={service.id}
        userId={session?.user?.id!}
      />
    </>
  );
}
