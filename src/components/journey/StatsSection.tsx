import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const StatsSection = () => {
  const stats = [
    { number: 15, suffix: '+', label: 'Countries' },
    { number: 1, suffix: 'M+', label: 'Happy Users' },
    { number: 50, suffix: '+', label: 'Industry Awards' },
    { number: 99, suffix: '%', label: 'Customer Satisfaction' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">Impact</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Numbers that showcase our journey and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedStat = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.number / steps;
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            setCount(stat.number);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }, index * 200);

      return () => clearTimeout(timer);
    }
  }, [isInView, stat.number, index]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20"
        whileHover={{ scale: 1.05, rotateY: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="text-4xl md:text-5xl font-bold text-white mb-2">
          {count}
          <span className="text-yellow-400">{stat.suffix}</span>
        </div>
        <div className="text-purple-200 font-medium text-lg">
          {stat.label}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StatsSection;