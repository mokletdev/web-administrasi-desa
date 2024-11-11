import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getMonthName = (month: number) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[month];
};

export const stringifyDate = (date: Date) => {
  const year = date.getFullYear(),
    month = getMonthName(date.getMonth()),
    day = date.getDate();
  return `${month} ${day}, ${year}`;
};

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

export const downloadBase64File = (base64Data: string, filename: string) => {
  // Convert the base64 string to a Blob
  const blob = base64ToBlob(base64Data);

  // Create a temporary URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create an anchor element and click it to start the download
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();

  // Clean up the temporary URL
  URL.revokeObjectURL(url);
};

// Helper function to convert base64 string to a Blob
export const base64ToBlob = (base64Data: string) => {
  const byteCharacters = atob(base64Data);
  const byteNumbers = Array.from(byteCharacters, (char) => char.charCodeAt(0));
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: "application/octet-stream" });
};
