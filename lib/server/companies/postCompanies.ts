"use server";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getCompanies } from "./getCompanies";
import { PostCompaniesResult } from "../../../app/types";
export const postCompanies = async (
  name: string,
  autoHire: boolean,
  workField: string
): Promise<PostCompaniesResult> => {
  const clerkUser = await currentUser();
  if (!clerkUser) {
    redirect("/auth/sign-in");
  }
  const user = await prisma.admin.findUnique({
    where: {
      clerkId: clerkUser?.id,
    },
  });
  if (!user)
    return {
      status: false,
      message: "Unauthorized user",
    };
  try {
    const findCompany = await prisma.company.findUnique({
      where: {
        name: name,
      },
    });
    if (findCompany) return { status: false, message: "Company name is Taken" };
    const companies = await getCompanies(user.id);
    if (companies.status && companies.company.length > 2)
      return { status: false, message: "you have reached max limit" };
    const createCompany = await prisma.company.create({
      data: {
        email: `contact@` + name.trim() + `.com`,
        name: name,
        workField: workField,
        ownerID: user.id,
      },
    });
    if (createCompany)
      return { status: true, message: "Company created successfully" };
    return { status: false, message: "unable to create a company" };
  } catch (err) {
    console.log(err);
  }
  return { status: false, message: "server error" };
};
