import prisma from "@/lib/prisma";
import { PositionTable } from "./components/position-table";

export default async function Position() {
  const positions = await prisma.position.findMany();

  return (
    <>
      <div className="mb-8 flex flex-col gap-2">
        <h1>Manajemen Posisi Jabatan</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          necessitatibus corporis debitis praesentium unde assumenda itaque ipsa
          earum ipsum tempore!
        </p>
      </div>
      <PositionTable positions={positions} />
    </>
  );
}
