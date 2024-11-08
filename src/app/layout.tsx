import NextAuthProvider from "@/components/providers/NextAuthProvider";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ProgressBarProvider from "@/components/providers/ProgressBarProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const robots =
  process.env.APP_ENV != "production" ? "noindex, nofollow" : "index, follow";

// TOOD: Change this metadata
export const metadata: Metadata = {
  title: { default: "Administrasi Desa", template: "%s | Administrasi Desa" },
  authors: [
    { name: "Ahsan Azizan", url: "https://ahsanzizan.xyz/" },
    { name: "Kusindra Aji Rabbany", url: "https://benspace.xyz/" },
  ],
  creator: "MokletDev",
  robots,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthProvider>
      <html lang="en">
        {process.env.APP_ENV === "production" && process.env.GA_ID && (
          <GoogleAnalytics gaId={process.env.GA_ID} />
        )}
        <body className={`${poppins.className} overflow-x-hidden antialiased`}>
          <ProgressBarProvider />
          {children}
          <Toaster />
        </body>
      </html>
    </NextAuthProvider>
  );
}
