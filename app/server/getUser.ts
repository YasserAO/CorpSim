import { currentUser } from "@clerk/nextjs/server";
import { FindAdminResult } from "../types";
import { prisma } from "@/lib/prisma";

export const getUser = async (): Promise<FindAdminResult> => {
  const clerkUser = await currentUser();
  if (!clerkUser) return { status: false, user: null, error: "not_found" };
  try {
    const User = await prisma.admin.findUnique({
      where: {
        clerkId: clerkUser.id,
      },
    });
    if (!User) return { status: false, user: null, error: "not_found" };
    return { status: true, user: User };
  } catch (err) {
    return { status: false, user: null, error: "server_error" };
  }
};
