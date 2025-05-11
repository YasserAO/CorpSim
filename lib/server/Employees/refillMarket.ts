import Groq from "../groq";
import { EmployeeList } from "../groq/template";
import { marketEmployee } from "@/app/types";
import { prisma } from "@/lib/prisma";

const generateEmployees = async (names?: string[]) => {
  const RandomSeed = Math.random() * 10000;
  const inPut = EmployeeList(RandomSeed, ["John Doe", "Emily Chen"]);
  console.log("input : ", inPut);
  const response = await Groq(inPut);
  console.log(response);
  if (!response) return null;
  try {
    const newArr: marketEmployee[] = JSON.parse(response);
    return newArr;
  } catch (err) {
    console.log(response);
    console.log(err);
    return null;
  }
};

export const refillMarket = async (names?: string[]) => {
  const generatedEmp = await generateEmployees(names);

  if (!generatedEmp) return { status: false, message: "Refill failed" };

  const adaptedArray = generatedEmp.map((employee) => ({
    first_name: employee.first_name,
    last_name: employee.last_name,
    email: employee.email,
    experience: employee.experience,
    salary: employee.salary,
    skills: employee.skills,
    bio: employee.bio ?? null,
  }));
  try {
    const pushedEmployee = await prisma.market_employee.createMany({
      data: adaptedArray,
    });
    if (pushedEmployee)
      return { status: true, refill: [...generatedEmp], message: "success" };
    return { status: false, message: "Refill failed" };
  } catch (error) {
    console.log(error);
    return { status: false, message: "Refill failed" };
  }
};
