import { motion } from 'framer-motion';
import { useRef } from 'react';
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
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
      color: 'from-cyan-400 to-blue-500'
    },
    {
      year: '2024',
      quarter: 'Q1',
      icon: Lightbulb,
      title: 'Idea Stage',
      description: 'The vision to simplify property finding and connect renters with perfect homes.',
      image: layeredWavesImg,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      year: '2024',
      quarter: 'Q2',
      icon: Microscope,
      title: 'Research & Development',
      description: 'Building technology and user experience for seamless property discovery.',
      image: blobSceneImg,
      color: 'from-indigo-400 to-purple-500'
    },
    {
      year: '2024',
      quarter: 'Q2',
      icon: Zap,
      title: 'Strategy',
      description: 'Smart approach for property solutions and market positioning.',
      image: homeSearchImg,
      color: 'from-purple-400 to-pink-500'
    },
    {
      year: '2024',
      quarter: 'Q3',
      icon: TrendingUp,
      title: 'Funding & Growth',
      description: 'Scaling operations to reach more users and expand our platform.',
      image: layeredWavesImg,
      color: 'from-pink-400 to-rose-500'
    },
    {
      year: '2024',
      quarter: 'Q3',
      icon: Target,
      title: 'Target Achieved',
      description: 'Helping thousands find rooms easily and building trust in the market.',
      image: blobSceneImg,
      color: 'from-rose-400 to-orange-500'
    },
    {
      year: '2024',
      quarter: 'Q4',
      icon: Award,
      title: 'Recognition',
      description: 'Gaining recognition in the proptech industry for innovation.',
      image: homeSearchImg,
      color: 'from-orange-400 to-yellow-500'
    },
    {
      year: '2025',
      quarter: 'Q1',
      icon: Sparkles,
      title: 'Launch & Expansion',
      description: 'Taking GharPadharo to the next level with nationwide expansion.',
      image: layeredWavesImg,
      color: 'from-yellow-400 to-green-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From inception to expansion - every milestone in our journey to revolutionize property finding
          </p>
        </motion.div>

        {/* Card Carousel */}
        <motion.div
          className="max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <motion.div
                      className="h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 h-full flex flex-col">
                        {/* Header with Year and Icon */}
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-2xl font-bold text-gray-900">{milestone.year}</span>
                            <span className="text-sm text-gray-500 ml-2">{milestone.quarter}</span>
                          </div>
                          <div className={`w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-lg`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Title and Description */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600 mb-4 flex-grow leading-relaxed">{milestone.description}</p>

                        {/* Image */}
                        <div className="w-full h-32 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center overflow-hidden">
                          <img 
                            src={milestone.image} 
                            alt={milestone.title}
                            className="w-20 h-20 object-contain opacity-80"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white shadow-lg border-purple-200 hover:bg-purple-50" />
            <CarouselNext className="right-4 bg-white shadow-lg border-purple-200 hover:bg-purple-50" />
          </Carousel>
        </motion.div>

        {/* Infographic Timeline */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Journey <span className="text-purple-600">Flow</span>
          </h3>
          
          {/* Desktop View - Floating Cards */}
          <div className="hidden lg:block relative max-w-7xl mx-auto min-h-[600px]">
            {/* Connecting Lines SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="20%" stopColor="#3b82f6" />
                  <stop offset="40%" stopColor="#8b5cf6" />
                  <stop offset="60%" stopColor="#ec4899" />
                  <stop offset="80%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
              
              {/* Curved connecting paths */}
              <path
                d="M 120 150 Q 200 100 280 200 Q 350 280 450 180 Q 550 80 650 250 Q 750 350 850 150"
                stroke="url(#flowGradient)"
                strokeWidth="3"
                fill="none"
                className="opacity-60"
                strokeDasharray="8,4"
              />
            </svg>

            {/* Floating Milestone Cards */}
            <div className="relative z-10">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const cardPositions = [
                  { top: '10%', left: '5%' },     // Top left
                  { top: '25%', left: '25%' },    // Mid left
                  { top: '5%', left: '45%' },     // Top center
                  { top: '35%', left: '65%' },    // Mid right
                  { top: '15%', left: '85%' },    // Top right
                  { top: '55%', left: '70%' },    // Bottom right
                  { top: '70%', left: '45%' },    // Bottom center
                  { top: '50%', left: '15%' }     // Bottom left
                ];
                
                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      top: cardPositions[index]?.top || '50%',
                      left: cardPositions[index]?.left || '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ scale: 0, opacity: 0, y: 50 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-2xl border border-gray-100 w-72 relative">
                      {/* Icon and Year Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{milestone.year}</div>
                          <div className="text-sm font-medium text-purple-600">{milestone.quarter}</div>
                        </div>
                        <div className={`w-14 h-14 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      
                      {/* Title and Description */}
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
                      
                      {/* Decorative dot */}
                      <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${milestone.color} rounded-full shadow-lg`}></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical gradient line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-orange-400 rounded-full"></div>
              
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative flex items-center mb-8 pl-20"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Node */}
                    <div className={`absolute left-6 w-8 h-8 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center border-4 border-white shadow-lg`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-100 flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-bold text-purple-600 mr-2">{milestone.year} {milestone.quarter}</span>
                        <span className="text-sm font-bold text-gray-900">{milestone.title}</span>
                      </div>
                      <p className="text-xs text-gray-600">{milestone.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarouselTimelineSection;