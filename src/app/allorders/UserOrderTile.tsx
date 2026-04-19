import React from 'react'
import {
  Banknote,
  Calendar,
  Check,
  CreditCard,
  Dot,
  Luggage,
  MapPin,
  TruckElectric,
} from "lucide-react";
import { fraunces } from '@/Fonts';
import { OrderResType } from '@/types/OrderResType';

function formatDate(dateString: string): string {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}


export default function UserOrderTile({orderInfo} : {orderInfo : OrderResType}) {

    
    const FinalOrderCreationDate = formatDate(orderInfo.createdAt)

  return (
     <div className="flex md:items-center justify-between rounded-2xl gap-4 flex-col md:flex-row border border-gray-200 bg-white px-6 py-5 shadow backdrop-blur-2xl">
            <div className="flex items-center gap-5 ">
              {orderInfo.paymentMethodType == "cash" && <div className="bg-green-mid border-green-border text-green flex h-12 w-12 items-center justify-center rounded-lg border">
                <span>
                  <Banknote size={24} />
                </span>
              </div>}
              {orderInfo.paymentMethodType == "card" && <div className="bg-blue-mid border-blue-border text-blue flex h-12 w-12 items-center justify-center rounded-lg border">
                <span>
                  <CreditCard size={24} />
                </span>
              </div>}

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  {orderInfo.isDelivered && <div className="bg-crimson flex w-fit items-center gap-1 rounded-xl px-2.5 py-1 text-sm font-bold text-white">
                    <span>
                      <Check size={18} strokeWidth={3} />
                    </span>
                    <span>Delivered</span>
                  </div>}
                 {!orderInfo.isDelivered && <div className="bg-blue flex w-fit items-center gap-1 rounded-xl px-2.5 py-1 text-sm font-bold text-white">
                    <span>
                      <TruckElectric size={18} />
                    </span>
                    <span>On The Way</span>
                  </div>}
                  <span className="text-gray-500">
                    <Dot size={10} strokeWidth={10} />
                  </span>
                  <div className="text-sm font-bold text-gray-500">#{orderInfo.id}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <span>
                      <Calendar size={14} />
                    </span>
                    <span className="leading-2">{FinalOrderCreationDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <span>
                      <Luggage size={14} />
                    </span>
                    <span className="leading-2">{orderInfo.cartItems.length} Items</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <span>
                      <MapPin size={14} />
                    </span>
                    <span className="leading-2">{orderInfo.shippingAddress?.details}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-crimson flex h-full md:items-center justify-end md:justify-center gap-2 text-3xl font-bold">
              <span className={`${fraunces.className}`}>{orderInfo.totalOrderPrice}</span>
              <span className="self-end text-sm font-bold text-gray-500">
                EGP
              </span>
            </div>
          </div>
  )
}
