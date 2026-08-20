import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AdmissionsCard } from "./components/AdmissionsCard";
import { ContactGrid } from "./components/ContactGrid";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-orange-500 selection:text-white relative overflow-hidden font-sans">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FF6A00] focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* Subtle Brand Orange Ambient Glow Backgrounds */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] sm:w-[950px] h-[450px] bg-gradient-to-b from-[#FF6A00]/12 via-[#FF6A00]/4 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-[35%] -left-36 w-80 h-80 bg-orange-600/5 blur-3xl rounded-full" />
        <div className="absolute top-[65%] -right-36 w-96 h-96 bg-[#FF6A00]/5 blur-3xl rounded-full" />
      </div>

      {/* Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10 flex-1 flex flex-col gap-6 sm:gap-10 lg:gap-12 py-4 sm:py-8">
        <Hero />
        <AdmissionsCard />
        <ContactGrid />
      </main>

      {/* Accessible Footer */}
      <Footer />
    </div>
  );
}
