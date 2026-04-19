import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import OurEndingFeatures from "../_Sections/EndingFeats/OurEndingFeatures";
import { fraunces } from "@/Fonts";
export default async function Footer() {
  return (
    <>
      <OurEndingFeatures />
      <footer className="relative overflow-hidden bg-linear-to-r from-black via-[#1a0a0d] to-[#2a0f14] font-sans">
        <div className="grid grid-cols-1 gap-12 px-6 pt-8 pb-10 md:grid-cols-2 lg:grid-cols-5 lg:px-6">
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div
                className={`${fraunces.className} relative text-white h-full text-4xl font-bold tracking-[-2px]`}
              >
                Cart<span className="text-crimson">ix</span>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-white/30">
              Premium shopping experience delivered to your doorstep. Everything
              you need, one click away.
            </p>

            <div className="flex gap-2">
              {[
                <FaFacebook size={16} key={1} />,
                <BsTwitter size={16} key={1} />,
                <BsInstagram size={16} key={3} />,
              ].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/30 transition-all hover:border-[#C8102E] hover:bg-[#C8102E] hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Shopping",
              links: [
                "Best Sellers",
                "New Arrivals",
                "Flash Deals",
                "Bulk Orders",
              ],
            },
            {
              title: "Support",
              links: [
                "Help Center",
                "Track Order",
                "Returns",
                "Shipping Policy",
              ],
            },
            {
              title: "Company",
              links: ["About Us", "Sustainability", "Careers", "Press Kit"],
            },
          ].map((col, idx) => (
            <div key={idx} className="space-y-5">
              <h4 className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-white/50 uppercase">
                <span className="h-3.5 w-0.75 rounded-full bg-[#C8102E]" />
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/30 transition-colors hover:text-[#C8102E]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 px-6 py-6 sm:flex-row lg:px-20">
          <p className="text-[11px] text-white/20">
            &copy; 2026 Cartix Global. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[11px] text-white/20 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[11px] text-white/20 transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
