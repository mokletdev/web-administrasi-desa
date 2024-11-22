import { buttonVariants } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FieldsDisplay } from "./components/field-display";

export default async function SubmissionDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const serviceRequest = await prisma.serviceRequest.findUnique({
    where: { id },
    include: {
      admnistrativeService: {
        select: { templates: { select: { fields: true } } },
      },
      submissions: {
        select: {
          fields: {
            include: {
              field: { include: { fieldType: { select: { baseType: true } } } },
            },
          },
        },
      },
      user: { select: { name: true, NIK: true } },
    },
  });

  if (!serviceRequest) return notFound();

  // Extract submission fields with related field info
  const submissionFields =
    serviceRequest.submissions.flatMap((submission) =>
      submission.fields.map((submissionField) => ({
        label: submissionField.field.label || "No Label",
        answer: submissionField.value || "No Answer",
        type: submissionField.field.fieldType.baseType,
      })),
    ) || [];

  return (
    <div className="flex flex-col">
      <Link
        href={"/admin/submission"}
        className={buttonVariants({
          variant: "ghost",
          className: "mb-4 w-fit",
        })}
      >
        <ArrowLeft />
        Kembali
      </Link>
      <div className="mb-8">
        <h1 className="mb-2">Detail Data Permintaan {serviceRequest.name}</h1>
        <p className="mb-4">(Diajukan oleh {serviceRequest.user.name})</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          consectetur vel sit, culpa id, saepe quas modi accusamus ab, inventore
          architecto voluptas. Eveniet recusandae consequuntur vero illo cum
          ipsum iure!
        </p>
      </div>
      <FieldsDisplay fields={submissionFields} />
    </div>
  );
}
