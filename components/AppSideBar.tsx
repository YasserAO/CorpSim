// Mock
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
} from "lucide-react";
import Link from "next/link";

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
  company: company[];
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

  return (
    <Sidebar>
      <SidebarHeader>
        <CompanySwitcher Companies={Comp.company}></CompanySwitcher>
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
      <SidebarFooter />
    </Sidebar>
  );
}
