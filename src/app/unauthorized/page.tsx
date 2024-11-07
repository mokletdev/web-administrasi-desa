import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forbidden",
  description: "Anda tidak memiliki Akses.",
};

// TODO: Update this forbidden page
export default function NotFound() {
  return <h1>403. Anda tidak memiliki akses pada halaman ini!</h1>;
}
