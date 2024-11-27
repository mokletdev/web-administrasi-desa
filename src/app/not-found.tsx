import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for is not found.",
};

export default function NotFound() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="display">404</h1>
        <p>Halaman yang anda cari tidak ditemukan!</p>
        <p className="text-xs">&copy; MokletDev Team</p>
      </div>
    </main>
  );
}
