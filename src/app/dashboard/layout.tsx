import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { DashboardSidebar } from "./components/dashboard-sidebar";

export default async function DashboardLayout({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-20">
        <SidebarTrigger className="absolute left-0 top-0" />
        {children}
      </main>
    </SidebarProvider>
  );
}
