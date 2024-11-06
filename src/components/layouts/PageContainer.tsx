import Link from "next/link";
import { FC, ReactNode } from "react";

interface PageContainerProps {
  children?: ReactNode;
}

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <>
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-5 py-8">
        {children}
      </main>
      <footer className="flex w-full max-w-7xl flex-col items-start justify-between gap-8 bg-foreground px-5 py-8 text-background md:flex-row md:items-center md:gap-0">
        <Link href={"/"} className="text-white">
          <h2>Administrasi Desa</h2>
        </Link>
        <p>Copyright &copy; Developer Administrasi Desa 2024</p>
      </footer>
    </>
  );
};
