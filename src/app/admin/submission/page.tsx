import { getServerSession } from "@/lib/next-auth";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { ServiceRequestTable } from "./components/service-request-table";
import { getSubmissions, getSubmissionsForOfficial } from "./actions";

export default async function SubmissionPage() {
  const session = await getServerSession();
  const { user: sessionUser } = session!;

  const [user] = await prisma.$transaction([
    prisma.user.findUnique({
      where: { id: sessionUser?.id },
      include: { official: true },
    }),
  ]);

  if (!user) return notFound();

  const serviceRequests =
    user.role === "OFFICIAL"
      ? await getSubmissionsForOfficial()
      : await getSubmissions();

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
      <ServiceRequestTable
        serviceRequests={serviceRequests.data as any}
        user={user}
      />
    </>
  );
}
