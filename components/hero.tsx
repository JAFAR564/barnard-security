import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { PHONE_HREF, PHONE_NUMBER, WHATSAPP_HREF, EMAIL_HREF } from "@/lib/constants";

const pillars = [
  { label: "Speciality", value: "Machine Automation" },
  { label: "Coverage", value: "All of Western Cape" },
  { label: "Markets", value: "Industrial · Commercial" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100vh] items-center overflow-hidden px-4 pb-32 pt-24">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero_bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-[#07070D]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07070D]/95 via-[#07070D]/70 to-[#07070D]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07070D] via-[#07070D]/30 to-transparent" />

      {/* Blue radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,140,222,0.10),transparent_55%)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.2) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          {/* Live badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-blue/25 bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent-blue">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-blue" />
            </span>
            George, Western Cape
          </div>

          {/* Headline */}
          <h1
            className="font-[family-name:var(--font-barlow)] font-extrabold leading-[1.0] tracking-tight text-white animate-fade-up"
            style={{ fontSize: "var(--text-display)" }}
          >
            Powering
            <br />
            Your{" "}
            <span className="bg-gradient-to-r from-accent-blue via-cyan-300 to-sky-100 bg-clip-text text-transparent">
              Future
            </span>
            <br />
            With Smart
            <br />
            Solutions
          </h1>

          {/* Pillars */}
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up stagger-2">
            {pillars.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-sm"
              >
                <div className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-text-tertiary">
                  {label}
                </div>
                <div className="mt-0.5 text-sm font-semibold text-white">{value}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up stagger-3">
            <Button size="lg" className="animate-glow-pulse" asChild>
              <a href={EMAIL_HREF}>Request a Quote</a>
            </Button>

            <Button variant="whatsapp" size="lg" asChild>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.514 5.84L.057 23.804l6.105-1.601A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.369l-.359-.213-3.723.976.994-3.631-.234-.374A9.818 9.818 0 1112 21.818z" />
                </svg>
                WhatsApp Adriaan
              </a>
            </Button>

            <Button variant="ghost" size="lg" asChild>
              <a href={PHONE_HREF} className="gap-2">
                <Phone className="h-4 w-4" />
                {PHONE_NUMBER}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
