"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Cpu, Sun, Camera, Zap, LayoutGrid, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Machine Automation",
    description:
      "We provide automation solutions to improve efficiency and productivity in industrial and commercial environments — system design, PLC programming, installation, and maintenance.",
    badge: "Industrial",
    badgeVariant: "default" as const,
    gradient: "from-automation-violet/20 via-violet-900/10 to-transparent",
    iconBg: "bg-automation-violet/15 group-hover:bg-automation-violet/25",
    iconColor: "text-automation-violet",
    border: "border-automation-violet/15 hover:border-automation-violet/30",
    glow: "hover:shadow-[0_0_50px_rgba(139,92,246,0.08)]",
    span: "sm:col-span-2 sm:row-span-2",
    large: true,
    image: "/images/automation_plc_panel.jpg",
  },
  {
    icon: Sun,
    title: "Solar Installations",
    description:
      "Complete solar power systems — panels, inverters, and battery backup. Reduce electricity costs and gain energy independence.",
    badge: "Popular",
    badgeVariant: "success" as const,
    gradient: "from-solar-amber/20 via-amber-900/10 to-transparent",
    iconBg: "bg-solar-amber/15 group-hover:bg-solar-amber/25",
    iconColor: "text-solar-amber",
    border: "border-solar-amber/15 hover:border-solar-amber/30",
    glow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.07)]",
    span: "",
    large: false,
    image: "/images/solar_battery_system.jpg",
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    description:
      "Advanced CCTV systems for homes and businesses — reliable surveillance that delivers safety and peace of mind.",
    badge: "Security",
    badgeVariant: "secondary" as const,
    gradient: "from-cctv-emerald/20 via-emerald-900/10 to-transparent",
    iconBg: "bg-cctv-emerald/15 group-hover:bg-cctv-emerald/25",
    iconColor: "text-cctv-emerald",
    border: "border-cctv-emerald/15 hover:border-cctv-emerald/30",
    glow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.07)]",
    span: "",
    large: false,
    image: "/images/cctv_school_exterior.jpg",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description:
      "Installations, maintenance, fault finding, upgrades, and compliance — all work carried out to safety standards.",
    badge: "Residential & Commercial",
    badgeVariant: "outline" as const,
    gradient: "from-electric-blue/20 via-blue-900/10 to-transparent",
    iconBg: "bg-electric-blue/15 group-hover:bg-electric-blue/25",
    iconColor: "text-electric-blue",
    border: "border-electric-blue/15 hover:border-electric-blue/30",
    glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.07)]",
    span: "",
    large: false,
    image: null,
  },
  {
    icon: LayoutGrid,
    title: "Electrical Panel Building",
    description:
      "Custom control panel design and assembly — motor control, drive systems, and industrial switchgear built to spec.",
    badge: "Industrial",
    badgeVariant: "default" as const,
    gradient: "from-panel-slate/20 via-slate-900/10 to-transparent",
    iconBg: "bg-panel-slate/15 group-hover:bg-panel-slate/25",
    iconColor: "text-panel-slate",
    border: "border-panel-slate/15 hover:border-panel-slate/30",
    glow: "hover:shadow-[0_0_40px_rgba(100,116,139,0.07)]",
    span: "",
    large: false,
    image: "/images/automation_hmi_panel.jpg",
  },
];

export function ServicesBento() {
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
    <section id="services" className="relative px-4 py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,140,222,0.04),transparent_60%)]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-blue">
            What We Do
          </p>
          <h2
            className="font-[family-name:var(--font-barlow)] font-extrabold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-accent-blue via-cyan-400 to-sky-100 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary" style={{ fontSize: "var(--text-body)" }}>
            From industrial automation to solar energy and security — end-to-end solutions for
            commercial, industrial, and residential clients across the Western Cape.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 transition-all duration-500 ${svc.gradient} ${svc.border} ${svc.glow} ${svc.span} ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Background image (subtle) */}
                {svc.image && (
                  <>
                    <Image
                      src={svc.image}
                      alt=""
                      aria-hidden="true"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`object-cover opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.12] ${svc.large ? "" : "object-center"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07070D]/90 via-[#07070D]/60 to-transparent" />
                  </>
                )}

                <div className="relative z-10">
                  <div className="mb-4 flex items-start justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${svc.iconBg}`}>
                      <Icon className={`h-6 w-6 ${svc.iconColor}`} />
                    </div>
                    <Badge variant={svc.badgeVariant}>{svc.badge}</Badge>
                  </div>

                  <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold tracking-tight text-white">
                    {svc.title}
                  </h3>
                  <p className={`mt-2 text-text-secondary ${svc.large ? "text-base" : "text-sm"}`}>
                    {svc.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-text-tertiary transition-colors group-hover:text-accent-blue">
                    Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
