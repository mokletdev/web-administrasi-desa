import { buttonVariants } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { roleLevelMap, stringifyDate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DownloadTemplateButton } from "./components/download-template-button";
import { UpdateServiceForm } from "./components/update-service-form";
import { TemplateTable } from "./components/template-table";
import { AdministrativeLevel } from "@prisma/client";
import { divisionLevelMap } from "@/lib/utils";

// For templates and level skipping
const getLevelAndBelow = (level: AdministrativeLevel) => {
  const levels = ["SUBDISTRICT", "DISTRICT", "CITY"];
  const indexToSlice = levels.indexOf(level);
  // Reverse the sliced array to get a top-to-bottom level sorting
  return levels.slice(0, indexToSlice + 1).reverse();
};

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const service = await prisma.administrativeService.findUnique({
    where: { id },
    include: {
      templates: { include: { signs: true, fields: true } },
      administrativeUnit: true,
    },
  });

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
        <div className="flex flex-col gap-y-6 mt-12 divide-y-2 divide-y-foreground">
          {getLevelAndBelow(
            service.administrativeUnit!.administrativeLevel,
          ).map((level) => (
            <div key={level} className="flex flex-col gap-y-1.5 py-4">
              <h2 className="mb-4 font-light">
                Template Surat Tingkat{" "}
                {divisionLevelMap[level as keyof typeof divisionLevelMap]}
              </h2>
              <TemplateTable
                templates={service.templates.filter(
                  (template) => template.level === level,
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
