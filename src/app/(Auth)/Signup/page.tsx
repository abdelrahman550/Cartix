import PageIntro from "../AuthPagesIntro/PageIntro";
import SignupCard from "./SignupCard";

export default function page() {
  return (
    <div className="from-crimson-soft/50 via-crimson-soft/40 relative flex items-center justify-center overflow-hidden bg-linear-to-br to-slate-50">
      <div className="pointer-events-none absolute right-[-10%] bottom-[-20%] h-100 w-100 rounded-full bg-[#ff375c]/10 blur-[140px]" />

      <div className="relative z-10 flex w-full basis-300 flex-col items-center xl:items-start justify-between gap-6 px-6 py-15 xl:flex-row">
        
        <PageIntro />

        <SignupCard />
      </div>
    </div>
  );
}
