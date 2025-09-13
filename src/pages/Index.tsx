import ModernHeader from '../components/ModernHeader';
import HeroSection from '../components/journey/HeroSection';
import TimelineSection from '../components/journey/TimelineSection';
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
        <TimelineSection />
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
