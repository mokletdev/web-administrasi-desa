import { getServerSession } from "@/lib/next-auth";
import prisma from "@/lib/prisma";
import { Official, Prisma, User } from "@prisma/client";
import { notFound } from "next/navigation";
import { OfficialTable } from "./components/official-table";

export default async function OfficialManagement() {
  const session = await getServerSession();

  type unitType = Prisma.AdministrativeUnitGetPayload<{
    include: {
      officials: {
        include: {
          user: true;
        };
      };
      users: true;
    };
  }>;
  const user = await prisma.user.findUnique({
    where: {
      id: session?.user?.id,
    },
  });

  if (!user || !user.administrativeUnitId) return notFound();
  const unit: unitType | null = await prisma.administrativeUnit.findUnique({
    where: {
      id: user.administrativeUnitId,
    },
    include: {
      officials: {
        include: {
          user: true,
        },
      },
      users: true,
    },
  });

  if (!unit) return notFound();

  return (
    <>
      <div className="mb-8 flex flex-col gap-2">
        <h1>Manajemen Pejabat</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          necessitatibus corporis debitis praesentium unde assumenda itaque ipsa
          earum ipsum tempore!
        </p>
      </div>
      <OfficialTable
        usersInArea={unit.users}
        officials={unit.officials}
        unitId={unit.id}
      />
    </>
  );
}
