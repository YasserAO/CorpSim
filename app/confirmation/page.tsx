"use client";
// import useAdmin from "../hooks/admin";
import { userCheck, findAdmin, currentUser } from "@/lib/checkUser";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    async function excuteThis() {
      await userCheck();
    }
    excuteThis();
  }, []);

  return <h1>Setup Page</h1>;
};

export default Page;
