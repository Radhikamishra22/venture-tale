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

const CarouselTimelineSection = () => {
  const milestones = [
    {
      year: '2024',
      quarter: 'Q1',
      icon: Rocket,
      title: 'Founded',
      description: 'Started GharPadharo with a vision to simplify property finding for everyone.',
    },
    {
      year: '2024',
      quarter: 'Q1',
      icon: Lightbulb,
      title: 'Idea Stage',
      description: 'The vision to simplify property finding and connect renters with perfect homes.',
    },
    {
      year: '2024',
      quarter: 'Q2',
      icon: Microscope,
      title: 'Research & Development',
      description: 'Building technology and user experience for seamless property discovery.',
    },
    {
      year: '2024',
      quarter: 'Q2',
      icon: Zap,
      title: 'Strategy',
      description: 'Smart approach for property solutions and market positioning.',
    },
    {
      year: '2024',
      quarter: 'Q3',
      icon: TrendingUp,
      title: 'Funding & Growth',
      description: 'Scaling operations to reach more users and expand our platform.',
    },
    {
      year: '2024',
      quarter: 'Q3',
      icon: Target,
      title: 'Target Achieved',
      description: 'Helping thousands find rooms easily and building trust in the market.',
    },
    {
      year: '2024',
      quarter: 'Q4',
      icon: Award,
      title: 'Recognition',
      description: 'Gaining recognition in the proptech industry for innovation.',
    },
    {
      year: '2025',
      quarter: 'Q1',
      icon: Sparkles,
      title: 'Launch & Expansion',
      description: 'Taking GharPadharo to the next level with nationwide expansion.',
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
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

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-300 h-full hidden lg:block"></div>
          
          {/* Mobile Central Line */}
          <div className="absolute left-8 w-1 bg-purple-300 h-full lg:hidden"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Desktop Layout - Zig Zag */}
                  <div className="hidden lg:flex items-center">
                    {/* Left Side Card (Even Index) */}
                    {isEven && (
                      <>
                        <div className="w-5/12 pr-8">
                          <motion.div
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="text-right">
                              <div className="flex items-center justify-end mb-4">
                                <div className="text-right mr-4">
                                  <span className="text-2xl font-bold text-gray-900">{milestone.year}</span>
                                  <span className="text-sm text-purple-600 ml-2 font-medium">{milestone.quarter}</span>
                                </div>
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                                  <IconComponent className="w-6 h-6 text-white" />
                                </div>
                              </div>
                              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-3">
                                {milestone.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                            </div>
                          </motion.div>
                        </div>
                        
                        {/* Central Marker */}
                        <div className="w-2/12 flex justify-center">
                          <div className="w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10 relative">
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-purple-600">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                        
                        {/* Empty Right Side */}
                        <div className="w-5/12"></div>
                      </>
                    )}

                    {/* Right Side Card (Odd Index) */}
                    {!isEven && (
                      <>
                        {/* Empty Left Side */}
                        <div className="w-5/12"></div>
                        
                        {/* Central Marker */}
                        <div className="w-2/12 flex justify-center">
                          <div className="w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10 relative">
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-purple-600">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                        
                        <div className="w-5/12 pl-8">
                          <motion.div
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-center justify-start mb-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                              <div className="ml-4">
                                <span className="text-2xl font-bold text-gray-900">{milestone.year}</span>
                                <span className="text-sm text-purple-600 ml-2 font-medium">{milestone.quarter}</span>
                              </div>
                            </div>
                            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-3">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                          </motion.div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile Layout - Stacked */}
                  <div className="lg:hidden flex items-start">
                    {/* Central Marker */}
                    <div className="flex-shrink-0 w-16 flex justify-center">
                      <div className="w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10 relative">
                        <span className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-sm font-bold text-purple-600">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    
                    {/* Card */}
                    <div className="flex-1 ml-4">
                      <motion.div
                        className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center justify-start mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="ml-4">
                            <span className="text-2xl font-bold text-gray-900">{milestone.year}</span>
                            <span className="text-sm text-purple-600 ml-2 font-medium">{milestone.quarter}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselTimelineSection;