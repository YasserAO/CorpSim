import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="">
      <ul className="flex gap-2">
        <Link href={"/dashboard"} className="active:bg-gray-900 ">
          Dashboard
        </Link>
        <Link href={"/employee"} className="active:bg-gray-900 ">
          employee
        </Link>
        <Link href={"/hiring"} className="active:bg-gray-900 ">
          hiring
        </Link>
        <Link href={"task"} className="active:bg-gray-900 ">
          Tasks
        </Link>
      </ul>
    </nav>
  );
}
