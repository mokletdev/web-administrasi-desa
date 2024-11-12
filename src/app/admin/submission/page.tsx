import { notFound } from "next/navigation";
import { getSubmissions, getSubmissionsForOfficial } from "./actions";
import { SubmissionTable } from "./components/submission-table";
import { getServerSession } from "@/lib/next-auth";
import prisma from "@/lib/prisma";

export default async function SubmissionPage() {
  let submissions;

  const session = await getServerSession();
  const { user: sessionUser } = session!;

  const user = await prisma.user.findUnique({
    where: { id: sessionUser?.id },
    include: { official: true },
  });

  if (!user) return notFound();

  const isOfficial = Boolean(user.official);

  if (!isOfficial) {
    submissions = await getSubmissions();
  } else {
    submissions = await getSubmissionsForOfficial();
  }

  if (!submissions || !submissions.data) return notFound();

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
      <SubmissionTable
        submissions={submissions.data}
        user={user}
        isOfficial={isOfficial}
      />
    </>
  );
}
