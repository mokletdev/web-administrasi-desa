import { getServerSession } from "@/lib/next-auth";
import prisma from "@/lib/prisma";
import { RequestHistoryTable } from "./components/request-table";

export default async function RequestsHistory() {
  const session = await getServerSession();
  const userNIK = await prisma.user.findUnique({
    where: { id: session?.user?.id },
  });

  const serviceRequests = await prisma.serviceRequest.findMany({
    where: {
      OR: [{ userId: session?.user?.id }, { user: { NIK: userNIK?.NIK } }],
    },
    select: {
      id: true,
      status: true,
      createdAt: true,
      done: true,
      name: true,
      submissions: {
        select: {
          id: true,
          signedPdf: true,
          status: true,
          template: { select: { title: true } },
        },
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
      <RequestHistoryTable serviceRequests={serviceRequests} />
    </>
  );
}
