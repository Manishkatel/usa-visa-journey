import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VisaRoadmap from "@/components/VisaRoadmap";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VisaRoadmap />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
