import { SignUp } from "@clerk/nextjs";
const Page = () => {
  return (
    <div className="flex justify-center flex-1 items-center flex-col">
      <SignUp></SignUp>
    </div>
  );
};

export default Page;
