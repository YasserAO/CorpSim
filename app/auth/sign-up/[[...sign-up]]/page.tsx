"use client";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { SignUp } from "@clerk/nextjs";
const Page = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex justify-center flex-1 items-center flex-col">
      <SignUp
        appearance={{
          baseTheme: resolvedTheme === "dark" ? dark : undefined,
        }}
      ></SignUp>
    </div>
  );
};

export default Page;
