"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    src: "/images/automation_plc_panel.jpg",
    title: "PLC Control Panel",
    category: "Machine Automation",
    accent: "text-automation-violet",
    border: "group-hover:border-automation-violet/40",
  },
  {
    src: "/images/automation_hmi_panel.jpg",
    title: "HMI Panel Build",
    category: "Panel Building",
    accent: "text-panel-slate",
    border: "group-hover:border-panel-slate/40",
  },
  {
    src: "/images/solar_battery_system.jpg",
    title: "Battery Backup System",
    category: "Solar Installation",
    accent: "text-solar-amber",
    border: "group-hover:border-solar-amber/40",
  },
  {
    src: "/images/solar_array.jpg",
    title: "Commercial Solar Array",
    category: "Solar Installation",
    accent: "text-solar-amber",
    border: "group-hover:border-solar-amber/40",
  },
  {
    src: "/images/cctv_school_exterior.jpg",
    title: "School Security — Exterior",
    category: "CCTV Installation",
    accent: "text-cctv-emerald",
    border: "group-hover:border-cctv-emerald/40",
  },
  {
    src: "/images/cctv_estate_perimeter.jpg",
    title: "Estate Perimeter CCTV",
    category: "CCTV Installation",
    accent: "text-cctv-emerald",
    border: "group-hover:border-cctv-emerald/40",
  },
];

export function ProjectGallery() {
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
    <section id="work" className="relative px-4 py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-blue">
            Recent Projects
          </p>
          <h2
            className="font-[family-name:var(--font-barlow)] font-extrabold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-accent-blue via-cyan-400 to-sky-100 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary" style={{ fontSize: "var(--text-body)" }}>
            Every project completed to the highest standard — from commercial solar arrays to
            school security systems.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.src}
              className={`group relative overflow-hidden rounded-2xl border border-border-subtle transition-all duration-500 ${project.border} ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070D]/90 via-[#07070D]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className={`text-xs font-bold uppercase tracking-wider ${project.accent}`}>
                  {project.category}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
