import { Button } from "@/components/ui/button";
import { PHONE_HREF, PHONE_NUMBER, EMAIL_HREF } from "@/lib/constants";
import { Phone, Mail } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.05] bg-[#07070D]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/bcs_logo.jpg"
              alt="Barnard Control Systems Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.1em] text-white">
              Barnard Control Systems
            </span>
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-accent-blue">
              Power · Security · Automation
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex list-none">
          {[
            { label: "Services", href: "#services" },
            { label: "About", href: "#about" },
            { label: "Our Work", href: "#work" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-medium uppercase tracking-wider text-text-secondary transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-white sm:flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {PHONE_NUMBER}
          </a>
          <Button size="sm" asChild>
            <a href={EMAIL_HREF}>
              <Mail className="h-3.5 w-3.5" />
              Request a Quote
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
