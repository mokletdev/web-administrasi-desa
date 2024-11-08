import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forbidden",
  description: "Anda tidak memiliki Akses.",
};

export default function NotFound() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="display">403</h1>
        <p>Anda tidak memiliki akses pada halaman ini!</p>
      </div>
    </main>
  );
}
