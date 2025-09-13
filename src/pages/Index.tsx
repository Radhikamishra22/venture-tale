import Header from '../components/Header';
import AdvancedJourneyTimeline from '../components/AdvancedJourneyTimeline';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <AdvancedJourneyTimeline />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
