import { CircleAlert, CirclePlus, Dot, Heart, Star, Truck } from "lucide-react";
import DownloadAppButton from "./DownloadAppButton";
import { fraunces } from "@/Fonts";
import { SubscriptionInput } from "./SubscriptionInput";

export default function SubscribeSec() {
  const fiveStars = Array(5)
    .fill(0)
    .map((_, i) => <Star key={i} size={10} fill="currentColor" />);
  return (
    <>
      <div className="bg-white p-16">
        <div className="bg-[linear-gradient(135deg,#0F0810_0%,#1a0008_40%,#C8102E_100%)] relative z-10 overflow-hidden p-16 rounded-3xl shadow-white/50 shadow-xs">
        <div className="bg-crimson-soft/8 absolute -top-28 -left-28 z-20 h-90 w-90 rounded-full"></div>
        <div className="bg-crimson-soft/5 absolute -right-24 -bottom-24 z-20 h-90 w-90 rounded-full"></div>
        <div className="flex h-full justify-between flex-col lg:flex-row gap-8">
          <div className="z-30 flex basis-2/3 items-center">
            <div>
              <div className="relative mb-3.5 flex items-center ps-6">
                <span className="absolute top-1/2 left-0 h-0.5 w-4 -translate-y-1/2 bg-white/50"></span>
                <span className="text-xs font-bold tracking-widest text-white/50 uppercase">
                  Stay in the Loop
                </span>
              </div>
              <h2
                className={
                  fraunces.className + " mb-3 text-4xl font-bold text-white/90"
                }
              >
                Get Exclusive Deals{" "}
                <span className="text-white/75 italic">Delivered First</span>
              </h2>
              <p className="mb-7 max-w-120 text-sm text-white/60">
                Subscribe and be the first to know about flash sales, new
                arrivals, and members-only offers — straight to your inbox.
              </p>
              <div className="flex items-center gap-2 mb-7 flex-wrap">
                <div className="sub-benefit">
                  <span>
                    <CirclePlus size={12} strokeWidth={3} />
                  </span>
                  <span>Fresh Picks Weekly</span>
                </div>

                <div className="sub-benefit">
                  <span>
                    <Truck size={13} strokeWidth={3} />
                  </span>
                  <span>Free Delivery Codes</span>
                </div>

                <div className="sub-benefit">
                  <span>
                    <Heart size={13} strokeWidth={3} />
                  </span>
                  <span>Members-Only Deals</span>
                </div>
              </div>
              <SubscriptionInput />
              <div className="flex items-center text-xs text-white/40 gap-1">
                <span><CircleAlert size={12} /></span>
                <span>Unsubscribe anytime. No spam, ever.</span>
              </div>
            </div>
          </div>
          <div className="z-30 basis-1/3">
            <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-black px-8 py-9">
              <div className="mb-4 flex w-fit items-center justify-center rounded-full border border-red-700/50 bg-red-700/15 px-3 py-1 text-[10px] font-bold tracking-widest text-red-700">
                <span className="animate-pulse">
                  <Dot size={12} strokeWidth={10} />
                </span>
                <span className="uppercase">mobile app</span>
              </div>
              <div className="mb-2 text-xl font-extrabold text-white">
                <div>Shop Faster</div>
                <div>on Our App</div>
              </div>
              <p className="mb-6 text-xs text-gray-400">
                Get app-exclusive deals & 15% off your first order.
              </p>
              <div className="mb-5 flex flex-col gap-2">
                <DownloadAppButton downloadPlatform={"apple"} />
                <DownloadAppButton downloadPlatform={"google"} />
              </div>
              <div className="border-t border-gray-800 pt-4">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5 text-yellow-400">
                    {fiveStars}
                  </div>
                  <span className="text-xs font-bold text-gray-500">4.9</span>
                  <span className="text-gray-600">
                    <Dot size={10} strokeWidth={8} />
                  </span>
                  <span className="text-xs font-bold text-gray-600">
                    100K+ downloads
                  </span>
                </div>
              </div>
              <div className="bg-crimson-dark/40 absolute -top-12 -right-12 h-52 w-52 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
