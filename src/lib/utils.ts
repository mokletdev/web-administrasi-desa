import { clsx, type ClassValue } from "clsx";
import { ImageRun } from "docx";
import { extension } from "mime-types";
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

export function formatDate(date: Date): string {
  const tanggal = date.getDate();
  const bulan = getMonthName(date.getMonth());
  const tahun = date.getFullYear();

  return `${tanggal} ${bulan} ${tahun}`;
}

export const divisionLevelMap = {
  CITY: "Kabupaten/Kota",
  DISTRICT: "Kecamatan",
  SUBDISTRICT: "Desa",
};

export const divisionLevelIndex = ["SUBDISTRICT", "DISTRICT", "CITY"] as const;

export const skipLevelMap = {
  DISTRICT: "Kecamatan",
  SUBDISTRICT: "Desa",
};

export const roleLevelMap = {
  CITIZEN: "Penduduk",
  CITY_ADMIN: "Pengurus Tingkat Kota",
  DISTRICT_ADMIN: "Pengurus Tingkat Kecamatan",
  SUBDISTRICT_ADMIN: "Pengurus Tingkat Kelurahan",
  SUPERADMIN: "Super Admin",
  OFFICIAL: "Pejabat",
};

export const submissionStatusMap = {
  PENDING_APPROVAL: "Menunggu Persetujuan",
  APPROVED: "Disetujui",
  REJECTED: "Ditolak",
  READY_FOR_SIGNATURE: "Menunggu Tanda Tangan",
  SIGNED: "Telah di Tanda Tangan",
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
  return value
    .toLowerCase()
    .replace(/ /g, "_")
    .replace(/[^\w\s]/gi, "");
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

export const base64ToBlob = (base64Data: string) => {
  const byteCharacters = atob(base64Data);
  const byteNumbers = Array.from(byteCharacters, (char) => char.charCodeAt(0));
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: "application/octet-stream" });
};

/**
 * Downloads a file from the specified URL and triggers a download on the client side.
 *
 * This function uses the Fetch API to retrieve the file as a blob and then
 * programmatically creates a download link for the file, allowing users to
 * download the file to their local device. The file extension is inferred from
 * the `Content-Type` header in the HTTP response.
 *
 * @param {string} url - The URL of the file to download.
 * @param {string} [fileName="file"] - The desired name for the downloaded file, without extension.
 *                                      If not provided, defaults to "file".
 * @returns {Promise<void>} A promise that resolves when the file has been successfully downloaded,
 *                          or rejects with an error if the download fails.
 *
 * @throws {Error} Throws an error if the file fetch operation fails (e.g., due to network issues or an invalid URL).
 *
 * @example
 * // Download a file from the given URL with a custom file name.
 * downloadFile('https://example.com/file.pdf', 'file')
 *   .then(() => console.log('Download successful'))
 *   .catch((error) => console.error('Download failed:', error));
 */
export async function downloadFile(
  url: string,
  fileName: string = "file",
): Promise<void> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch file from ${url}`);
  }

  const blob = await response.blob();
  const link = document.createElement("a");
  const fileExtenstion = extension(
    response.headers.get("Content-Type") || "bin",
  );

  link.href = URL.createObjectURL(blob);
  link.download = `${fileName}.${fileExtenstion}`;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);

  return;
}

/**
 * Maps CSS-like positioning properties for an image to a `docx` floating image configuration.
 *
 * @param {Object} params - The configuration object for the image.
 * @param {number} params.left - The horizontal position in pixels, measured from the left of the page.
 * @param {number} params.bottom - The vertical position in pixels, measured from the bottom of the page.
 * @param {string} params.imagePath - The file path to the image.
 * @param {number} params.width - The width of the image in pixels.
 * @param {number} params.height - The height of the image in pixels.
 * @param {number} params.pageHeight - The height of the page in pixels, used to calculate the vertical position from the top.
 *
 * @returns {ImageRun} A `docx` `ImageRun` instance with the configured floating image properties.
 *
 * @throws {Error} Throws an error if the image file cannot be read.
 *
 * @example
 * const imageRun = mapImagePositionToDocx({
 *   left: 150,
 *   bottom: 300,
 *   imagePath: "./example-image.png",
 *   width: 200,
 *   height: 100,
 *   pageHeight: 1122, // Approximate height of an A4 page in pixels
 * });
 *
 * @example
 * // Adding multiple images to a docx document
 * const doc = new Document({
 *   sections: [
 *     {
 *       children: [
 *         mapImagePositionToDocx({
 *           left: 50,
 *           bottom: 100,
 *           imagePath: "./image1.png",
 *           width: 150,
 *           height: 100,
 *           pageHeight: 1122,
 *         }),
 *         mapImagePositionToDocx({
 *           left: 300,
 *           bottom: 200,
 *           imagePath: "./image2.png",
 *           width: 200,
 *           height: 150,
 *           pageHeight: 1122,
 *         }),
 *       ],
 *     },
 *   ],
 * });
 */
export function mapImagePositionToDocx({
  left,
  bottom,
  imageBase64,
  width,
  height,
}: {
  left: number;
  bottom: number;
  imageBase64: string;
  width: number;
  height: number;
}): ImageRun {
  const A4_HEIGHT_PX = 1122;
  const EMU_PER_PIXEL = 9525;

  const horizontalOffset = left * EMU_PER_PIXEL;
  const verticalOffsetFromTop =
    (A4_HEIGHT_PX - bottom - height) * EMU_PER_PIXEL; // Adjusted vertical position

  return new ImageRun({
    type: "png",
    data: Buffer.from(imageBase64, "base64"),
    transformation: {
      width,
      height,
    },
    floating: {
      horizontalPosition: {
        relative: "page",
        offset: horizontalOffset,
      },
      verticalPosition: {
        relative: "page",
        offset: verticalOffsetFromTop,
      },
    },
  });
}
