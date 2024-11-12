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
import { File, Folder, FormInput, Home, SquareRadical } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const items = [
  {
    title: "Beranda",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Tipe Input",
    url: "/admin/field-type",
    icon: FormInput,
  },
  {
    title: "Posisi Jabatan",
    url: "/admin/position",
    icon: SquareRadical,
  },
  {
    title: "Template Surat",
    url: "/admin/document",
    icon: File,
  },
  {
    title: "Ajuan Surat",
    url: "/admin/submission",
    icon: Folder,
  },
];

export const AdminSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <h4>Administrasi</h4>
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
