import { getServerSession } from "@/lib/next-auth";
import prisma from "@/lib/prisma";
import { RequestHistoryTable } from "./components/request-table";

export default async function RequestsHistory() {
  const session = await getServerSession();
  const submissions = await prisma.submission.findMany({
    where: { userId: session?.user?.id },
    select: {
      id: true,
      status: true,
      createdAt: true,
      form: {
        select: { document: { select: { title: true } } },
      },
    },
  });

  return (
    <>
      <div className="mb-8 flex flex-col gap-2">
        <h1>Riwayat Pengajuan</h1>
        <p>
          Pada laman ini, anda dapat melihat riwayat pengajuan surat yang pernah
          anda lakukan pada laman pengajuan surat.
        </p>
      </div>
      <RequestHistoryTable submissions={submissions} />
    </>
  );
}