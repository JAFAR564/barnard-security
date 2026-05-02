import { Phone, Mail, MapPin } from "lucide-react";
import {
  PHONE_NUMBER, PHONE_HREF,
  EMAIL, EMAIL_HREF,
  LOCATION, INSTAGRAM_HREF, FACEBOOK_HREF,
} from "@/lib/constants";

const services = [
  "Machine Automation",
  "Solar Installations",
  "CCTV Installation",
  "Electrical Services",
  "Electrical Panel Building",
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] px-4 py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-[#030509]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,140,222,0.03),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/bcs_logo.jpg" alt="" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.1em] text-white">
                  Barnard Control Systems
                </p>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-accent-blue">
                  George, Western Cape
                </p>
              </div>
            </div>
            <p className="text-sm text-text-tertiary leading-relaxed">
              Powering Your Future with Smart Solutions.
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={FACEBOOK_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-surface-glass text-text-muted transition-colors hover:border-border-hover hover:text-white"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={INSTAGRAM_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-surface-glass text-text-muted transition-colors hover:border-border-hover hover:text-white"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-text-muted">
              Services
            </p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-text-secondary transition-colors hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-text-muted">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-accent-blue" />
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href={EMAIL_HREF} className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-white break-all">
                  <Mail className="h-4 w-4 shrink-0 text-accent-blue" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <MapPin className="h-4 w-4 shrink-0 text-accent-blue" />
                {LOCATION}, South Africa
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 sm:flex-row">
          <p className="text-xs text-text-muted">
            © 2025 Barnard Control Systems · #BarnardControlSystems
          </p>
          <p className="text-xs text-text-muted">George, Western Cape · South Africa</p>
        </div>
      </div>
    </footer>
  );
}
