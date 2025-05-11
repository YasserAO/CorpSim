"server action";

import { userCheck } from "../user/checkUser";

const checkCompanies = async () => {
  await userCheck();
};
