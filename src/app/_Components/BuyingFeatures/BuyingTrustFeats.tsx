import { featureType } from "@/types/featureType";
import { Headset, RotateCcw, ShieldCheck, Truck } from "lucide-react";

type Props = {
  feature: featureType;
};

const features = {
  shipping: {
    title: "Free Delivery",
    subTitle: "On orders over 500 EGP",
    icon: <Truck size={16} />,
  },
  payment: {
    title: "Secure Payment",
    subTitle: "100% secure transactions",
    icon: <ShieldCheck size={16} />,
  },
  return: {
    title: "30-Day Returns",
    subTitle: "Money back",
    icon: <RotateCcw size={16} />,
  },
  support: {
    title: "Style & Fit Help",
    subTitle: "Sizing advice & outfit guidance",
    icon: <Headset size={16} />,
  },
};

export default function BuyingTrustFeats({ feature }: Props) {
  return (
    <div className="hover:bg-crimson-soft hover:border-crimson-border group crimson-shadow-hover flex items-center gap-4 overflow-hidden rounded-2xl border border-gray-200 bg-white px-3.5 py-3 transition hover:-translate-y-0.5">
      <div className="bg-crimson-soft border-crimson-border text-crimson group-hover:bg-crimson flex h-8 w-8 items-center justify-center rounded-lg border transition duration-300 group-hover:scale-105 group-hover:text-white">
        {features[feature].icon}
      </div>
      <div>
        <div className="group-hover:text-crimson mb-1 text-sm font-bold transition">
          {features[feature].title}
        </div>
        <div className="text-xs text-gray-500">
          {features[feature].subTitle}
        </div>
      </div>
    </div>
  );
}
