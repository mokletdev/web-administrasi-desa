"use client";

import { getUserServices } from "@/app/dashboard/actions";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { AdministrativeLevel } from "@prisma/client";
import {
  ChevronRight,
  CircleUser,
  Dot,
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
import { Fragment, useEffect, useMemo, useState } from "react";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

  const [services, setServices] = useState<
    Array<{
      id: string;
      name: string;
      administrativeUnit: { administrativeLevel: AdministrativeLevel };
    }>
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      const fetch = await getUserServices();
      if (fetch.success) setServices(fetch.data!);
    };

    fetchData();
  }, []);

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
            {data?.user?.role === "SUBDISTRICT_ADMIN" && (
              <Fragment>
                <SidebarMenu>
                  <Collapsible className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <File />
                          <span>Layanan Desa</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <TooltipProvider>
                              {services.length > 0 ? (
                                services
                                  .filter(
                                    (service) =>
                                      service.administrativeUnit
                                        .administrativeLevel === "SUBDISTRICT",
                                  )
                                  .map((item) => (
                                    <Tooltip key={item.id}>
                                      <TooltipTrigger className="w-full">
                                        <SidebarMenuButton asChild>
                                          <Link
                                            href={`/admin/fill-service/${item.id}`}
                                            className="text-clip"
                                          >
                                            <Dot />
                                            <span>{item.name}</span>
                                          </Link>
                                        </SidebarMenuButton>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <span>{item.name}</span>
                                      </TooltipContent>
                                    </Tooltip>
                                  ))
                              ) : (
                                <span>Tidak Ditemukan</span>
                              )}
                            </TooltipProvider>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                </SidebarMenu>
                <SidebarMenu>
                  <Collapsible className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <File />
                          <span>Layanan Kecamatan</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <TooltipProvider>
                              {services.length > 0 ? (
                                services
                                  .filter(
                                    (service) =>
                                      service.administrativeUnit
                                        .administrativeLevel === "DISTRICT",
                                  )
                                  .map((item) => (
                                    <Tooltip key={item.id}>
                                      <TooltipTrigger className="w-full">
                                        <SidebarMenuButton asChild>
                                          <Link
                                            href={`/admin/fill-service/${item.id}`}
                                            className="text-clip"
                                          >
                                            <Dot />
                                            <span>{item.name}</span>
                                          </Link>
                                        </SidebarMenuButton>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <span>{item.name}</span>
                                      </TooltipContent>
                                    </Tooltip>
                                  ))
                              ) : (
                                <span>Tidak Ditemukan</span>
                              )}
                            </TooltipProvider>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                </SidebarMenu>
                <SidebarMenu>
                  <Collapsible className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <File />
                          <span>Layanan Kabupaten</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <TooltipProvider>
                              {services.length > 0 ? (
                                services
                                  .filter(
                                    (service) =>
                                      service.administrativeUnit
                                        .administrativeLevel === "CITY",
                                  )
                                  .map((item) => (
                                    <Tooltip key={item.id}>
                                      <TooltipTrigger className="w-full">
                                        <SidebarMenuButton asChild>
                                          <Link
                                            href={`/admin/fill-service/${item.id}`}
                                            className="text-clip"
                                          >
                                            <Dot />
                                            <span>{item.name}</span>
                                          </Link>
                                        </SidebarMenuButton>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <span>{item.name}</span>
                                      </TooltipContent>
                                    </Tooltip>
                                  ))
                              ) : (
                                <span>Tidak Ditemukan</span>
                              )}
                            </TooltipProvider>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                </SidebarMenu>
              </Fragment>
            )}
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
