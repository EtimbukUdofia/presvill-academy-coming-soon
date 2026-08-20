import { school } from "../data/school";

export function Footer() {
  const fullAddress = `${school.address.street}, ${school.address.city} ${school.address.postalCode}, ${school.address.state} State, ${school.address.country}`;

  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950/90 py-10 sm:py-14 mt-12 relative z-10 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* School Brand & Location */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <img
              src="/logo.png"
              alt={`${school.name} Crest`}
              width={48}
              height={48}
              className="w-11 h-11 rounded-full object-contain bg-white/5 p-1 ring-1 ring-white/10"
            />
            <div>
              <span className="font-display text-lg font-bold text-white block">
                {school.name}
              </span>
              <span className="text-xs text-slate-400">
                {fullAddress}
              </span>
            </div>
          </div>

          {/* Institutional Note */}
          <p className="text-xs text-slate-400 text-center md:text-right max-w-md leading-relaxed">
            Co-educational institution offering Creche, Pre-School, Grade School, and High School education in Uyo, Akwa Ibom State.
          </p>
        </div>

        {/* Bottom Legal & Status Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <p>
            &copy; 2026 {school.name}. All rights reserved.
          </p>
          <p className="text-slate-400">
            Official Coming Soon Portal &bull; Designed for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
