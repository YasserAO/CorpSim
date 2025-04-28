import { mockData } from "@/app/mock/Mockcompanies";
// Types and db
import { company } from "@/app/generated/prisma";
import { userCheck } from "@/app/server/checkUser";
import { getCompanies } from "@/app/server/getCompanies";

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
  ChevronsUpDownIcon,
  LayoutDashboard,
  BookCheck,
  Home,
  UsersRound,
  UserRoundPlus,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";

const items = [
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
    title: "Hire",
    url: "/hire",
    icon: UserRoundPlus,
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
  let Comp: Comp = { status: true, company: mockData };
  console.log(Comp.company);

  async function setComp(Comp: Comp) {
    const FindUser = await userCheck();
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
  const sidebar_state = cookie.get("sidebar_state");

  const activeCorp = activeCorpString ? Number(activeCorpString) : 0;

  return (
    <Sidebar>
      <SidebarHeader>
        {Comp.status && Comp.company !== null ? (
          <CompanySwitcher
            Companies={Comp.company}
            activeCorp={activeCorp}
          ></CompanySwitcher>
        ) : (
          <Button
            variant={"outline"}
            size={"default"}
            className="w-[80%] mx-auto "
          >
            <div className="flex size-6 items-center justify-center rounded-md border bg-background">
              <Plus className="size-4" />
            </div>
            <div className="font-medium text-muted-foreground">
              Create a company
            </div>
          </Button>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Corp Settings</SidebarGroupLabel>
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
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
