"use server";
import { getMarketResponse, marketEmployee } from "@/app/types";
import { prisma } from "@/lib/prisma";
export const getMarket = async (): Promise<getMarketResponse> => {
  try {
    const marketEmployees = await prisma.market_employee.findMany();
    if (!marketEmployees) return { status: false, error: "Unkown Error" };
    if (marketEmployees.length === 0) {
      return { status: false, message: "Market is empty", refill: true };
    }

    const newMarketData: marketEmployee[] = marketEmployees.map((employee) => ({
      id: employee.id,
      first_name: employee.first_name,
      last_name: employee.last_name,
      bio: employee.bio ?? undefined,
      email: employee.email,
      salary: employee.salary,
      skills: employee.skills,
      experience: employee.experience,
    }));
    if (newMarketData.length < 5) {
      return {
        status: true,
        refill: true,
        market: [...newMarketData],
        message: "Fetching was a success",
      };
    }
    return {
      status: true,
      refill: false,
      market: [...newMarketData],
      message: "Fetching was a success",
    };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return { status: false, error: "Error Fetching try again" };
  }
};
