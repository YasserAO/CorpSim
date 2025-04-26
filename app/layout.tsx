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

import Navbar from "@/components/ui/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={` antialiased flex-1`}>
          <header className="flex items-center h-fit justify-between md:px-[10%] lg-px[30%]">
            <Navbar></Navbar>
            <SignedOut>
              <SignInButton></SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton showName></UserButton>
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
