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
import {
  CircleUser,
  Folder,
  FormInput,
  Home,
  Network,
  Newspaper,
  UserCheck,
  UserRound,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useMemo } from "react";

export const AdminSidebar = () => {
  const { data } = useSession();
  const items = useMemo(() => {
    const navItems = [
      {
        title: "Beranda",
        url: "/admin",
        icon: Home,
      },
      {
        title: "Kop Surat",
        url: "/admin/kop-surat",
        icon: Newspaper,
      },
      {
        title: "Tipe Input",
        url: "/admin/field-type",
        icon: FormInput,
      },
      {
        title: "Layanan",
        url: "/admin/service",
        icon: Network,
      },
      {
        title: "Pejabat",
        url: "/admin/official",
        icon: UserCheck,
      },
      {
        title: "Ajuan Surat",
        url: "/admin/submission",
        icon: Folder,
      },
      {
        title: "Pengguna",
        url: "/admin/user",
        icon: UserRound,
      },
      {
        title: "Profil",
        url: "/admin/profil",
        icon: CircleUser,
      },
    ];

    if (data?.user?.role === "OFFICIAL") {
      // Only include "Ajuan Surat" and "Profil" for OFFICIAL role
      return navItems.filter(
        (item) => item.title === "Ajuan Surat" || item.title === "Profil",
      );
    }

    // Exclude "Profil" and "Pengguna" for non-OFFICIAL roles
    if (
      data?.user?.role !== "SUBDISTRICT_ADMIN" &&
      data?.user?.role !== "SUPERADMIN"
    ) {
      return navItems.filter(
        (item) => item.title !== "Profil" && item.title !== "Pengguna",
      );
    }

    // Excclude "Profil" for SUPERADMIN and SUBDISTRICT_ADMIN
    return navItems.filter((item) => item.title !== "Profil");
  }, [data]);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <h4>Administrasi</h4>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-4">
            <SidebarMenu>
              {items
                .filter(
                  (item) =>
                    !(
                      data?.user?.role === "SUPERADMIN" &&
                      item.title === "Pejabat"
                    ),
                )
                .filter(
                  (item) =>
                    !(
                      data?.user?.role !== "OFFICIAL" && item.title === "Profil"
                    ),
                )
                .map((item) => (
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
