import { getServerSession } from "@/lib/next-auth";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import NikForm from "./components/nik-form";

export default async function Profile() {
  const session = await getServerSession();

  if (session?.user?.role !== "OFFICIAL" && !session) return notFound();

  const userData = await prisma.user.findUnique({
    where: {
      id: session.user?.id,
    },
    select: {
      NIK: true,
      id: true,
    },
  });

  return (
    <>
      <div className="mb-8 flex flex-col gap-2">
        <h1>Manajemen Profil</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          necessitatibus corporis debitis praesentium unde assumenda itaque ipsa
          earum ipsum tempore!
        </p>
      </div>
      <NikForm nikData={userData?.NIK} userId={userData?.id!} />
    </>
  );
}
