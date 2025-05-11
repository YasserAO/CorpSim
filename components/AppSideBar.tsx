// Auth
import { SignInButton } from "@clerk/nextjs";

import { mockData } from "@/app/mock/Mockcompanies";
// Types and db
import { company } from "@/app/generated/prisma";
import { userCheck } from "@/lib/server/user/checkUser";
import { getCompanies } from "@/lib/server/companies/getCompanies";

// UIs
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import CompanySwitcher from "@/components/company-switcher";
import {
  BookCheck,
  Home,
  UsersRound,
  UserRoundPlus,
  Plus,
  Store,
  ChartArea,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import { NavUser } from "@/components/navUser";

const sharedSpace = [
  {
    title: "Job Market",
    url: "market",
    icon: Store,
  },
  {
    title: "Leading Corps",
    url: "leaderboard",
    icon: ChartArea,
  },
];
const corpSettings = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Employees",
    url: "/employees",
    icon: UsersRound,
  },

  {
    title: "Tasks",
    url: "tasks",
    icon: BookCheck,
  },
];
type Comp = {
  status: Boolean;
  company: company[] | null;
};
export default async function AppSidebar() {
  const FindUser = await userCheck();
  let User;
  if (FindUser.status == true) {
    const { user } = FindUser;
    User = {
      name: user.first_name + user.last_name,
      email: user.email,
      avatar: user.avatar,
    };
  }

  let Comp: Comp = { status: true, company: null };
  let companies;
  if (FindUser.status == true) companies = await getCompanies(FindUser.user.id);
  async function setComp(Comp: Comp) {
    if (FindUser.status == true) {
      const companies = await getCompanies(FindUser.user.id);
      if (companies.status) {
        Comp.status = true;
        Comp.company = companies.company;
      }
    }
  }
  await setComp(Comp);
  const cookie = await cookies();
  const activeCorpString = cookie.get("CorpSelection")?.value;
  let activeCorp = activeCorpString ? Number(activeCorpString) : 0;
  if (companies?.status) {
    if (activeCorp > companies.company.length - 1) {
      activeCorp = 0;
    }
  }

  return (
    <Sidebar>
      <SidebarHeader>
        {Comp.status && Comp.company?.length !== 0 && Comp.company !== null ? (
          <CompanySwitcher
            Companies={Comp.company}
            activeCorp={activeCorp}
          ></CompanySwitcher>
        ) : (
          <Link href={`/corp/create`}>
            <Button variant={"outline"} size={"default"} className="w-full">
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">
                Create a company
              </div>
            </Button>
          </Link>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Corp Settings</SidebarGroupLabel>
          <SidebarMenu>
            {corpSettings.map((item) => (
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
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Shared Space</SidebarGroupLabel>
          <SidebarMenu>
            {sharedSpace.map((item) => (
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
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {FindUser.status && User ? (
          <NavUser user={User}></NavUser>
        ) : (
          <Link href={"/auth/sign-in"}>
            <Button variant={"outline"} className="w-full">
              Sign In
            </Button>
          </Link>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
