import { featureType } from "@/types/featureType";
import { Headset, RotateCcw, ShieldCheck, Truck } from "lucide-react";

type Props = {
  feature: featureType;
};

const features = {
  shipping: {
    title: "Free Shipping",
    subTitle: "On orders over 500 EGP",
    icon: <Truck size={24} />,
    lastFeature: false,
  },
  payment: {
    title: "Secure Payment",
    subTitle: "100% secure transactions",
    icon: <ShieldCheck size={24} />,
    lastFeature: false,
  },
  return: {
    title: "Easy Returns",
    subTitle: "14-day return policy",
    icon: <RotateCcw size={24} />,
    lastFeature: false,
  },
  support: {
    title: "24/7 Support",
    subTitle: "Dedicated support team",
    icon: <Headset size={24} />,
    lastFeature: true,
  },
};

export default function EndingTrustFeatures({ feature }: Props) {
  return (
    <div
      className={`relative flex items-center gap-3 overflow-hidden bg-transparent p-6`}
    >
      <div
        className={`text-crimson-dark flex h-10 w-10 items-center justify-center rounded-md bg-black`}
      >
        {features[feature].icon}
      </div>
      <div>
        <div className="text-crimson-dark mb-0.5 text-sm font-bold transition">
          {features[feature].title}
        </div>
        <div className="text-xs text-gray-300">
          {features[feature].subTitle}
        </div>
      </div>
      <span className="bg-crimson absolute right-full bottom-0 h-1 w-full"></span>
    </div>
  );
}
