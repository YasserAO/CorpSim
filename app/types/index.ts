import { admin, Prisma } from "../generated/prisma";
import { company } from "../generated/prisma";

export type FindAdminResult =
  | { status: true; user: admin }
  | {
      status: false;
      user: null;
      error: "not_found" | "server_error" | "User not created" | "unkown";
    };

export type FindCompanies =
  | { status: true; company: company[] }
  | {
      status: false;
      company: null;
      error: "Not Found" | "unkown" | "server_error";
    };

export type PostCompaniesResult =
  | {
      status: true;
      message: "Company created successfully";
    }
  | {
      status: false;
      message:
        | "you have reached max limit"
        | "unable to create a company"
        | "server error"
        | "Company name is Taken"
        | "Unauthorized user";
    };

export type Company = Prisma.companyGetPayload<{}>;

// Market Employee Types

export type marketEmployee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  salary: number;
  bio?: string;
  skills: string[];
  experience: number;
};

export type getMarketResponse =
  | {
      status: false;
      refill?: boolean;
      message?: "Market is empty";
      error?: "Error Fetching try again" | "Server Error" | "Unkown Error";
    }
  | {
      status: true;
      refill: boolean;
      message: "Fetching was a success";
      market: marketEmployee[];
    };

export type setMarketResponse =
  | {
      status: true;
      message: "Success";
      market: marketEmployee[];
    }
  | {
      status: false;
      message?: "Unable to refill the market";
      error?:
        | "Error Fetching from DB"
        | "Error Generating a Market"
        | "Server Error"
        | "Unknow Error";
    };

// Groq types
export type GroqTemplate = {
  system: string;
  user: string;
};
