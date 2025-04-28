"use client";

import * as React from "react";
import { ChevronsUpDown, Plus, Building } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Company } from "@/app/types";
import { cn } from "@/lib/utils";

function CompSwitch({
  Companies,
  activeCorp,
}: {
  Companies: Company[];
  activeCorp: number;
}) {
  console.log(activeCorp);
  const { isMobile } = useSidebar();
  const [compIndex, setCompIndex] = React.useState(activeCorp);
  const [activeTeam, setActiveTeam] = React.useState(Companies[activeCorp]);

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="cursor-pointer   data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Building />
              <div className=" grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {activeTeam.name}
                </span>
                <span className="truncate text-xs">{activeTeam.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-full min-w-56 rounded-lg"
            align="start"
            // side={isMobile ? "bottom" : "right"}
            // sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Companies
            </DropdownMenuLabel>
            {Companies.map((team, index) => (
              <Link
                href={`/${team.name}`}
                key={team.name}
                className={cn(
                  "",
                  team.name == activeTeam.name && "pointer-events-none "
                )}
              >
                <DropdownMenuItem
                  onClick={() => {
                    setActiveTeam(team);
                    document.cookie = `CorpSelection=${index};path=/`;
                  }}
                  className={cn(
                    "gap-2 p-2 cursor-pointer",
                    team.name == activeTeam.name &&
                      "bg-primary text-primary-foreground"
                  )}
                >
                  {team.name}
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default CompSwitch;
