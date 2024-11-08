import prisma from "@/lib/prisma";
import { FieldTypeTable } from "./components/field-type-table";

export default async function FieldTypeManagement() {
  const fieldTypes = await prisma.fieldType.findMany({
    include: { relation: true },
  });

  return (
    <>
      <div className="mb-8 flex flex-col gap-2">
        <h1>Manajemen Tipe Input</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          necessitatibus corporis debitis praesentium unde assumenda itaque ipsa
          earum ipsum tempore!
        </p>
      </div>
      <FieldTypeTable fieldTypes={fieldTypes} />
    </>
  );
}
