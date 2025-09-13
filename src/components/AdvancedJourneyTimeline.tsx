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
      color: "#06b6d4" // cyan
    },
    {
      year: "2024",
      quarter: "Q2", 
      title: "Idea Stage",
      description: "The vision to simplify property finding",
      icon: Lightbulb,
      color: "#3b82f6" // blue
    },
    {
      year: "2024",
      quarter: "Q3",
      title: "Research & Development", 
      description: "Building technology for users",
      icon: Microscope,
      color: "#6366f1" // indigo
    },
    {
      year: "2024",
      quarter: "Q4",
      title: "Strategy",
      description: "Smart approach for property solutions", 
      icon: Zap,
      color: "#8b5cf6" // purple
    },
    {
      year: "2025",
      quarter: "Q1",
      title: "Funding & Growth",
      description: "Scaling operations to reach more users",
      icon: DollarSign,
      color: "#a855f7" // violet
    },
    {
      year: "2025", 
      quarter: "Q2",
      title: "Target Achieved",
      description: "Helping thousands find rooms easily",
      icon: Target,
      color: "#d946ef" // fuchsia
    },
    {
      year: "2025",
      quarter: "Q3",
      title: "Launch & Expansion", 
      description: "Taking GharPadharo to the next level",
      icon: Rocket,
      color: "#ec4899" // pink
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

        {/* Unified Timeline - Same for Mobile and Desktop */}
        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal gradient line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full transform -translate-y-1/2 z-0"></div>
          
          <div className="flex flex-wrap justify-between items-center relative z-10 px-4 py-16">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div key={index} className="flex flex-col items-center mb-8 lg:mb-0 w-full sm:w-1/2 lg:w-auto lg:flex-1 px-2">
                  {/* Milestone Card */}
                  <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 mb-6 w-full max-w-xs">
                    <div className="flex flex-col items-center text-center">
                      {/* Icon */}
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg mb-4 transition-transform duration-300 hover:scale-110"
                        style={{ backgroundColor: milestone.color }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Quarter/Year */}
                      <div 
                        className="text-sm font-semibold mb-2"
                        style={{ color: milestone.color }}
                      >
                        {milestone.year} {milestone.quarter}
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-bold text-gray-800 mb-3 text-lg">{milestone.title}</h3>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Connection Node */}
                  <div 
                    className="w-8 h-8 rounded-full border-4 border-white shadow-lg relative z-20"
                    style={{ backgroundColor: milestone.color }}
                  >
                    <div className="absolute inset-0 rounded-full animate-pulse opacity-50" style={{ backgroundColor: milestone.color }}></div>
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