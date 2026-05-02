"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import {
  PHONE_HREF, PHONE_NUMBER, WHATSAPP_HREF,
  EMAIL_HREF, EMAIL, LOCATION,
} from "@/lib/constants";

const contactCards = [
  {
    icon: Phone,
    label: "Call or WhatsApp",
    value: PHONE_NUMBER,
    href: PHONE_HREF,
    iconBg: "bg-accent-blue/15",
    iconColor: "text-accent-blue",
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: EMAIL_HREF,
    iconBg: "bg-cctv-emerald/15",
    iconColor: "text-cctv-emerald",
  },
  {
    icon: MapPin,
    label: "Location",
    value: LOCATION,
    href: null,
    iconBg: "bg-solar-amber/15",
    iconColor: "text-solar-amber",
  },
  {
    icon: Globe,
    label: "Service Area",
    value: "All of Western Cape",
    href: null,
    iconBg: "bg-automation-violet/15",
    iconColor: "text-automation-violet",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0A0E1A] to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,140,222,0.06),transparent_55%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — headline + form */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-blue">
              Get In Touch
            </p>
            <h2
              className="font-[family-name:var(--font-barlow)] font-extrabold leading-[1.1] tracking-tight text-white"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Ready to{" "}
              <span className="bg-gradient-to-r from-accent-blue via-cyan-400 to-sky-100 bg-clip-text text-transparent">
                Power
              </span>{" "}
              Your
              <br />
              Project?
            </h2>
            <p className="mt-4 max-w-sm text-text-secondary" style={{ fontSize: "var(--text-body)" }}>
              Get in touch today for a professional assessment and quote.
            </p>

            {/* Quick CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="whatsapp" size="lg" asChild>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.514 5.84L.057 23.804l6.105-1.601A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.369l-.359-.213-3.723.976.994-3.631-.234-.374A9.818 9.818 0 1112 21.818z" />
                  </svg>
                  WhatsApp Adriaan
                </a>
              </Button>
              <Button size="lg" asChild>
                <a href={EMAIL_HREF}>
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href={PHONE_HREF}>
                  <Phone className="h-4 w-4" />
                  {PHONE_NUMBER}
                </a>
              </Button>
            </div>

            {/* Form */}
            <form className="mt-10 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-border-default bg-surface-glass px-4 py-3 text-sm text-white placeholder-text-muted backdrop-blur-sm outline-none transition-colors focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-border-default bg-surface-glass px-4 py-3 text-sm text-white placeholder-text-muted backdrop-blur-sm outline-none transition-colors focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  required
                  className="w-full rounded-xl border border-border-default bg-surface-glass px-4 py-3 text-sm text-white placeholder-text-muted backdrop-blur-sm outline-none transition-colors focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 resize-none"
                />
              </div>
              <Button size="lg" className="w-full animate-glow-pulse" type="submit">
                Request Quote
              </Button>
            </form>
          </div>

          {/* Right — contact cards */}
          <div className="flex flex-col gap-4 lg:pt-24">
            {contactCards.map(({ icon: Icon, label, value, href, iconBg, iconColor }) => (
              <div
                key={label}
                className="group flex items-center gap-5 rounded-2xl border border-border-default bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-5 transition-all duration-300 hover:border-border-hover hover:from-white/[0.07]"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${iconBg}`}>
                  <Icon className={`h-5 w-5 ${iconColor}`} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-0.5 text-sm font-semibold text-white transition-colors hover:text-accent-blue"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm font-semibold text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
