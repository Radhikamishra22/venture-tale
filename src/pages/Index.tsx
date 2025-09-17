import ModernHeader from '../components/ModernHeader';
import HeroSection from '../components/journey/HeroSection';
import CarouselTimelineSection from '../components/journey/CarouselTimelineSection';
import InteractiveSection from '../components/journey/InteractiveSection';
import StatsSection from '../components/journey/StatsSection';
import VisionSection from '../components/journey/VisionSection';
import CTASection from '../components/journey/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ModernHeader />
      <main>
        <HeroSection />
        <CarouselTimelineSection />
        <InteractiveSection />
        <StatsSection />
        <VisionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
