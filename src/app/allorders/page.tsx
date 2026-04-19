"use client";
import { fraunces } from "@/Fonts";
import { OrderResType } from "@/types/OrderResType";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getAllUserOrders } from "../_actions/GetAllUserOrdersAction";
import { getUserIdFromToken } from "../_actions/getUserIdAction";
import AllOrdersPageBreadCrumbs from "./AllOrdersPageBreadCrumbs";
import EmptyOrdersState from "./EmptyOrdersState";
import LoadingOrdersState from "./LoadingOrdersState";
import UserOrderTile from "./UserOrderTile";

export default function Page() {
  const { status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      setIsLoading(false);
      setAllUserOrders([]);
      return;
    }

    async function fetchOrders() {
      setIsLoading(true);
      try {
        const userId = await getUserIdFromToken();

        if (!userId?.decoded?.id) {
          setAllUserOrders([]);
          setIsLoading(false);
          return;
        }

        const userOrders = await getAllUserOrders(userId.decoded.id);
        setAllUserOrders(userOrders ?? []);
      } finally {
        setIsLoading(false);
      }
    }

    fetchOrders();
  }, [status]);

  const [allUserOrders, setAllUserOrders] = useState<OrderResType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const hasOrders = allUserOrders.length > 0;

  return (
    <>
      <AllOrdersPageBreadCrumbs />
      <div className="bg-gray-100 px-6 pb-6 md:px-14 md:pb-14">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="relative ps-10">
              <p className="text-crimson text-xs font-bold uppercase">
                Saved Items
              </p>
              <div className="bg-crimson via-crimson to-crimson absolute top-1/2 left-0 h-1 w-8 -translate-y-1/2 rounded-xl bg-linear-to-r from-white"></div>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-extrabold">
                My{" "}
                <span className={fraunces.className + " text-crimson"}>
                  Orders
                </span>
              </h2>
              <div
                className={`${fraunces.className} rounded-full border border-gray-300 bg-gray-200 px-3 py-1 text-sm font-bold tracking-tight text-gray-500`}
              >
                {allUserOrders?.length} Orders
              </div>
            </div>
          </div>
        </div>

        {isLoading && <LoadingOrdersState />}

        {!isLoading && hasOrders && (
          <div className="flex flex-col gap-6">
            {allUserOrders?.map((order) => (
              <UserOrderTile key={order._id} orderInfo={order} />
            ))}
          </div>
        )}

        {!isLoading && !hasOrders && <EmptyOrdersState />}
      </div>
    </>
  );
}
