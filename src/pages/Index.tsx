import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProgramsSection from "@/components/ProgramsSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import TrialPopup from "@/components/TrialPopup";

const Index = () => {
  const [isTrialPopupOpen, setIsTrialPopupOpen] = useState(false);

  const handleStartTrial = () => {
    setIsTrialPopupOpen(true);
  };

  const handleCloseTrialPopup = () => {
    setIsTrialPopupOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onStartTrial={handleStartTrial} />
      
      <main>
        <HeroSection onStartTrial={handleStartTrial} />
        <FeaturesSection />
        <ProgramsSection />
        <ComparisonSection />
        <PricingSection onStartTrial={handleStartTrial} />
        <TestimonialsSection />
        <FAQSection />
      </main>
      
      <Footer onStartTrial={handleStartTrial} />
      
      <TrialPopup 
        isOpen={isTrialPopupOpen} 
        onClose={handleCloseTrialPopup} 
      />
    </div>
  );
};

export default Index;