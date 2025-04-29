import { currentUser } from "@clerk/nextjs/server";
import { cookies } from "next/headers";

export default async function Page() {
  const user = await currentUser();
  const cookie = await cookies();
  const corpIndex = cookie.get("CorpSelection")?.value;
  return (
    <div className="px-[10%] py-10 flex-1">
      <h1>Welcome {user && <span>{user.fullName}</span>}</h1>
      {corpIndex && (
        <h2>
          You are Selecting corpIndex: <span>{corpIndex}</span>{" "}
        </h2>
      )}

      <h1>Page Content</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo debitis
        explicabo perspiciatis similique, natus soluta vel, atque deserunt
        possimus, voluptate dolorem repellendus ipsum. Inventore alias quasi
        excepturi, quibusdam mollitia ullam!
      </p>
    </div>
  );
}
