"use client";

import { ConfirmDeletionDialog } from "@/components/dialogs/delete-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { divisionLevelMap, skipLevelMap } from "@/lib/utils";
import {
  AdministrativeLevel,
  FieldType,
  Official,
  Prisma,
  Skip,
} from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setSkip } from "../../actions";
import { deleteTemplate } from "../actions";
import { CreateTemplateDialog } from "./dialogs";
import { UpdateTemplateDialog } from "./dialogs/update-template-dialog";
import { TemplateTable } from "./template-table";

const getLevelAndBelow = (level: AdministrativeLevel) => {
  const levels = ["SUBDISTRICT", "DISTRICT", "CITY"];
  const indexToSlice = levels.indexOf(level);
  // Reverse the sliced array to get a top-to-bottom level sorting
  return levels.slice(0, indexToSlice + 1).reverse();
};

const returnSkip = (skipDistrict: boolean, skipSubDistrict: boolean) => {
  if (skipDistrict && skipSubDistrict) return "SUBDISTRICT_DISTRICT" as Skip;
  if (skipDistrict && !skipSubDistrict) return "DISTRICT" as Skip;
  if (!skipDistrict && skipSubDistrict) return "SUBDISTRICT" as Skip;
  else return undefined;
};

type Service = Prisma.AdministrativeServiceGetPayload<{
  include: {
    templates: {
      include: {
        signs: {
          include: { Official: { select: { id: true; name: true } } };
        };
        fields: { include: { options: true } };
      };
    };
    administrativeUnit: true;
  };
}>;

export default function TempalateTableGroup({
  officials,
  service,
  fieldTypes,
}: {
  officials: Official[];
  service: Service;
  fieldTypes: FieldType[];
}) {
  const { dismiss, toast } = useToast();
  const router = useRouter();

  const [selectedAdminLevel, setSelectedAdminLevel] =
    useState<AdministrativeLevel>();
  const [loading, setLoading] = useState(false);
  const [isCreateOpen, setCreateOpen] = useState(false);

  const [skipDistrict, setSkipDistrict] = useState(
    service.skipStep === "DISTRICT" ||
      service.skipStep === "SUBDISTRICT_DISTRICT",
  );
  const [skipSubDistrict, setSkipSubDistrict] = useState(
    service.skipStep === "SUBDISTRICT" ||
      service.skipStep === "SUBDISTRICT_DISTRICT",
  );
  const levelAndBelow = getLevelAndBelow(
    service.administrativeUnit!.administrativeLevel,
  );
  const [skipMap, setSkipMap] = useState({
    DISTRICT: skipDistrict,
    SUBDISTRICT: skipSubDistrict,
  });

  const setStateValueMap = {
    DISTRICT: setSkipDistrict,
    SUBDISTRICT: setSkipSubDistrict,
  };

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<
    Prisma.TemplateGetPayload<{
      include: {
        signs: {
          include: { Official: { select: { id: true; name: true } } };
        };
        fields: { include: { options: true } };
      };
    }>
  >();

  useEffect(() => {
    setSkipMap({
      DISTRICT: skipDistrict,
      SUBDISTRICT: skipSubDistrict,
    });
  }, [skipDistrict, skipSubDistrict]);

  const onSkipSubmit = async () => {
    setLoading(true);

    const loadingToast = toast({
      title: "Mengirim...",
      description: "Permintaan perubahan anda sedang diproses",
    });

    const res = await setSkip(
      service.id,
      returnSkip(skipDistrict, skipSubDistrict),
    );

    if (res.error) {
      dismiss(loadingToast.id);
      return toast({
        title: "Gagal Merubah!",
        description: `Gagal merubah layanan (${res.error.message})`,
      });
    }

    dismiss(loadingToast.id);
    toast({
      title: "Berhasil Merubah!",
      description: `Berhasil merubah layanan baru`,
    });
    setLoading(false);
    return router.push("/admin/service/" + res.data?.id);
  };

  return (
    <>
      <div className="divide-y-foreground mt-12 divide-y-2">
        <div className="py-4">
          <h2 className="mb-4 font-light">Lewati Tahap</h2>
          <div className="flex gap-4">
            {levelAndBelow.slice(1, levelAndBelow.length).map((i) => (
              <div key={i} className="flex flex-row gap-1">
                <Checkbox
                  name={i}
                  checked={skipMap[i as keyof typeof skipLevelMap]}
                  onCheckedChange={(e) => {
                    setStateValueMap[i as keyof typeof skipLevelMap](
                      e.valueOf() as boolean,
                    );
                  }}
                />
                <p className="font-light">
                  {divisionLevelMap[i as keyof typeof divisionLevelMap]}
                </p>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-end">
            <Button disabled={loading} onClick={onSkipSubmit}>
              Simpan Tahap
            </Button>
          </div>
        </div>
        <div className="divide-y-foreground flex flex-col gap-y-6 divide-y-2">
          {levelAndBelow.map(
            (level) =>
              (!skipMap[level as keyof (keyof AdministrativeLevel)] ||
                level === service.administrativeUnit.administrativeLevel) && (
                <div key={level} className="flex flex-col gap-y-1.5 py-4">
                  <h2 className="mb-4 font-light">
                    Template Surat Tingkat{" "}
                    {divisionLevelMap[level as keyof typeof divisionLevelMap]}
                  </h2>
                  <TemplateTable
                    templates={service.templates.filter(
                      (template) => template.level === level,
                    )}
                    buttonOnClick={() => {
                      setSelectedAdminLevel(
                        level as keyof typeof divisionLevelMap,
                      );
                      setCreateOpen(true);
                    }}
                    setDeleteDialogOpen={setDeleteDialogOpen}
                    setEditDialogOpen={setEditDialogOpen}
                    setSelectedRow={setSelectedRow}
                  />
                </div>
              ),
          )}
        </div>
      </div>
      <CreateTemplateDialog
        open={isCreateOpen}
        setIsOpen={setCreateOpen}
        adminLevel={selectedAdminLevel!}
        fieldTypes={fieldTypes}
        officials={officials}
        serviceId={service.id}
      />
      {selectedRow && (
        <UpdateTemplateDialog
          open={editDialogOpen}
          setIsOpen={setEditDialogOpen}
          adminLevel={selectedAdminLevel!}
          fieldTypes={fieldTypes}
          officials={officials}
          serviceId={service.id}
          id={selectedRow.id}
          title={selectedRow.title}
          content={selectedRow.contentPdf}
          fields={selectedRow.fields.map(
            ({ id, label, fieldNumber, fieldTypeId, options }) => ({
              label: label || undefined,
              id,
              fieldNumber,
              fieldTypeId,
              options,
            }),
          )}
          signs={selectedRow.signs.map(
            ({ coordX, coordY, Official, officialId, size, page }) => ({
              officialId,
              officialName: Official.name,
              coordX,
              coordY,
              size,
              page,
            }),
          )}
        />
      )}
      <ConfirmDeletionDialog
        id={selectedRow?.id}
        open={deleteDialogOpen}
        setIsOpen={setDeleteDialogOpen}
        description={`Anda akan menghapus Template dengan ID ${selectedRow?.id}. Ini akan secara permanen menghapus data ini
            dan menghapusnya dari server kami.`}
        serverAction={deleteTemplate}
      />
    </>
  );
}
