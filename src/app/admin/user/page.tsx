import { getServerSession } from "@/lib/next-auth";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { UserTable } from "./components/user-table";
import { paginator } from "@/lib/paginator";
import { Prisma } from "@prisma/client";

const paginate = paginator({ perPage: 10 });

export default async function User({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const session = await getServerSession();

  const { page: paramPage } = await searchParams;
  let page = paramPage ? Number(paramPage) : 1;
  if (page < 0) page = 0;

  if (
    !session?.user ||
    (session.user.role !== "SUPERADMIN" &&
      session.user.role !== "SUBDISTRICT_ADMIN")
  )
    return notFound();

  const user = await prisma.user.findUnique({
    where: { id: session?.user?.id },
    select: {
      role: true,
      unit: { select: { id: true, name: true, administrativeLevel: true } },
    },
  });

  if (!user) return notFound();

  // Determines if the current user can manage its citizen or not
  const isSubdistrict = user.unit
    ? user.unit.administrativeLevel === "SUBDISTRICT"
    : false;

  const paginatedUsers = await paginate<
    Prisma.UserGetPayload<{
      select: {
        id: true;
        name: true;
        NIK: true;
        email: true;
        username: true;
        role: true;
        unit: { select: { id: true; name: true; administrativeLevel: true } };
      };
    }>,
    Prisma.UserFindManyArgs
  >(
    prisma.user,
    { page },
    {
      where: isSubdistrict
        ? { administrativeUnitId: user.unit?.id, role: "CITIZEN" }
        : {},
      select: {
        id: true,
        name: true,
        NIK: true,
        email: true,
        username: true,
        role: true,
        unit: { select: { id: true, name: true, administrativeLevel: true } },
      },
    },
  );

  return (
    <>
      <div className="mb-8 flex flex-col gap-2">
        <h1>
          Manajemen {isSubdistrict ? "Penduduk" : "Pengguna"}{" "}
          {isSubdistrict ? `Desa ${user.unit?.name}` : "Aplikasi"}
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          necessitatibus corporis debitis praesentium unde assumenda itaque ipsa
          earum ipsum tempore!
        </p>
      </div>
      <UserTable
        users={paginatedUsers.data}
        meta={paginatedUsers.meta}
        user={{ ...user, unit: user.unit !== null ? user.unit : undefined }}
      />
    </>
  );
}
