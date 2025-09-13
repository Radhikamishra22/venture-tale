import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Smartphone, Globe, Trophy, Sparkles } from 'lucide-react';

const TimelineSection = () => {
  const milestones = [
    {
      year: '2020',
      icon: Rocket,
      title: 'Founded',
      description: 'Started with a vision to change the world through technology and innovation.',
      image: '/api/placeholder/200/150'
    },
    {
      year: '2021',
      icon: Smartphone,
      title: 'First Product Launch',
      description: 'Launched our flagship mobile application with 10,000+ downloads in the first month.',
      image: '/api/placeholder/200/150'
    },
    {
      year: '2022',
      icon: Globe,
      title: 'Global Expansion',
      description: 'Expanded operations to 15+ countries across 3 continents.',
      image: '/api/placeholder/200/150'
    },
    {
      year: '2023',
      icon: Trophy,
      title: 'Industry Recognition',
      description: 'Won multiple awards including "Best Innovation" and "Startup of the Year".',
      image: '/api/placeholder/200/150'
    },
    {
      year: '2024',
      icon: Sparkles,
      title: 'Future Vision',
      description: 'Pioneering next-generation AI solutions and sustainable technology.',
      image: '/api/placeholder/200/150'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-purple-600">Timeline</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every milestone tells a story of growth, innovation, and impact
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>

          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;
            const IconComponent = milestone.icon;

            return (
              <TimelineItem
                key={index}
                milestone={milestone}
                isLeft={isLeft}
                IconComponent={IconComponent}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ milestone, isLeft, IconComponent }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-center mb-16 ${isLeft ? 'justify-start' : 'justify-end'}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Timeline Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <IconComponent className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      {/* Content Card */}
      <motion.div
        className={`w-full max-w-md ${isLeft ? 'mr-8 pr-8' : 'ml-8 pl-8'}`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-100">
          <div className="flex items-center mb-4">
            <span className="text-3xl font-bold text-purple-600 mr-4">{milestone.year}</span>
            <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
          </div>
          <p className="text-gray-600 mb-4 leading-relaxed">{milestone.description}</p>
          <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
            <span className="text-purple-600 font-medium">Image Placeholder</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineSection;