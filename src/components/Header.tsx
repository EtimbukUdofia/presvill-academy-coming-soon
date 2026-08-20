import { school } from "../data/school";

export function Header() {
  return (
    <header className="w-full py-6 sm:py-8 border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand & Crest */}
        <div className="flex items-center gap-3.5">
          <img
            src="/logo.png"
            alt={`${school.name} Crest`}
            width={52}
            height={52}
            className="w-12 h-12 sm:w-13 sm:h-13 rounded-full object-contain bg-white/5 p-1 ring-1 ring-white/10 shadow-sm"
          />
          <div className="flex flex-col text-center sm:text-left">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
              {school.name}
            </span>
            <span className="text-xs text-slate-400 font-medium tracking-wide">
              {school.address.city}, {school.address.state} State
            </span>
          </div>
        </div>

        {/* Status Pill Badge */}
        <div
          role="status"
          aria-label="Website status: Under construction, opening soon"
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-slate-900/90 border border-slate-800 text-slate-300 shadow-inner backdrop-blur-sm"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6A00]"></span>
          </span>
          <span className="text-slate-200">
            Website Under Construction <span className="text-slate-500 mx-1">•</span> Opening Soon
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
