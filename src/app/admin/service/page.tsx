import prisma from "@/lib/prisma";
import { ServiceTable } from "./components/service-table";

export default async function Document() {
  const [documents, fieldTypes] = await prisma.$transaction([
    prisma.administrativeService.findMany({
      select: {
        id: true,
        name: true,
        templates: {
          select: {
            id: true,
            level: true,
          },
        },
        createdAt: true,
        updateAt: true,
        createdBy: true,
      },
    }),
    prisma.fieldType.findMany({
      select: { id: true, baseType: true, label: true },
    }),
  ]);

  return (
    <>
      <div className="mb-8 flex flex-col gap-2">
        <h1>Manajemen Template Surat</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing el it. Illum
          necessitatibus corporis debitis praesentium unde assumenda itaque ipsa
          earum ipsum tempore!
        </p>
      </div>
      <ServiceTable templates={documents} fieldTypes={fieldTypes} />
    </>
  );
}
