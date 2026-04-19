"use server";
import { OrderResType } from "@/types/OrderResType";

export async function getAllUserOrders( id : string) : Promise<OrderResType[]> {  

  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`);

  const finalRes = res.json();
  return finalRes;
}
