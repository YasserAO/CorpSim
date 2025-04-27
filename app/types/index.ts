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

export type Company = Prisma.companyGetPayload<{}>;
