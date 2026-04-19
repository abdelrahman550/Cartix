import Link from "next/link";
import { Home, ShoppingCart, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-black via-zinc-950 to-black px-6">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <ShoppingCart size={64} className="text-white/80" />
            <SearchX
              size={28}
              className="absolute -right-2 -bottom-2 text-red-500"
            />
          </div>
        </div>

        <h1 className="mb-3 text-4xl font-bold text-white">
          404 - Page Not Found
        </h1>

        <p className="mb-8 text-white/60">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to shopping on Cartix.
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
          >
            <Home size={18} />
            Go Home
          </Link>

          <Link href={"/"}>
            <button className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-white transition hover:bg-white/20">
              <ArrowLeft size={18} />
              Go Back
            </button>
          </Link>
        </div>

        <p className="mt-8 text-xs text-white/40">
          Cartix • Smart Shopping Experience
        </p>
      </div>
    </div>
  );
}
