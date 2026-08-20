import { CalendarCheck, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import { school } from "../data/school";
import { buildWhatsAppUrl } from "../lib/contact";

export function AdmissionsCard() {
  const inquiryMessage = `Hello ${school.name}, I would like to make an inquiry regarding admissions for the ${school.session} academic session.`;
  const whatsAppUrl = buildWhatsAppUrl(school.whatsapp.value, inquiryMessage);

  return (
    <section
      aria-labelledby="admissions-heading"
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-4"
    >
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950 border border-orange-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-orange-950/20 backdrop-blur-xl">
        {/* Subtle orange ambient glow */}
        <div
          className="absolute -top-24 -right-24 w-80 h-80 bg-[#FF6A00]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Session Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-950/60 border border-orange-500/30 mb-4 shadow-sm">
            <CalendarCheck className="w-3.5 h-3.5 text-[#FF6A00]" aria-hidden="true" />
            <span>{`${school.session} Academic Session`}</span>
          </div>

          {/* Heading */}
          <h2
            id="admissions-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display tracking-tight"
          >
            Admissions & Enrollment Inquiries Are Open
          </h2>

          {/* Subtitle / Advisory */}
          <p className="mt-3.5 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed">
            We are actively admitting prospective students across all tiers: Creche,
            Pre-School, Grade School, and High School. Connect directly with our
            admissions team on WhatsApp for enrollment guidance, fee structures, and campus visit bookings.
          </p>

          {/* Key Enrollment Highlights */}
          <div className="mt-6 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl text-left text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2.5 bg-slate-950/60 rounded-xl p-3 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" aria-hidden="true" />
              <span>Prompt admissions assistance</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-950/60 rounded-xl p-3 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" aria-hidden="true" />
              <span>Personalized campus tours</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-950/60 rounded-xl p-3 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" aria-hidden="true" />
              <span>All academic levels open</span>
            </div>
          </div>

          {/* Primary WhatsApp CTA Button */}
          <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-semibold text-base text-white bg-gradient-to-r from-[#FF6A00] to-orange-600 hover:from-[#E55F00] hover:to-orange-700 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-orange-950/50 hover:shadow-orange-900/60 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>{`Inquire on WhatsApp (${school.whatsapp.display})`}</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>

            <span className="text-xs text-slate-400 font-medium">
              Direct chat with our Admissions Desk • Typically replies within minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdmissionsCard;
