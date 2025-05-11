import { cookies } from "next/headers";
import { getCompanies } from "../lib/server/companies/getCompanies";
import { getUser } from "../lib/server/user/getUser";

export default async function Page() {
  const UserResponse = await getUser();
  if (!UserResponse.status)
    return (
      <div>
        <h1>Welcome To SimCorp</h1>
        <p>Please Create Login or Create an Account</p>
      </div>
    );
  const cookie = await cookies();
  const { user } = UserResponse;

  const Companies = await getCompanies(user.id);
  if (!Companies.status)
    return (
      <div>
        <h1>Welcome {user.first_name + " " + user.last_name}</h1>
        <p>Please Create Companies to start Earning Money</p>
        <p>Current budget: {user.budget.toString()}</p>
      </div>
    );

  const corpIndex = cookie.get("CorpSelection")?.value
    ? Number(cookie.get("CorpSelection")?.value)
    : 0;
  const { company } = Companies;
  return (
    <div className="px-[10%] py-10 flex-1">
      <h1>Welcome {user.first_name + " " + user.last_name}</h1>

      {company.length > 0 && (
        <>
          <h2>
            Company: <span>{company[corpIndex].name}</span>{" "}
          </h2>
          <h3>
            WorkField: <span>{company[corpIndex].workField}</span>
          </h3>

          <h1>Sugguestions :</h1>
        </>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo debitis
        explicabo perspiciatis similique, natus soluta vel, atque deserunt
        possimus, voluptate dolorem repellendus ipsum. Inventore alias quasi
        excepturi, quibusdam mollitia ullam!
      </p>
    </div>
  );
}
