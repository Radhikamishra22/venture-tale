import { motion } from 'framer-motion';
import { 
  Home, 
  Building2, 
  DollarSign, 
  Search, 
  Smartphone, 
  Shield, 
  TrendingUp,
  Zap 
} from 'lucide-react';

const CarouselTimelineSection = () => {
  const milestones = [
    {
      year: '2024',
      icon: Home,
      title: 'Company Founded',
      description: 'GharPadharo was established with a vision to revolutionize property rental market.',
      level: 'top',
      position: { x: 85, y: 15 }
    },
    {
      year: '2019',
      icon: Building2,
      title: 'Platform Launch: User Verification & Listings',
      description: 'Launched our core platform with verified user profiles and comprehensive property listings.',
      level: 'top',
      position: { x: 15, y: 25 }
    },
    {
      year: '2019',
      icon: DollarSign,
      title: 'Exclusive Deals Platform',
      description: 'Introduced exclusive deals and offers for verified users and property owners.',
      level: 'middle',
      position: { x: 40, y: 35 }
    },
    {
      year: '2025',
      icon: Search,
      title: 'Direct Owner-Tenant Search',
      description: 'Revolutionary direct connection system between property owners and tenants.',
      level: 'top',
      position: { x: 70, y: 28 }
    },
    {
      year: '2025',
      icon: Smartphone,
      title: 'Mobile App Release & AI-Driven Search',
      description: 'Launched mobile application with advanced AI-powered property search and recommendations.',
      level: 'top',
      position: { x: 95, y: 32 }
    },
    {
      year: '2018',
      icon: Zap,
      title: 'Advanced Search Engine',
      description: 'Developed sophisticated search algorithms for better property matching.',
      level: 'bottom',
      position: { x: 20, y: 70 }
    },
    {
      year: '2023',
      icon: Shield,
      title: 'Enhanced Security & Smart Features',
      description: 'Implemented advanced security measures and smart property management features.',
      level: 'bottom',
      position: { x: 50, y: 65 }
    },
    {
      year: '2024',
      icon: TrendingUp,
      title: 'Nationwide Expansion & Investment Round',
      description: 'Secured major investment and expanded operations across the country.',
      level: 'bottom',
      position: { x: 80, y: 68 }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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

        {/* Multi-Level Flowing Timeline */}
        <div className="relative max-w-7xl mx-auto min-h-[700px] lg:min-h-[600px] overflow-hidden">
          {/* Desktop Multi-Level Layout */}
          <div className="hidden lg:block">
            {/* Complex SVG Path System */}
            <svg 
              className="absolute inset-0 w-full h-full z-0" 
              viewBox="0 0 1000 600" 
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="25%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="75%" stopColor="#d946ef" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              
              {/* Top curved path */}
              <path
                d="M 100 100 Q 300 60 500 100 Q 700 140 900 100"
                stroke="url(#mainGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              
              {/* Middle connecting curves */}
              <path
                d="M 150 120 Q 200 200 250 280"
                stroke="url(#mainGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              
              <path
                d="M 400 120 Q 450 200 500 280"
                stroke="url(#mainGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              
              <path
                d="M 700 120 Q 750 200 800 280"
                stroke="url(#mainGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              
              {/* Main horizontal flow */}
              <path
                d="M 50 300 Q 200 260 350 300 Q 500 340 650 300 Q 800 260 950 300"
                stroke="url(#mainGradient)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
              
              {/* Bottom curved path */}
              <path
                d="M 200 320 Q 250 400 300 480"
                stroke="url(#mainGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              
              <path
                d="M 500 320 Q 550 400 600 480"
                stroke="url(#mainGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              
              <path
                d="M 800 320 Q 850 400 900 480"
                stroke="url(#mainGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              
              {/* Bottom horizontal path */}
              <path
                d="M 200 500 Q 400 460 600 500 Q 700 520 900 500"
                stroke="url(#mainGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Milestone Markers and Cards */}
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const { x, y } = milestone.position;
              
              return (
                <motion.div
                  key={index}
                  className="absolute z-10"
                  style={{ 
                    left: `${x}%`, 
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  {/* Circular Marker */}
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full shadow-lg border-4 border-white flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Floating Card */}
                  <motion.div
                    className="absolute w-72"
                    style={{ 
                      left: milestone.level === 'top' ? '-144px' : 
                            milestone.level === 'bottom' ? '-144px' : '-144px',
                      top: milestone.level === 'top' ? '-120px' : 
                           milestone.level === 'bottom' ? '30px' : '-45px'
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-md">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="ml-3">
                          <span className="text-xl font-bold text-gray-900">{milestone.year}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
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
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-purple-400 to-pink-500"></div>
                  )}
                  
                  {/* Circular Marker */}
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full shadow-lg border-4 border-white flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  {/* Card */}
                  <div className="flex-1 ml-4">
                    <motion.div
                      className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-md">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="ml-3">
                          <span className="text-lg font-bold text-gray-900">{milestone.year}</span>
                        </div>
                      </div>
                      <h3 className="text-md font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
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