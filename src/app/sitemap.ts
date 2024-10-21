import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    { url: `${process.env.URL}/`, lastModified: new Date().toISOString() },
  ];
}

// Revalidate every 7.2 seconds
export const revalidate = 7200;
