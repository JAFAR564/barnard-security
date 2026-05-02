"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { PHONE_HREF, PHONE_NUMBER, WHATSAPP_HREF } from "@/lib/constants";

export function StickyCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-white/[0.06] bg-[#07070D]/95 backdrop-blur-xl px-4 py-3 transition-all duration-500 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      style={{ transitionTimingFunction: "var(--ease-smooth)" }}
    >
      <div className="flex items-center justify-center gap-3">
        <a
          href={PHONE_HREF}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent-blue py-3 text-sm font-bold text-white transition-colors hover:bg-accent-blue-hover active:translate-y-[1px]"
        >
          <Phone className="h-4 w-4" />
          {PHONE_NUMBER}
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white transition-colors hover:bg-[#22c55e] active:translate-y-[1px]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.514 5.84L.057 23.804l6.105-1.601A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.369l-.359-.213-3.723.976.994-3.631-.234-.374A9.818 9.818 0 1112 21.818z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
