import prisma from "@/lib/prisma";
import { ServiceTable } from "./components/service-table";
import { getServerSession } from "@/lib/next-auth";
import { notFound } from "next/navigation";

export default async function Service() {
  const session = await getServerSession();

  if (!session?.user) return notFound();

  const [services] = await prisma.$transaction([
    prisma.administrativeService.findMany({
      where: {
        administrativeUnit: { users: { some: { id: session?.user.id } } },
      },
      select: {
        id: true,
        name: true,
        createdAt: true,
        updateAt: true,
        createdBy: true,
      },
    }),
  ]);

  return (
    <>
      <div className="mb-8 flex flex-col gap-2">
        <h1>Manajemen Layanan Surat</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing el it. Illum
          necessitatibus corporis debitis praesentium unde assumenda itaque ipsa
          earum ipsum tempore!
        </p>
      </div>
      <ServiceTable services={services} />
    </>
  );
}
