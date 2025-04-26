import type { Metadata } from "next";
interface Props {
  params: {
    id: string;
  };
}
export const metadata: Metadata = {
  title: "ID",
  description: "Dashboard",
};
export default async function User({ params }: Props) {
  const { id } = await params;
  return <h2>User is {id}</h2>;
}
