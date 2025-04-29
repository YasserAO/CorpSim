"use client";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { SignIn } from "@clerk/nextjs";
const Page = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex justify-center flex-1 items-center flex-col">
      <SignIn
        appearance={{
          baseTheme: resolvedTheme === "dark" ? dark : undefined,
        }}
        // path="/auth/sign-in"
      ></SignIn>
    </div>
  );
};

export default Page;
