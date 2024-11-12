import prisma from "@/lib/prisma";
import { roleLevelMap, stringifyDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import { DownloadTemplateButton } from "./components/download-template-button";

export default async function DocumentDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!id) return notFound();

  const document = await prisma.document.findUnique({
    where: { id },
    include: {
      user: { select: { name: true, email: true } },
      form: {
        select: {
          fields: { include: { fieldType: true, options: true } },
          submissions: { select: { id: true } },
        },
      },
    },
  });

  if (!document) return notFound();

  return (
    <div className="flex flex-col divide-y divide-foreground">
      <div className="pb-8">
        <div className="mb-8 flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <h1>Template Surat</h1>
          <DownloadTemplateButton
            base64={document.content}
            filename={`${document.title}.docx`}
          />
        </div>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-y-1.5">
            <h5 className="font-bold text-black">Judul Dokumen</h5>
            <h2 className="mb-4 font-light">{document.title}</h2>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <h5 className="font-bold text-black">Tingkat Dokumen</h5>
            <h2 className="mb-4 font-light">
              Tingkat{" "}
              {roleLevelMap[document.level as keyof typeof roleLevelMap]}
            </h2>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <h5 className="font-bold text-black">Dibuat Pada</h5>
            <h2 className="mb-4 font-light">
              {stringifyDate(document.createdAt)}
            </h2>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <h5 className="font-bold text-black">Dibuat Oleh</h5>
            <div>
              <h2 className="font-light">{document.user.name}</h2>
              <p>({document.user.email})</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <h5 className="font-bold text-black">Jumlah Input</h5>
            <h2 className="font-light">{document.form?.fields.length} Buah</h2>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <h5 className="font-bold text-black">Jumlah Pengiriman</h5>
            <h2 className="font-light">
              {document.form?.submissions.length} Buah
            </h2>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <h1 className="mb-8">Data-data yang diperlukan</h1>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {document.form?.fields.map((field) => (
            <div key={field.id} className="flex flex-col gap-y-1.5">
              <h5 className="font-bold text-black">
                {field.fieldNumber}. {field.label}
              </h5>
              <h2 className="mb-4 font-light">
                {field.fieldType.name} ({field.fieldType.baseType}){" "}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
