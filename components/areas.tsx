"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

const areaList = [
  "George",
  "Mossel Bay",
  "Knysna",
  "Plettenberg Bay",
  "Klein Brak River",
  "Groot Brak River",
  "Garden Route",
  "Stellenbosch",
  "Western Cape",
];

export function Areas() {
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
    <section id="areas" className="relative px-4 py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          {/* Left */}
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-blue">
              Where We Work
            </p>
            <h2
              className="font-[family-name:var(--font-barlow)] font-extrabold leading-[1.1] tracking-tight text-white"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Serving the Whole
              <br />
              of{" "}
              <span className="bg-gradient-to-r from-accent-blue via-cyan-400 to-sky-100 bg-clip-text text-transparent">
                Western Cape
              </span>
            </h2>
            <p className="mt-5 max-w-md text-text-secondary" style={{ fontSize: "var(--text-body)" }}>
              Based in George, we travel across the Western Cape to deliver our services wherever
              they&apos;re needed — from the Garden Route to Stellenbosch and beyond.
            </p>

            {/* Area chips */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {areaList.map((area, i) => (
                <div
                  key={area}
                  className={`flex items-center gap-1.5 rounded-full border border-border-default bg-surface-glass px-3.5 py-1.5 text-sm text-text-secondary backdrop-blur-sm transition-all duration-500 hover:border-border-hover hover:text-white ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${200 + i * 60}ms` }}
                >
                  <MapPin className="h-3 w-3 text-accent-blue" />
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual block */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative rounded-3xl border border-border-default bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10 text-center backdrop-blur-sm overflow-hidden">
              {/* Radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,140,222,0.06),transparent_70%)]" />
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
                  Service Region
                </p>
                <p
                  className="mt-4 font-[family-name:var(--font-barlow)] font-extrabold leading-none tracking-tight text-white"
                  style={{ fontSize: "clamp(3rem,8vw,6rem)" }}
                >
                  Western
                  <br />
                  Cape
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-text-secondary">
                  South Africa
                </p>
                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />
                <p className="mt-5 text-sm text-text-tertiary">
                  📞 Available for on-site assessments across the region
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
