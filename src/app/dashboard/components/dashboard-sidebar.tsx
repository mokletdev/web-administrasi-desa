"use client";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { File, Home, NotepadText } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const items = [
  {
    title: "Beranda",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Persuratan",
    url: "/dashboard/document",
    icon: File,
  },
  {
    title: "Riwayat Permintaan",
    url: "/dashboard/request",
    icon: NotepadText,
  },
];

export const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <h4>Dashboard</h4>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-4">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button
          variant={"destructive"}
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};
