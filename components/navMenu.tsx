"use client";
import { ModeToggle } from "@/components/modeToggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";
import { usePathname } from "next/navigation";

type item = {
  title: string;
  url: string;
};
export function NavMain() {
  const items: item[] = [
    {
      title: "Introduction",
      url: "/introduction",
    },
    {
      title: "Doc",
      url: "/doc",
    },
  ];

  const pathName = usePathname();
  const hideOnPath = ["/auth/sign-in", "/auth/sign-up"];

  return (
    <nav className="flex justify-between w-full pl-5 pr-[5%]">
      {!hideOnPath.includes(pathName) ? (
        <SidebarTrigger></SidebarTrigger>
      ) : (
        <Link href="/">
          <Button variant={"outline"}>Home</Button>
        </Link>
      )}
      <div className="gap-1 flex ">
        {items.map((item) => (
          <Link href={item.url} key={item.title}>
            <Button variant={"outline"}>{item.title}</Button>
          </Link>
        ))}
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
}
