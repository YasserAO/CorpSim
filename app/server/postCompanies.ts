"use server";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export const postCompanies = async (
  name: string,
  autoHire: boolean,
  workField: string
) => {
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
      message: "User doesn't exist , please refresh the page",
    };
  try {
    const findCompany = await prisma.company.findUnique({
      where: {
        name: name,
      },
    });
    if (findCompany) return { status: false, message: "name already exists" };

    const createCompany = await prisma.company.create({
      data: {
        email: `contact@` + name.trim() + `.com`,
        name: name,
        workField: workField,
        ownerID: user.id,
      },
    });
    if (createCompany)
      return { status: true, message: "Company Created Successfuly" };
    return { status: false, message: "unkown Error" };
  } catch (err) {
    console.log(err);
  }
  return { status: false, message: "server_error" };
};
