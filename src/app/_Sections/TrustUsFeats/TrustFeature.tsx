import { featureType } from "@/types/featureType";
import { Headset, RotateCcw, ShieldCheck, Truck } from "lucide-react";

type Props = {
  feature: featureType;
};

const features = {
  shipping: {
    title: "Free Shipping",
    subTitle: "On orders over 500 EGP",
    icon: <Truck size={28} />,
  },
  payment: {
    title: "Secure Payment",
    subTitle: "100% secure transactions",
    icon: <ShieldCheck size={28} />,
  },
  return: {
    title: "Easy Returns",
    subTitle: "14-day return policy",
    icon: <RotateCcw size={28} />,
  },
  support: {
    title: "24/7 Support",
    subTitle: "Dedicated support team",
    icon: <Headset size={28} />,
  },
};

export default function TrustFeature({ feature }: Props) {
  return (
    <div className="group hover:bg-gray-50 relative flex items-center gap-4 overflow-hidden border border-gray-200 bg-white p-5 transition">
      <div
        className={` text-crimson group-hover:bg-crimson flex h-12 w-12 items-center justify-center rounded-xl transition duration-300 group-hover:text-white`}
      >
        {features[feature].icon}
      </div>
      <div>
        <div className="mb-1 group-hover:text-crimson bg-linear-to-r from-[#111111] via-[#7a0c1c] to-[#ff2a3d] bg-clip-text font-bold text-transparent transition">
          {features[feature].title}
        </div>
        <div className="text-xs text-gray-500">
          {features[feature].subTitle}
        </div>
      </div>
    </div>
  );
}
