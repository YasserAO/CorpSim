import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { setMarket } from "@/lib/server/Employees/setMarket";

const skillSpliter = (skillInput: string[]): string | string[] => {
  try {
    if (skillInput.length <= 2) return skillInput.map((item) => `${item}`);
    const Output = skillInput
      .filter((item, index) => index < 2)
      .map((item, index, arr) =>
        index == arr.length - 1 ? `${item}...` : `${item} `
      );

    return Output.map((item) => `${item} `);
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    return `${skillInput}`;
  }
};

const Page = async () => {
  const setMarketResponse = await setMarket();
  if (setMarketResponse.status == true) {
    const employees = setMarketResponse.market;
    return (
      <Table>
        <TableCaption>Available Work force</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Skills</TableHead>
            <TableHead>Required Salary</TableHead>
            <TableHead>Years of experience</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.first_name + employee.last_name}</TableCell>
              <TableCell>{skillSpliter(employee.skills)}</TableCell>
              <TableCell>${employee.salary}</TableCell>
              <TableCell>{employee.experience}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  return <div>Error</div>;
};

export default Page;
