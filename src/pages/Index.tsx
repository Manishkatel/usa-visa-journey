import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VisaRoadmapTabs from "@/components/VisaRoadmapTabs";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VisaRoadmapTabs />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
