import prisma from "@/lib/prisma";
import { getServerSession } from "@/lib/next-auth";

export default async function RequestsHistory() {
  const session = await getServerSession();
  const [submissions] = await prisma?.$transaction([
    prisma.submission.findMany({
      where: { userId: session?.user?.id },
    }),
  ]);

  return <></>;
}
