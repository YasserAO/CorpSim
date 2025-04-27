import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSideBar from "@/components/AppSideBar";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased flex-1`}>
        <ClerkProvider>
          <header className="flex items-center h-fit justify-between md:px-[10%] lg-px[30%]"></header>
          <SidebarProvider>
            <AppSideBar></AppSideBar>
            <main>
              <SidebarTrigger></SidebarTrigger>
              {children}
            </main>
          </SidebarProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
