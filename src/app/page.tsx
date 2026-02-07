import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesEditorial } from "@/components/sections/ServicesEditorial";
import { Steps } from "@/components/sections/Steps";
import { Lookbook } from "@/components/sections/Lookbook";
import { Testimonials } from "@/components/sections/Testimonials";
import { LocationCTA } from "@/components/sections/LocationCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ServicesEditorial />
        <Steps />
        <Lookbook />
        <Testimonials />
        <LocationCTA />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
