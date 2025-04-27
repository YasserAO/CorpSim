"use server";
// Auth DB
import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// Types
import { FindAdminResult } from "../types";

// Main UserCheck
export const userCheck = async (): Promise<FindAdminResult> => {
  const user = await currentUser();
  if (!user)
    return {
      status: false,
      user: null,
      error: "not_found",
    };

  const check = await findAdmin(user.id);
  if (check.status == true || check.error == "server_error") {
    return check;
  }

  if (check.status == false && check.error == "not_found") {
    const createdAdmin = await createAdmin(user);
  }

  return { status: false, user: null, error: "unkown" };
};

// Utils
const findAdmin = async (id: string): Promise<FindAdminResult> => {
  try {
    const admin = await prisma.admin.findFirst({
      where: {
        clerkId: id,
      },
    });
    if (admin) {
      return { status: true, user: admin };
    }

    return { status: false, user: null, error: "not_found" };
  } catch (err) {
    return { status: false, user: null, error: "server_error" };
  }
};

async function createAdmin(user: any): Promise<FindAdminResult> {
  try {
    const createAdmin = await prisma.admin.create({
      data: {
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.emailAddresses[0].emailAddress,
        budget: 1000.0,
        clerkId: user.id,
      },
    });

    if (createAdmin) {
      return { status: true, user: createAdmin };
    }
    return { status: false, user: null, error: "User not created" };
  } catch (error) {
    return { status: false, user: null, error: "server_error" };
  }
}
