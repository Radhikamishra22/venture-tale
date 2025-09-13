import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Rocket, Smartphone, Globe, Trophy, Sparkles } from 'lucide-react';

const InteractiveSection = () => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const milestones = {
    '2020': {
      icon: Rocket,
      title: 'Company Founded',
      description: 'Started our journey with a small team of passionate developers and a big vision to transform the industry.',
      stats: ['5 Team Members', '1 Office', '$100K Initial Funding']
    },
    '2021': {
      icon: Smartphone,
      title: 'Product Launch',
      description: 'Released our first mobile application that gained massive traction with over 50,000 users in the first quarter.',
      stats: ['50K+ Users', '15 Team Members', '3 Products']
    },
    '2022': {
      icon: Globe,
      title: 'Global Expansion',
      description: 'Expanded our reach internationally, establishing offices in 5 countries and serving millions of users worldwide.',
      stats: ['1M+ Users', '100+ Team Members', '15 Countries']
    },
    '2023': {
      icon: Trophy,
      title: 'Industry Leadership',
      description: 'Became the industry leader with multiple awards and recognition from top tech publications and organizations.',
      stats: ['5M+ Users', '250+ Team Members', '20+ Awards']
    },
    '2024': {
      icon: Sparkles,
      title: 'Innovation Focus',
      description: 'Pioneering cutting-edge AI and ML technologies to shape the future of our industry.',
      stats: ['10M+ Users', '500+ Team Members', '50+ Patents']
    }
  };

  const years = Object.keys(milestones);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interactive <span className="text-purple-600">Timeline</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click on any year to explore our journey in detail
          </p>
        </motion.div>

        {/* Year Stepper */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4 p-2 bg-gray-100 rounded-full">
            {years.map((year, index) => (
              <motion.button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedYear === year
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {year}
                {index < years.length - 1 && (
                  <div className="absolute top-1/2 -right-2 w-1 h-1 bg-gray-400 rounded-full transform -translate-y-1/2"></div>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Milestone Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-2xl"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    {(() => {
                      const IconComponent = milestones[selectedYear].icon;
                      return <IconComponent className="w-16 h-16 text-white" />;
                    })()}
                  </motion.div>
                </div>
                
                <div className="md:w-2/3 md:pl-8 text-center md:text-left">
                  <motion.h3
                    className="text-3xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {milestones[selectedYear].title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-lg text-gray-600 mb-6 leading-relaxed"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {milestones[selectedYear].description}
                  </motion.p>
                  
                  <motion.div
                    className="flex flex-wrap justify-center md:justify-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {milestones[selectedYear].stats.map((stat, index) => (
                      <div
                        key={index}
                        className="bg-white px-4 py-2 rounded-full shadow-md border border-purple-100"
                      >
                        <span className="text-purple-600 font-semibold">{stat}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveSection;