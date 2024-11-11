import { getServerSession } from "@/lib/next-auth";
import prisma from "@/lib/prisma";
import { roleLevelMap } from "@/lib/utils";
import { notFound } from "next/navigation";
import { DocumentTable } from "./components/document-table";

export default async function AvailableDocuments() {
  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    where: { id: session?.user?.id },
  });

  if (!user) return notFound();

  const documents = await prisma.document.findMany({
    where: { level: user.role },
    select: {
      id: true,
      title: true,
    },
  });

  return (
    <>
      <div className="mb-8 flex flex-col gap-2">
        <h1>Pengajuan Pembuatan Surat</h1>
        <p>
          Pada laman ini, anda dapat melihat surat yang tersedia untuk anda di
          level {roleLevelMap[session?.user?.role as keyof typeof roleLevelMap]}
        </p>
      </div>
      <DocumentTable documents={documents} />
    </>
  );
}
