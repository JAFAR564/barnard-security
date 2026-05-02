import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ServicesBento } from "@/components/services-bento";
import { About } from "@/components/about";
import { ProjectGallery } from "@/components/project-gallery";
import { WhyBcs } from "@/components/why-bcs";
import { Areas } from "@/components/areas";
import { Contact } from "@/components/contact";
import { StickyCallBar } from "@/components/sticky-call-bar";
import { Footer } from "@/components/footer";

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
