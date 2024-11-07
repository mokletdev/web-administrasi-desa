import { FieldType } from "@prisma/client";
import { FieldTypeTable } from "./components/field-type-table";

const fieldTypes: FieldType[] = [
  { id: 1, label: "Ass", defaultValue: "uss", placeholder: "Jnagan ya" },
  { id: 2, label: "Mass", defaultValue: "umss", placeholder: "Jnagan ya" },
];

export default function FieldTypeManagement() {
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
