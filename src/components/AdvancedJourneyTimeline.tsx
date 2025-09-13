import React from 'react';
import { Users, Lightbulb, Microscope, Zap, DollarSign, Target, Rocket } from 'lucide-react';

const AdvancedJourneyTimeline = () => {
  const milestones = [
    {
      year: "2024",
      quarter: "Q1",
      title: "Founded",
      description: "Team Formation",
      icon: Users,
      position: { x: 8, y: 20 },
      color: "cyan"
    },
    {
      year: "2024",
      quarter: "Q2", 
      title: "Idea Stage",
      description: "The vision to simplify property finding",
      icon: Lightbulb,
      position: { x: 25, y: 65 },
      color: "blue"
    },
    {
      year: "2024",
      quarter: "Q3",
      title: "Research & Development", 
      description: "Building technology for users",
      icon: Microscope,
      position: { x: 45, y: 25 },
      color: "indigo"
    },
    {
      year: "2024",
      quarter: "Q4",
      title: "Strategy",
      description: "Smart approach for property solutions", 
      icon: Zap,
      position: { x: 62, y: 70 },
      color: "purple"
    },
    {
      year: "2025",
      quarter: "Q1",
      title: "Funding & Growth",
      description: "Scaling operations to reach more users",
      icon: DollarSign,
      position: { x: 78, y: 30 },
      color: "violet"
    },
    {
      year: "2025", 
      quarter: "Q2",
      title: "Target Achieved",
      description: "Helping thousands find rooms easily",
      icon: Target,
      position: { x: 88, y: 75 },
      color: "fuchsia"
    },
    {
      year: "2025",
      quarter: "Q3",
      title: "Launch & Expansion", 
      description: "Taking GharPadharo to the next level",
      icon: Rocket,
      position: { x: 95, y: 50 },
      color: "pink"
    }
  ];

  // Define the curved path points for the S-curve
  const pathPoints = [
    { x: 8, y: 20 },   // Start
    { x: 15, y: 40 },  // Control point 1
    { x: 25, y: 65 },  // Milestone 2
    { x: 35, y: 45 },  // Control point 2
    { x: 45, y: 25 },  // Milestone 3
    { x: 55, y: 50 },  // Control point 3
    { x: 62, y: 70 },  // Milestone 4
    { x: 70, y: 50 },  // Control point 4
    { x: 78, y: 30 },  // Milestone 5
    { x: 83, y: 55 },  // Control point 5
    { x: 88, y: 75 },  // Milestone 6
    { x: 92, y: 62 },  // Control point 6
    { x: 95, y: 50 }   // End
  ];

  // Create smooth curve path
  const createCurvePath = () => {
    let path = `M ${pathPoints[0].x} ${pathPoints[0].y}`;
    
    for (let i = 1; i < pathPoints.length - 2; i += 2) {
      const cp1 = pathPoints[i];
      const cp2 = pathPoints[i + 1];
      const end = pathPoints[i + 2];
      path += ` Q ${cp1.x} ${cp1.y} ${cp2.x} ${cp2.y} Q ${cp2.x} ${cp2.y} ${end.x} ${end.y}`;
    }
    
    return path;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From a simple idea to revolutionizing property finding - discover our startup journey
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="relative h-96 w-full">
            {/* Curved Path */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="20%" stopColor="#3b82f6" />
                  <stop offset="40%" stopColor="#6366f1" />
                  <stop offset="60%" stopColor="#8b5cf6" />
                  <stop offset="80%" stopColor="#d946ef" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Main curved path */}
              <path
                d={createCurvePath()}
                stroke="url(#pathGradient)"
                strokeWidth="0.3"
                fill="none"
                filter="url(#glow)"
                className="animate-pulse"
              />
            </svg>

            {/* Milestone Points */}
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ 
                    left: `${milestone.position.x}%`, 
                    top: `${milestone.position.y}%` 
                  }}
                >
                  {/* Diamond Node */}
                  <div className={`relative w-4 h-4 bg-gradient-to-br from-${milestone.color}-400 to-${milestone.color}-600 rotate-45 border-2 border-white shadow-lg mb-8`}>
                    <div className="absolute inset-0 bg-white/20 rounded-sm animate-pulse"></div>
                  </div>

                  {/* Icon */}
                  <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-${milestone.color}-500 to-${milestone.color}-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Milestone Card */}
                  <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 w-48 p-4 bg-white rounded-lg shadow-xl border border-${milestone.color}-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                    <div className={`text-xs font-semibold text-${milestone.color}-600 mb-1`}>
                      {milestone.year} {milestone.quarter}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{milestone.title}</h3>
                    <p className="text-sm text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical gradient line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full"></div>
            
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div key={index} className="relative flex items-start mb-12">
                  {/* Node */}
                  <div className={`relative z-10 w-6 h-6 bg-gradient-to-br from-${milestone.color}-400 to-${milestone.color}-600 rotate-45 border-2 border-white shadow-lg mr-6 mt-2`}>
                    <div className="absolute inset-0 bg-white/20 rounded-sm"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-lg border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className={`w-10 h-10 bg-gradient-to-br from-${milestone.color}-500 to-${milestone.color}-700 rounded-full flex items-center justify-center mr-3`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className={`text-xs font-semibold text-${milestone.color}-600`}>
                          {milestone.year} {milestone.quarter}
                        </div>
                        <h3 className="font-bold text-gray-800">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedJourneyTimeline;