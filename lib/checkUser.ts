"use server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

const userCheck = async () => {
  const checkUser = await auth();
  // const { stat, setState } = useAdmin();

  if (checkUser) {
    if (typeof checkUser.userId == "string") {
      const checkAdmin = await findAdmin(checkUser.userId);
      if (checkAdmin) {
        console.log("Admin Already exists");
      }
      if (!checkAdmin) {
        console.log("user doesn't exist");
        const user = await currentUser();
        const createdAdmin = await createAdmin(user);
        console.log(createdAdmin);
        if (createdAdmin) {
          console.log("user Created Successfully");
        } else console.log("User wan't created");
      }
    }
  }
};

const findAdmin = async (id: string) => {
  try {
    const admin = await prisma.admin.findFirst({
      where: {
        clerkId: id,
      },
    });
    if (admin) {
      console.log(admin.clerkId);
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};

async function createAdmin(user: any) {
  // console.log(user);/
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
    console.log(createAdmin);
    const admins = await prisma.admin.findMany();
    console.log(admins);
    if (createAdmin) return true;
    else return false;

    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export { userCheck, findAdmin, currentUser };
