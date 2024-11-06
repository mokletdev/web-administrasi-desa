import Link from "next/link";
import { FC, ReactNode } from "react";

interface PageContainerProps {
  children?: ReactNode;
}

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <>
      <main className="mx-auto flex max-w-7xl flex-col items-center justify-center px-5 py-8">
        {children}
      </main>
      <footer className="flex w-full max-w-7xl items-center justify-between bg-foreground px-5 py-8">
        <Link href={"/"}>
          <h1>Administrasi Desa</h1>
        </Link>
        <p>Copyright &copy; Developer Administrasi Desa 2024</p>
      </footer>
    </>
  );
};
