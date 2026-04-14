import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SolutionsSection from "@/components/SolutionsSection";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import CTAFooter from "@/components/CTAFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#101915] antialiased">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <SolutionsSection />
        <Team />
        <Industries />
        <FAQ />
        <CTAFooter />
      </main>
    </div>
  );
}
