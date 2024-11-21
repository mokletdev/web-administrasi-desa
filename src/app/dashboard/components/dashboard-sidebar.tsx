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
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { File, Home, NotepadText, ChevronRight, Dot } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { getUserServices } from "../actions";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

const items = [
  {
    title: "Beranda",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Riwayat Pengajuan",
    url: "/dashboard/request",
    icon: NotepadText,
  },
];

export const DashboardSidebar = () => {
  const [services, setServices] = useState<Array<{ id: string; name: string }>>(
    [],
  );
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
            <SidebarMenu>
              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <File />
                      <span>Pengajuan Surat</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <TooltipProvider>
                          {services.length > 0 ? (
                            services.map((item) => (
                              <Tooltip key={item.id}>
                                <TooltipTrigger className="w-full">
                                  <SidebarMenuButton asChild>
                                    <Link
                                      href={`/dashboard/service/${item.id}`}
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
