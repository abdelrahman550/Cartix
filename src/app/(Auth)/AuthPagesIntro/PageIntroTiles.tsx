import { ShieldCheck, Truck } from "lucide-react";

const dashTile = [
  {
    key: "payment",
    title: "100% Secure Payments",
    subTitle: "SSL Encrypted · Visa, Mastercard, PayPal",
    icon: <ShieldCheck size={20} />,
  },
  {
    key: "delivery",
    title: "Free Shipping Over 500 EGP",
    subTitle: "Worldwide Delivery · Express Options",
    icon: <Truck size={20} />,
  },
];

export default function PageIntroTiles() {
  return (
    <div className="mt-5 grid grid-cols-1 gap-3">
      {dashTile.map((item) => (
        <div key={item.key} className="hover:border-crimson group hover:shadow-crimson flex items-center gap-4 overflow-hidden rounded-2xl border border-black/5 bg-white/80 backdrop-blur-sm px-3.5 py-3 transition duration-200 hover:-translate-y-px hover:shadow-sm">
        <div className="bg-crimson-soft border-crimson-border text-crimson group-hover:bg-crimson flex h-8 w-8 items-center justify-center rounded-lg border transition duration-300 group-hover:scale-105 group-hover:text-white">
          {item.icon}
        </div>
        <div>
          <div className="group-hover:text-crimson mb-1 text-sm font-semibold text-black/75 transition">
            {item.title}
          </div>
          <div className="text-xs text-gray-500">
            {item.subTitle}
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}
