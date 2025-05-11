"use server"
import {  setMarketResponse } from "@/app/types";
import { getMarket } from "./getMarket";
import { refillMarket } from "./refillMarket";

export const setMarket = async (): Promise<setMarketResponse> => {
  const mraketResponse = await getMarket();

  if (!mraketResponse) return { status: false, error: "Unknow Error" };
  if (mraketResponse.refill == true) {
    const names =
      mraketResponse.status && mraketResponse.market
        ? mraketResponse.market.map((employee) => `${employee.first_name}`)
        : undefined;
    const marketRefillResponse = await refillMarket(names);
    if(marketRefillResponse.status==false) return {
      status:false  ,  error:"Error Generating a Market" , message:"Unable to refill the market"
    }
  }
  if (mraketResponse.status && mraketResponse.refill == false)
    return { status: true, market: mraketResponse.market, message: "Success" };
  return {status:false , error:"Unknow Error"  }
};
