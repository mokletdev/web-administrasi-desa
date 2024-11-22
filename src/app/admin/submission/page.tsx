import { getServerSession } from "@/lib/next-auth";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { ServiceRequestTable } from "./components/service-request-table";

export default async function SubmissionPage() {
  const session = await getServerSession();
  const { user: sessionUser } = session!;

  const [user, serviceRequests] = await prisma.$transaction([
    prisma.user.findUnique({
      where: { id: sessionUser?.id },
      include: { official: true },
    }),
    prisma.serviceRequest.findMany({
      include: { submissions: { include: { template: true } } },
    }),
  ]);

  if (!user) return notFound();

  const isOfficial = Boolean(user.official);

  return (
    <>
      <div className="mb-8 flex flex-col gap-2">
        <h1>Manajemen Ajuan Surat</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          necessitatibus corporis debitis praesentium unde assumenda itaque ipsa
          earum ipsum tempore!
        </p>
      </div>
      <ServiceRequestTable serviceRequests={serviceRequests} user={user} />
    </>
  );
}
