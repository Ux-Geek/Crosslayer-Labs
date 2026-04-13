import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import WhyUs from "@/components/WhyUs";
import Solutions from "@/components/Solutions";
import Team from "@/components/Team";
import Industries from "@/components/Industries";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#101915] antialiased">
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <WhyUs />
        <Solutions />
        <Team />
        <Industries />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
