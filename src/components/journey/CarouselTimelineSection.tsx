import { motion } from 'framer-motion';
import { 
  Rocket, 
  Lightbulb, 
  Microscope, 
  Zap, 
  Target, 
  TrendingUp, 
  Award, 
  Sparkles 
} from 'lucide-react';
import homeSearchImg from '../../assets/home-search.svg';
import layeredWavesImg from '../../assets/layered-waves.svg';
import blobSceneImg from '../../assets/blob-scene.svg';

const CarouselTimelineSection = () => {
  const milestones = [
    {
      year: '2024',
      quarter: 'Q1',
      icon: Rocket,
      title: 'Founded',
      description: 'Started GharPadharo with a vision to simplify property finding for everyone.',
      image: homeSearchImg,
      color: 'from-purple-600 to-purple-400'
    },
    {
      year: '2024',
      quarter: 'Q1',
      icon: Lightbulb,
      title: 'Idea Stage',
      description: 'The vision to simplify property finding and connect renters with perfect homes.',
      image: layeredWavesImg,
      color: 'from-purple-600 to-purple-400'
    },
    {
      year: '2024',
      quarter: 'Q2',
      icon: Microscope,
      title: 'Research & Development',
      description: 'Building technology and user experience for seamless property discovery.',
      image: blobSceneImg,
      color: 'from-purple-600 to-purple-400'
    },
    {
      year: '2024',
      quarter: 'Q2',
      icon: Zap,
      title: 'Strategy',
      description: 'Smart approach for property solutions and market positioning.',
      image: homeSearchImg,
      color: 'from-purple-600 to-purple-400'
    },
    {
      year: '2024',
      quarter: 'Q3',
      icon: TrendingUp,
      title: 'Funding & Growth',
      description: 'Scaling operations to reach more users and expand our platform.',
      image: layeredWavesImg,
      color: 'from-purple-600 to-purple-400'
    },
    {
      year: '2024',
      quarter: 'Q3',
      icon: Target,
      title: 'Target Achieved',
      description: 'Helping thousands find rooms easily and building trust in the market.',
      image: blobSceneImg,
      color: 'from-purple-600 to-purple-400'
    },
    {
      year: '2024',
      quarter: 'Q4',
      icon: Award,
      title: 'Recognition',
      description: 'Gaining recognition in the proptech industry for innovation.',
      image: homeSearchImg,
      color: 'from-purple-600 to-purple-400'
    },
    {
      year: '2025',
      quarter: 'Q1',
      icon: Sparkles,
      title: 'Launch & Expansion',
      description: 'Taking GharPadharo to the next level with nationwide expansion.',
      image: layeredWavesImg,
      color: 'from-purple-600 to-purple-400'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From inception to expansion - every milestone in our journey to revolutionize property finding
          </p>
        </motion.div>

        {/* Desktop: Horizontal Scroll */}
        <div className="hidden md:block">
          <div className="overflow-x-auto flex gap-6 snap-x snap-mandatory pb-6">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <motion.div
                  key={index}
                  className="min-w-[280px] snap-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Header with Year and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{milestone.year}</span>
                      <span className="text-sm text-purple-600 ml-2 font-medium">{milestone.quarter}</span>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{milestone.description}</p>

                  {/* Image */}
                  <div className="w-full h-32 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src={milestone.image} 
                      alt={milestone.title}
                      className="w-20 h-20 object-contain opacity-80"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden space-y-6">
          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Header with Year and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{milestone.year}</span>
                    <span className="text-sm text-purple-600 ml-2 font-medium">{milestone.quarter}</span>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-3">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{milestone.description}</p>

                {/* Image */}
                <div className="w-full h-32 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={milestone.image} 
                    alt={milestone.title}
                    className="w-20 h-20 object-contain opacity-80"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CarouselTimelineSection;