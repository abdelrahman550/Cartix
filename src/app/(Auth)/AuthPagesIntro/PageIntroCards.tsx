import { fraunces } from "@/Fonts";
import { Package, Star, Users, Zap } from "lucide-react";
import React from "react";

const dashCard = [
  {
    key: "shoppers",
    number: "200K+",
    title: "Active Shoppers",
    subTitle: "Across The World",
    icon: <Users size={22} />,
  },
  {
    key: "products",
    number: "50K+",
    title: "Products Listed",
    subTitle: "New Items Daily",
    icon: <Package size={22} />,
  },
  {
    key: "rating",
    number: "4.9",
    title: "Average Rating",
    subTitle: "From Verified Buyers",
    icon: <Star fill="currentColor" size={22} />,
  },
  {
    key: "delivery",
    number: "24hr",
    title: "Express Delivery",
    subTitle: "Same-day Available",
    icon: <Zap fill="currentColor" size={22} />,
  },
];

export default function PageIntroCards() {
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {dashCard.map((item) => (
          <div
            key={item.key}
            className="flex flex-col gap-1 rounded-2xl border border-black/5 bg-white/80 backdrop-blur-sm px-4 py-3 transition hover:-translate-y-px hover:shadow-md hover:border-crimson/30 duration-200"
          >
            <div
              className={`${fraunces.className} text-crimson flex items-center gap-2 text-2xl font-bold tracking-tight`}
            >
              <span className="text-xl opacity-90">{item.icon}</span>
              <span>{item.number}</span>
            </div>
            <span className="text-sm font-semibold text-black/75">
              {item.title}
            </span>
            <span className="text-[11px] text-gray-500">{item.subTitle}</span>
          </div>
        ))}
      </div>
    </>
  );
}
