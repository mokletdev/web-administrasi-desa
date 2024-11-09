import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const divisionLevelMap = {
  CITY: "Kota",
  DISTRICT: "Kecamatan",
  SUBDISTRICT: "Kelurahan",
};
