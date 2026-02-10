import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { Pricing } from "@/components/landing/Pricing";
import { Services } from "@/components/landing/Services";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Constrained Content */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-4 md:px-6">
              <Navbar />
              <Hero />
              <Features />
              <HowItWorks />
              <DashboardPreview />
              <Pricing />
              <Testimonials />
              <Services />
            </div>
          </div>
          
          {/* Full-Width CTA */}
          <CTA />
          
          {/* Full-Width Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
