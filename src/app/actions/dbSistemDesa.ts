"use server";

import { ActionResponses } from "@/types/actions";
import { sistemdesa } from "@/lib/prisma";

export async function getPenduduk(nik: string) {
  try {
    const penduduk = await sistemdesa.penduduk.findFirst({ where: { nik } });
    if (!penduduk) {
      return ActionResponses.notFound("Penduduk tidak ditemukan");
    }

    const [kel, pend, agama, status, pekerjaan, gol_dar] = await Promise.all([
      penduduk.kel
        ? sistemdesa.kel.findFirst({ where: { id: penduduk.kel } })
        : null,
      penduduk.pend
        ? sistemdesa.pendidikan.findFirst({ where: { id: penduduk.pend } })
        : null,
      penduduk.agama
        ? sistemdesa.agama.findFirst({ where: { id: penduduk.agama } })
        : null,
      penduduk.status
        ? sistemdesa.status.findFirst({ where: { id: penduduk.status } })
        : null,
      penduduk.pekerjaan
        ? sistemdesa.pekerjaan.findFirst({
            where: { id: penduduk.pekerjaan },
          })
        : null,
      penduduk.gol_dar
        ? sistemdesa.gol_dar.findFirst({
            where: { id: parseInt(penduduk.gol_dar) },
          })
        : null,
    ]);

    const pendudukWithRelation = {
      ...penduduk,
      kel: kel?.kel,
      pend: pend?.pend,
      agama: agama?.agama,
      status: status?.status,
      pekerjaan: pekerjaan?.pekerjaan,
      gol_dar: gol_dar?.gol,
    };

    return ActionResponses.success(pendudukWithRelation);
  } catch (error) {
    console.log("Error in getPenduduk: ", error);
    return ActionResponses.serverError();
  }
}

export async function getPendudukByNIK(searchNIK: string) {
  try {
    const penduduk = await sistemdesa.penduduk.findMany({
      where: { nik: { startsWith: searchNIK } },
      select: { nama: true, nik: true },
      take: 10,
    });

    const pendudukMap = penduduk.map((item) => ({
      label: `${item.nama} - (${item.nik})`,
      value: item.nik,
    }));

    return ActionResponses.success(pendudukMap);
  } catch (error) {
    console.log("Error in getPenduduk: ", error);
    return ActionResponses.serverError();
  }
}
