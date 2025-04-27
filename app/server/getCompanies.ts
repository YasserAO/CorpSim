import { prisma } from "@/lib/prisma";
import { company } from "../generated/prisma";
import { FindCompanies } from "../types";
export const getCompanies = async (id: number): Promise<FindCompanies> => {
  try {
    const companies = await prisma.company.findMany({
      where: {
        ownerID: id,
      },
    });
    if (companies) return { status: true, company: companies };
    return { status: false, company: null, error: "Not Found" };
  } catch (err) {
    return { status: false, company: null, error: "server_error" };
  }
};
