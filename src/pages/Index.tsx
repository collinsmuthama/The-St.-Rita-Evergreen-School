import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImpactStats from "@/components/ImpactStats";
import PartnerCards from "@/components/PartnerCards";
import TestimonialsSection from "@/components/TestimonialsSection";
import YouTubeSection from "@/components/YouTubeSection";
import CurriculumSection from "@/components/CurriculumSection";
import PartnersSection from "@/components/PartnersSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import DirectorMessage from "@/components/DirectorMessage";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ImpactStats />
    <CurriculumSection />
    <PartnerCards />
    <YouTubeSection />
    <TestimonialsSection />
    <PartnersSection />
    <AdmissionsSection />
    <DirectorMessage />
    <Footer />
  </div>
);

export default Index;
