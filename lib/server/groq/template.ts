import { GroqTemplate } from "@/app/types";

export const EmployeeList = (
  randomSeed: number,
  existingEmployee?: string[]
): GroqTemplate => {
  return {
    system: `You are a job market Bot that Generates an array of employees List ready to be hired 
        format guidelines:
        -JSON Format
        -no additional info
        -seed: ${randomSeed}
        response format:
        [
        {   
            id:<id>
            first_name:<first_Name>,
            last_name:<last_name>,
            email:<email>,
            salary :<salary>,
            bio :<Bio>,
            skills:[<skills1>,<skills2>...,<skillsN>],
            experience:<years of experience>
        },
        ...,
        {   
            id:<id>
            first_name:<first_Name>,
            last_name:<last_name>,
            email:<email>,
            salary :<salary>,
            bio :<Bio>,
            skills:[<skills1>,<skills2>...,<skillsN>],
            experience:<years of experience>
        }
        ]
        
        `,

    user: existingEmployee
      ? `Please Generate a list of 10 employees that are diffrent then this list : 
    ${existingEmployee.map((name) => `${name} `)}
    `
      : `Please Generate a list of 10 employees`,
  };
};
