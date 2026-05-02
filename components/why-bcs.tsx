"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Wrench, Lightbulb, Settings, Handshake } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    iconBg: "bg-electric-blue/15",
    iconColor: "text-electric-blue",
    title: "Professional & Reliable",
    desc: "Every job completed on time, to standard, with full accountability from start to finish.",
  },
  {
    icon: Wrench,
    iconBg: "bg-solar-amber/15",
    iconColor: "text-solar-amber",
    title: "Quality Workmanship",
    desc: "Attention to detail and precision craftsmanship on every installation — industrial or residential.",
  },
  {
    icon: Lightbulb,
    iconBg: "bg-cctv-emerald/15",
    iconColor: "text-cctv-emerald",
    title: "Cost-Effective Solutions",
    desc: "Smart engineering that delivers maximum performance within your budget.",
  },
  {
    icon: Settings,
    iconBg: "bg-automation-violet/15",
    iconColor: "text-automation-violet",
    title: "Skilled & Experienced",
    desc: "Deep technical expertise across automation, solar, electrical, and security systems.",
  },
  {
    icon: Handshake,
    iconBg: "bg-accent-blue/15",
    iconColor: "text-accent-blue",
    title: "Customer-Focused",
    desc: "We build long-term relationships. Your operations matter to us beyond the installation.",
  },
];

export function WhyBcs() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" className="relative px-4 py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,84,142,0.07),transparent_55%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/25 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-blue">
            Why Choose Us
          </p>
          <h2
            className="font-[family-name:var(--font-barlow)] font-extrabold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "var(--text-h2)" }}
          >
            The{" "}
            <span className="bg-gradient-to-r from-accent-blue via-cyan-400 to-sky-100 bg-clip-text text-transparent">
              BCS Difference
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reasons.map(({ icon: Icon, iconBg, iconColor, title, desc }, i) => (
            <div
              key={title}
              className={`group rounded-2xl border border-border-default bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 transition-all duration-500 hover:border-border-hover hover:from-white/[0.07] hover:to-white/[0.03] hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)] ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${iconBg}`}>
                <Icon className={`h-6 w-6 ${iconColor}`} />
              </div>
              <h3 className="font-[family-name:var(--font-barlow)] text-base font-bold tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
