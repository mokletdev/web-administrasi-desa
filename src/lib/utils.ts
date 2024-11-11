import { DocumentFormInput } from "@/app/admin/document/actions";
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

export const roleLevelMap = {
  CITIZEN: "Penduduk",
  CITY_ADMIN: "Kota",
  DISTRICT_ADMIN: "Kecamatan",
  SUBDISTRICT_ADMIN: "Kelurahan",
};

export const fileToBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve((reader.result as string).split(",")[1]);
    reader.onerror = (error) => reject(error);
  });
};

export const fileToDataURL = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const normalizeVariableName = (value: string) => {
  return value.toLowerCase().replace(" ", "_");
};

export const validateFields = (
  fields: Array<{
    id?: number;
    label: string;
    required: boolean;
    fieldTypeId: number;
    fieldNumber: number;
    options?: Array<{
      id?: string;
      value: string;
    }>;
  }>,
  mustHaveOptionsTypeIds: number[],
) => {
  // Check each field in the form
  for (const field of fields) {
    // Check if the label is empty
    if (field.label === "") {
      console.log("Validation failed: Empty label found.");
      return false;
    }

    // Check if fieldTypeId is 3 and options are present
    if (mustHaveOptionsTypeIds.includes(field.fieldTypeId)) {
      // Ensure options are defined and contain no empty values
      if (!field.options || field.options.some((option) => !option.value)) {
        console.log(
          "Validation failed: Empty or undefined option value found in fieldTypeId 3.",
        );
        return false;
      }
    }
  }

  return true;
};
