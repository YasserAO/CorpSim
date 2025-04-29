import { ThemeProvider } from "next-themes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSideBar from "@/components/AppSideBar";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { cookies } from "next/headers";
import { NavMain } from "@/components/navMenu";
import { UniversalWrapper } from "@/components/universalWrapper";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = await cookies();
  const side_toggle =
    cookie.get("sidebar_state")?.value == "true" ? true : false;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` antialiased flex-1`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>
            <header className="flex items-center h-fit justify-between md:px-[10%] lg-px[30%]"></header>

            <SidebarProvider defaultOpen={side_toggle}>
              <UniversalWrapper>
                <AppSideBar></AppSideBar>
              </UniversalWrapper>
              <main className="w-full pt-2 flex flex-col flex-1">
                <NavMain></NavMain>

                <div className="flex-1 flex flex-col">{children}</div>
              </main>
            </SidebarProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
