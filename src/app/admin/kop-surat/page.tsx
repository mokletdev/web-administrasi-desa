import prisma from "@/lib/prisma";
import ImageForm from "./components/image-form";
import { getServerSession } from "@/lib/next-auth";
import { notFound } from "next/navigation";

export default async function KopSuratConfig() {
  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    select: {
      administrativeUnitId: true,
    },
    where: {
      id: session?.user?.id,
    },
  });
  if (!user?.administrativeUnitId) return notFound();

  const adminUnit = await prisma.administrativeUnit.findUnique({
    where: {
      id: user?.administrativeUnitId,
    },
  });

  return (
    <>
      <div className="mb-8 flex flex-col gap-2">
        <h1>Manajemen Kop Surat</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          necessitatibus corporis debitis praesentium unde assumenda itaque ipsa
          earum ipsum tempore!
        </p>
      </div>
      <div>
        <ImageForm administrativeUnit={adminUnit!} />
      </div>
    </>
  );
}
