import prisma from "@/lib/prisma";
import { DocumentTable } from "./components/document-table";

export default async function Document() {
  const [documents, fieldTypes, positions] = await prisma.$transaction([
    prisma.document.findMany({
      select: {
        id: true,
        title: true,
        createdAt: true,
        level: true,
        updatedAt: true,

        form: {
          select: {
            fields: {
              include: { options: { select: { id: true, value: true } } },
            },
          },
        },
        signs: { select: { positionId: true } },
        user: { select: { name: true } },
      },
    }),
    prisma.fieldType.findMany({
      select: { id: true, name: true, baseType: true },
    }),
    prisma.position.findMany({ select: { id: true, title: true } }),
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
      <DocumentTable
        documents={documents}
        fieldTypes={fieldTypes}
        positions={positions}
      />
    </>
  );
}
