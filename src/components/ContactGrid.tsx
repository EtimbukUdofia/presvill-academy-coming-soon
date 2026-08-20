import { MessageSquare, Phone, Mail, MapPin, ArrowUpRight, ExternalLink } from "lucide-react";
import { school } from "../data/school";
import { buildWhatsAppUrl, buildTelUrl, buildMailtoUrl } from "../lib/contact";

export function ContactGrid() {
  const inquiryMessage = `Hello ${school.name}, I would like to inquire about school admissions and campus visit bookings.`;
  const whatsAppUrl = buildWhatsAppUrl(school.whatsapp.value, inquiryMessage);
  const emailSubject = `Inquiry regarding ${school.name} Admissions & Enrollment`;

  return (
    <section
      aria-labelledby="contact-heading"
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-4"
    >
      <div className="text-center mb-8 sm:mb-10">
        <h2
          id="contact-heading"
          className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight"
        >
          Direct Contact &amp; Campus Access
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
          Connect directly with our administration and admissions team through any of our verified communication channels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Card 1: WhatsApp Chat */}
        <div className="flex flex-col justify-between rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/40 p-5 sm:p-6 transition-all duration-200 shadow-lg hover:shadow-orange-950/20 backdrop-blur-sm group">
          <div>
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="p-2.5 rounded-xl bg-orange-950/60 border border-orange-500/30 text-[#FF6A00] shrink-0">
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">WhatsApp Chat</h3>
                <span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
                  Admissions Active
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 mb-5 leading-relaxed">
              Instant messaging with our admissions desk for rapid answers, fee inquiries, and prospectus downloads.
            </p>
          </div>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat with Presvill Academy Admissions on WhatsApp at ${school.whatsapp.display} (opens in a new tab)`}
            className="inline-flex items-center justify-between px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 group-hover:border-orange-500/40 text-sm font-semibold text-white hover:bg-orange-600/10 transition-colors"
          >
            <span className="text-slate-200">{school.whatsapp.display}</span>
            <span className="inline-flex items-center gap-1 text-[#FF6A00] text-xs font-semibold shrink-0">
              Chat Now <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </span>
          </a>
        </div>

        {/* Card 2: Phone Calling Lines */}
        <div className="flex flex-col justify-between rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/40 p-5 sm:p-6 transition-all duration-200 shadow-lg hover:shadow-orange-950/20 backdrop-blur-sm group">
          <div>
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="p-2.5 rounded-xl bg-orange-950/60 border border-orange-500/30 text-[#FF6A00] shrink-0">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">Direct Phone Lines</h3>
                <span className="text-xs font-medium text-slate-400 mt-0.5 block">
                  Monday – Friday • 8:00 AM – 4:00 PM
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 mb-5 leading-relaxed">
              Call our official lines to speak directly with our administrative coordinators and head of admissions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <a
              href={buildTelUrl(school.phone.value)}
              aria-label={`Call primary phone line: ${school.phone.display}`}
              className="flex-1 inline-flex items-center justify-between px-3.5 py-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-orange-500/40 text-xs sm:text-sm font-medium text-white hover:bg-orange-600/10 transition-colors"
            >
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Primary</span>
                <span className="text-slate-200 font-medium">{school.phone.display}</span>
              </div>
              <span className="text-[#FF6A00] text-xs font-semibold shrink-0 ml-1">Call</span>
            </a>
            <a
              href={buildTelUrl(school.phoneAlt.value)}
              aria-label={`Call alternate phone line: ${school.phoneAlt.display}`}
              className="flex-1 inline-flex items-center justify-between px-3.5 py-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-orange-500/40 text-xs sm:text-sm font-medium text-white hover:bg-orange-600/10 transition-colors"
            >
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Alternate</span>
                <span className="text-slate-200 font-medium">{school.phoneAlt.display}</span>
              </div>
              <span className="text-[#FF6A00] text-xs font-semibold shrink-0 ml-1">Call</span>
            </a>
          </div>
        </div>

        {/* Card 3: Email Inquiries */}
        <div className="flex flex-col justify-between rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/40 p-5 sm:p-6 transition-all duration-200 shadow-lg hover:shadow-orange-950/20 backdrop-blur-sm group">
          <div>
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="p-2.5 rounded-xl bg-orange-950/60 border border-orange-500/30 text-[#FF6A00] shrink-0">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">Email Inquiry</h3>
                <span className="text-xs font-medium text-slate-400 mt-0.5 block">
                  Official Inquiries &amp; Admissions
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 mb-5 leading-relaxed">
              Send detailed admissions inquiries, transcript requests, or formal inquiries to our admissions office.
            </p>
          </div>
          <a
            href={buildMailtoUrl(school.email.value, emailSubject)}
            aria-label={`Send email to ${school.email.display}`}
            className="inline-flex items-center justify-between px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 group-hover:border-orange-500/40 text-sm font-semibold text-white hover:bg-orange-600/10 transition-colors"
          >
            <span className="text-slate-200 truncate">{school.email.display}</span>
            <span className="inline-flex items-center gap-1 text-[#FF6A00] text-xs font-semibold shrink-0 ml-2">
              Send Email <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </span>
          </a>
        </div>

        {/* Card 4: Campus Location & Google Maps */}
        <div className="flex flex-col justify-between rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/40 p-5 sm:p-6 transition-all duration-200 shadow-lg hover:shadow-orange-950/20 backdrop-blur-sm group">
          <div>
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="p-2.5 rounded-xl bg-orange-950/60 border border-orange-500/30 text-[#FF6A00] shrink-0">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">Campus Location</h3>
                <span className="text-xs font-medium text-slate-400 mt-0.5 block">
                  {school.address.city}, {school.address.state} State
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 mb-5 leading-relaxed">
              {school.address.street}, {school.address.city} {school.address.postalCode}, {school.address.state}, {school.address.country}
            </p>
          </div>
          <a
            href={school.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Presvill Academy campus location on Google Maps (opens in a new tab)"
            className="inline-flex items-center justify-between px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 group-hover:border-orange-500/40 text-sm font-semibold text-white hover:bg-orange-600/10 transition-colors"
          >
            <span className="text-slate-200">Google Maps Directions</span>
            <span className="inline-flex items-center gap-1 text-[#FF6A00] text-xs font-semibold shrink-0">
              View Map <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactGrid;
