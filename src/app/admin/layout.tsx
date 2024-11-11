import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { AdminSidebar } from "./components/admin-sidebar";

export default function AdminLayout({ children }: { children?: ReactNode }) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-20">
        <SidebarTrigger className="absolute left-0 top-0" />
        {children}
      </main>
    </SidebarProvider>
  );
}
