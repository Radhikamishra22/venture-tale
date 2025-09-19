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
      icon: Lightbulb,
      title: 'Idea Stage',
      description: 'The vision to simplify property finding and connect renters with perfect homes.',
      position: { top: '20%', left: '5%' }
    },
    {
      year: '2024',
      quarter: 'Q2',
      icon: Microscope,
      title: 'Research & Development',
      description: 'Building technology and user experience for seamless property discovery.',
      position: { top: '40%', left: '25%' }
    },
    {
      year: '2024',
      quarter: 'Q2',
      icon: Zap,
      title: 'Strategy',
      description: 'Smart approach for property solutions and market positioning.',
      position: { top: '10%', left: '45%' }
    },
    {
      year: '2024',
      quarter: 'Q3',
      icon: Target,
      title: 'Target Achieved',
      description: 'Helping thousands find rooms easily and building trust in the market.',
      position: { top: '60%', left: '35%' }
    },
    {
      year: '2024',
      quarter: 'Q3',
      icon: TrendingUp,
      title: 'Funding & Growth',
      description: 'Scaling operations to reach more users and expand our platform.',
      position: { top: '30%', left: '65%' }
    },
    {
      year: '2024',
      quarter: 'Q4',
      icon: Award,
      title: 'Recognition',
      description: 'Gaining recognition in the proptech industry for innovation.',
      position: { top: '80%', left: '55%' }
    },
    {
      year: '2025',
      quarter: 'Q1',
      icon: Rocket,
      title: 'Launch & Expansion',
      description: 'Taking GharPadharo to the next level with nationwide expansion.',
      position: { top: '50%', left: '85%' }
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

        {/* Flowing Timeline Container */}
        <div className="relative max-w-7xl mx-auto min-h-[600px] lg:min-h-[500px] overflow-hidden">
          {/* Desktop Flowing Path */}
          <div className="hidden lg:block">
            {/* SVG Path */}
            <svg 
              className="absolute inset-0 w-full h-full z-0" 
              viewBox="0 0 1000 500" 
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="30%" stopColor="#3b82f6" />
                  <stop offset="70%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <path
                d="M 50 150 Q 200 50 350 100 Q 500 150 650 80 Q 800 50 950 120"
                stroke="url(#pathGradient)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 50 250 Q 200 350 350 300 Q 500 250 650 320 Q 800 350 950 280"
                stroke="url(#pathGradient)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 50 400 Q 200 450 350 420 Q 500 400 650 430 Q 800 450 950 420"
                stroke="url(#pathGradient)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Milestone Markers and Cards */}
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const pathPoints = [
                { x: 12, y: 30 }, // Path 1
                { x: 35, y: 20 }, 
                { x: 65, y: 16 },
                { x: 35, y: 64 }, // Path 2
                { x: 65, y: 56 },
                { x: 65, y: 86 }, // Path 3
                { x: 95, y: 84 }
              ];
              const point = pathPoints[index] || pathPoints[pathPoints.length - 1];
              
              return (
                <motion.div
                  key={index}
                  className="absolute z-10"
                  style={{ 
                    left: `${point.x}%`, 
                    top: `${point.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Diamond Marker */}
                  <div className="relative">
                    <div className="w-6 h-6 bg-white border-4 border-purple-600 transform rotate-45 shadow-lg"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                      <div className="w-4 h-4 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">{index + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Card */}
                  <motion.div
                    className="absolute mt-8 w-64"
                    style={{ 
                      left: index % 2 === 0 ? '-128px' : '-128px',
                      top: index % 3 === 0 ? '20px' : index % 3 === 1 ? '-80px' : '20px'
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center shadow-md">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="ml-3">
                          <span className="text-lg font-bold text-gray-900">{milestone.year}</span>
                          <span className="text-xs text-purple-600 ml-1 font-medium">{milestone.quarter}</span>
                        </div>
                      </div>
                      <h3 className="text-md font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Layout - Vertical Stack */}
          <div className="lg:hidden space-y-8">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              
              return (
                <motion.div
                  key={index}
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Vertical Line */}
                  {index < milestones.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-purple-400 to-purple-600"></div>
                  )}
                  
                  {/* Diamond Marker */}
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white border-4 border-purple-600 transform rotate-45 shadow-lg relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                        <div className="w-4 h-4 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center">
                          <span className="text-[10px] font-bold text-white">{index + 1}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card */}
                  <div className="flex-1 ml-4">
                    <motion.div
                      className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center shadow-md">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="ml-3">
                          <span className="text-lg font-bold text-gray-900">{milestone.year}</span>
                          <span className="text-xs text-purple-600 ml-1 font-medium">{milestone.quarter}</span>
                        </div>
                      </div>
                      <h3 className="text-md font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
                    </motion.div>
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