import { buttonVariants } from "@/components/ui/button";
import { getServerSession } from "@/lib/next-auth";
import prisma from "@/lib/prisma";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import TempalateTableGroup from "./components/template-table-group";
import { UpdateServiceForm } from "./components/update-service-form";

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const session = await getServerSession();
  const { user } = session!;

  const [service, fieldTypes, officials] = await prisma.$transaction([
    prisma.administrativeService.findUnique({
      where: { id },
      include: {
        templates: { include: { signs: true, fields: true } },
        administrativeUnit: true,
      },
    }),
    prisma.fieldType.findMany(),
    prisma.official.findMany({
      where: {
        unit: {
          OR: [
            { users: { some: { id: user?.id } } },
            {
              parents: {
                some: {
                  OR: [
                    { users: { some: { id: user?.id } } },
                    {
                      parents: { some: { users: { some: { id: user?.id } } } },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    }),
  ]);

  console.log(officials);

  if (!service) return notFound();

  return (
    <div className="flex flex-col">
      <Link
        href={"/admin/service"}
        className={buttonVariants({
          variant: "ghost",
          className: "mb-4 w-fit",
        })}
      >
        <ArrowLeft />
        Kembali
      </Link>
      <div className="pb-8">
        <div className="flex flex-col gap-y-1.5">
          <h5 className="font-bold text-black">Lingkup Layanan</h5>
          <h2 className="mb-4 font-light">
            {service.administrativeUnit?.name}
          </h2>
        </div>
        <UpdateServiceForm name={service.name} id={service.id} />
        <TempalateTableGroup
          officials={officials}
          service={service}
          fieldTypes={fieldTypes}
        />
      </div>
    </div>
  );
}
