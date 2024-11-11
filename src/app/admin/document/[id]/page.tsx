import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function DocumentDetail({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { id } = searchParams;

  if (!id) return notFound();

  const document = await prisma.document.findUnique({
    where: { id },
  });

  return <></>;
}
