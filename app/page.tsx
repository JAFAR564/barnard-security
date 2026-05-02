import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";

const ServicesBento = dynamic(() => import("@/components/services-bento").then((m) => m.ServicesBento));
const About = dynamic(() => import("@/components/about").then((m) => m.About));
const ProjectGallery = dynamic(() => import("@/components/project-gallery").then((m) => m.ProjectGallery));
const WhyBcs = dynamic(() => import("@/components/why-bcs").then((m) => m.WhyBcs));
const Areas = dynamic(() => import("@/components/areas").then((m) => m.Areas));
const Contact = dynamic(() => import("@/components/contact").then((m) => m.Contact));
const StickyCallBar = dynamic(() => import("@/components/sticky-call-bar").then((m) => m.StickyCallBar));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesBento />
        <About />
        <ProjectGallery />
        <WhyBcs />
        <Areas />
        <Contact />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
