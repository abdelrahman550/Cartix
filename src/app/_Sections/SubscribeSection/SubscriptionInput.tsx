import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function SubscriptionInput() {
  return (
    <div className="flex items-center flex-col sm:flex-row gap-3 mb-3">
      <Input
        className="focus-visible:ring-white/20 focus-visible:border-white/60 h-12 max-w-96 border border-white/30 bg-white/15 px-4.5 text-white placeholder:text-white/50 focus:outline-none focus-visible:bg-white/20"
        placeholder="Enter your email address…"
        type="email"
      />
      <Button className="h-12 text-black bg-white cursor-pointer flex items-center gap-1 w-full sm:w-fit text-sm font-bold px-6 transition hover:bg-white/85 hover:-translate-y-0.5 crimson-shadow-hover group">
        <span>Subscribe</span>
        <span className="transition group-hover:translate-x-1"><ArrowRight strokeWidth={3} /></span>
      </Button>
    </div>
  );
}
