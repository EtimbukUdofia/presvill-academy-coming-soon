import { GraduationCap, Sparkles } from "lucide-react";
import { school } from "../data/school";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="text-center py-8 sm:py-14 lg:py-18 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center"
    >
      {/* Institutional Announcement Tag */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-orange-400 bg-orange-950/40 border border-orange-500/25 mb-6 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" aria-hidden="true" />
        <span>Official Announcement</span>
      </div>

      {/* Primary Headline */}
      <h1
        id="hero-heading"
        className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-display"
      >
        Excellence in Education.{" "}
        <span className="block sm:inline bg-gradient-to-r from-orange-400 via-[#FF6A00] to-amber-400 bg-clip-text text-transparent">
          Shaping Tomorrow's Leaders.
        </span>
      </h1>

      {/* Welcoming Narrative */}
      <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
        {`${school.name} is currently preparing our comprehensive digital home. In the meantime, our campus is open and our admissions team is ready to assist you.`}
      </p>

      {/* Academic Tiers Badge Row */}
      <div className="mt-8 sm:mt-10 w-full">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3.5">
          Academic Levels Offered
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {school.academicLevels.map((level) => (
            <div
              key={level}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors shadow-sm"
            >
              <GraduationCap className="w-4 h-4 text-[#FF6A00] shrink-0" aria-hidden="true" />
              <span>{level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
