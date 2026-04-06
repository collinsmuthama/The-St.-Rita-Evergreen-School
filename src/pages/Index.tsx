import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImpactStats from "@/components/ImpactStats";
import PartnerCards from "@/components/PartnerCards";
import TestimonialsSection from "@/components/TestimonialsSection";
import YouTubeSection from "@/components/YouTubeSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ImpactStats />
    <PartnerCards />
    <YouTubeSection />
    <TestimonialsSection />
    <Footer />
  </div>
);

export default Index;
