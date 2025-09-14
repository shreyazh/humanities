import React from 'react';

interface TimelineProps {
  selectedEra: string;
}

const Timeline: React.FC<TimelineProps> = ({ selectedEra }) => {
  const eras = [
    { 
      id: 'foundations', 
      name: 'Foundations', 
      period: 'Start Here', 
      color: 'bg-blue-500', 
      description: 'Essential skills and introductory concepts across all domains' 
    },
    { 
      id: 'core-subjects', 
      name: 'Core Subjects', 
      period: 'Build Knowledge', 
      color: 'bg-purple-500', 
      description: 'Fundamental subjects in humanities and commerce' 
    },
    { 
      id: 'specialization', 
      name: 'Specialization', 
      period: 'Choose Focus', 
      color: 'bg-emerald-500', 
      description: 'Advanced topics and specialized areas of study' 
    },
    { 
      id: 'interdisciplinary', 
      name: 'Interdisciplinary', 
      period: 'Connect Ideas', 
      color: 'bg-amber-500', 
      description: 'Cross-cutting themes and interdisciplinary studies' 
    },
    { 
      id: 'mastery', 
      name: 'Mastery', 
      period: 'Expert Level', 
      color: 'bg-red-500', 
      description: 'Advanced research, original thinking, and professional application' 
    }
  ];

  return (
    <section className="py-16 px-6 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Learning Progression
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-emerald-500 via-amber-500 to-red-500"></div>
          
          <div className="space-y-8">
            {eras.map((era, index) => (
              <div 
                key={era.id}
                className={`relative flex items-center transition-all duration-500 ${
                  selectedEra === 'all' || selectedEra === era.id 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-50 scale-95'
                }`}
              >
                {/* Timeline dot */}
                <div className={`w-6 h-6 ${era.color} rounded-full border-4 border-white shadow-lg z-10`}></div>
                
                {/* Era card */}
                <div className="ml-8 bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex-1 border border-white/20">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-800">{era.name}</h3>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {era.period}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{era.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;