"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

const stats = [
  { value: "4+", label: "Service Areas" },
  { value: "WC", label: "Wide Coverage" },
  { value: "100%", label: "Reliable" },
];

const values = [
  "Professional and reliable service",
  "Quality workmanship and attention to detail",
  "Cost-effective solutions",
  "Experienced and skilled team",
  "Customer-focused approach",
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative px-4 py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,84,142,0.08),transparent_55%)]" />
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left — copy */}
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-blue">
              Who We Are
            </p>
            <h2
              className="font-[family-name:var(--font-barlow)] font-extrabold leading-[1.1] tracking-tight text-white"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Smart Solutions.
              <br />
              <span className="bg-gradient-to-r from-accent-blue via-cyan-400 to-sky-100 bg-clip-text text-transparent">
                Trusted Service.
              </span>
            </h2>
            <p className="mt-5 text-text-secondary" style={{ fontSize: "var(--text-body)" }}>
              Barnard Control Systems is committed to delivering reliable, cost-effective, and
              high-quality services to both residential and commercial clients. Our focus is on
              innovation, efficiency, and customer satisfaction — every project completed to the
              highest standard.
            </p>

            {/* Values list */}
            <ul className="mt-8 space-y-3">
              {values.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent-blue" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — stats */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border-default bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 text-center backdrop-blur-sm hover:border-border-hover transition-colors duration-300"
                >
                  <div
                    className="font-[family-name:var(--font-barlow)] font-extrabold leading-none tracking-tight bg-gradient-to-br from-white via-white/90 to-accent-blue/70 bg-clip-text text-transparent"
                    style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
                  >
                    {value}
                  </div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-text-tertiary">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Mission quote */}
            <div className="mt-6 rounded-2xl border border-accent-blue/20 bg-accent-blue/5 p-6">
              <p className="text-sm italic text-text-secondary leading-relaxed">
                &ldquo;To provide high-quality, reliable, and innovative electrical and automation
                solutions that meet the needs of our clients while maintaining excellent service
                and workmanship.&rdquo;
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-accent-blue">
                — Our Mission
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
