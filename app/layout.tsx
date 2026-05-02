import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Barnard Control Systems — Solar, Electrical, CCTV & Automation | George, Western Cape",
  description:
    "Professional solar installations, electrical services, CCTV systems, and machine automation in George, Western Cape. Electrical panel building, motor control & drive systems. Reliable, cost-effective solutions. Call 079 503 5984.",
  keywords: [
    "electrician George",
    "solar installation George",
    "CCTV installation Western Cape",
    "machine automation George",
    "electrical panel building",
    "control panel design",
    "motor control systems",
    "solar panels George Western Cape",
    "electrical fault finding George",
    "Barnard Control Systems",
  ],
  openGraph: {
    title: "Barnard Control Systems — Power. Security. Automation.",
    description:
      "Professional solar, electrical, CCTV, and automation solutions in George, Western Cape. Residential & commercial. Call 079 503 5984.",
    type: "website",
    locale: "en_ZA",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Barnard Control Systems",
  description:
    "Professional electrical, solar, CCTV, and automation solutions in George, Western Cape. Control panel design, electrical panel building, motor control & drive systems.",
  telephone: "+27795035984",
  email: "Barnardcontrolsystems@gmail.com",
  areaServed: [
    { "@type": "City", name: "George" },
    { "@type": "City", name: "Mossel Bay" },
    { "@type": "City", name: "Knysna" },
    { "@type": "City", name: "Plettenberg Bay" },
    { "@type": "City", name: "Stellenbosch" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "George",
    addressRegion: "Western Cape",
    addressCountry: "ZA",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "18:00",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${barlow.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
