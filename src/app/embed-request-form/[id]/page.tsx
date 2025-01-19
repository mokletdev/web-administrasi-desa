import { buttonVariants } from "@/components/ui/button";
import { decodeSSOToken } from "@/lib/decode-auth-token";
import prisma from "@/lib/prisma";
import { normalizeVariableName } from "@/lib/utils";
import { Prisma } from "@prisma/client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FC } from "react";
import { DynamicForm } from "./components/dynamic-form";

interface PageParams {
  id: string;
}

interface PageSearchParams {
  token: string;
}

type AdministrativeService = Prisma.AdministrativeServiceGetPayload<{
  include: {
    templates: {
      include: {
        fields: {
          include: {
            options: true;
            fieldType: true;
          };
        };
      };
    };
  };
}>;

const BackButton: FC = () => (
  <Link
    href="/dashboard"
    className={buttonVariants({
      variant: "ghost",
      className: "mb-4 w-fit",
    })}
  >
    <ArrowLeft />
    Kembali
  </Link>
);

const PageHeader: FC<{ serviceName: string }> = ({ serviceName }) => (
  <div className="flex flex-col gap-y-2">
    <h1>Pengajuan Pembuatan {serviceName}</h1>
    <p>
      Untuk mengajukan pembuatan {serviceName}, anda perlu mengisi kolom-kolom
      dibawah ini. Pastikan data yang anda isi sesuai agar menghindari
      ketidaksesuaian data yang akan ditinjau nantinya. Kolom yang wajib diisi
      ditandai dengan simbol{" "}
      <span className="font-bold text-foreground">&quot; * &quot;</span>
    </p>
  </div>
);

async function getServiceData(
  id: string,
): Promise<AdministrativeService | null> {
  return prisma.administrativeService.findUnique({
    where: { id },
    include: {
      templates: {
        include: {
          fields: {
            include: {
              options: true,
              fieldType: true,
            },
          },
        },
      },
    },
  });
}

function processFields(service: AdministrativeService) {
  const fields = service.templates
    .map((template) => template.fields)
    .flat()
    .map((field) => ({
      ...field,
      variableName: normalizeVariableName(field.label ?? field.fieldType.label),
    }));

  return fields.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.variableName === value.variableName),
  );
}

const RequestDocument: FC<{
  params: Promise<PageParams>;
  searchParams: Promise<PageSearchParams>;
}> = async ({ params, searchParams }) => {
  const { id } = await params;
  if (!id) return notFound();

  const { token } = await searchParams;
  if (!token) return notFound();

  const tokenEmail = decodeSSOToken(token);

  const user = await prisma.user.findUnique({
    where: { email: tokenEmail.email },
  });

  const service = await getServiceData(id);
  if (!service) return notFound();

  if (!user) {
    return notFound();
  }

  const filteredFields = processFields(service);

  return (
    <>
      <div className="mb-12 flex flex-col">
        <PageHeader serviceName={service.name} />
      </div>

      <DynamicForm
        fields={filteredFields}
        serviceId={service.id}
        userId={user.id}
      />
    </>
  );
};

export default RequestDocument;
