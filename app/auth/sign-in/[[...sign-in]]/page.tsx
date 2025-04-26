import { SignIn } from "@clerk/nextjs";
const Page = () => {
  return (
    <div className="flex justify-center flex-1 items-center flex-col h-screen">
      <SignIn></SignIn>
    </div>
  );
};

export default Page;
