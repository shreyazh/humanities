import React from 'react';
import { Clock, Users, BookOpen, Star, Play, TrendingUp } from 'lucide-react';

interface Subject {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: string;
  estimatedTime: string;
  topics: number;
  icon: string;
  color: string;
  prerequisites: string[];
  keywords: string[];
}

interface SubjectGridProps {
  subjects: Subject[];
  onSelectSubject: (subject: Subject) => void;
  favorites: Set<string>;
  toggleFavorite: (subjectId: string) => void;
}

const SubjectGrid: React.FC<SubjectGridProps> = ({ subjects, onSelectSubject, favorites, toggleFavorite }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-orange-100 text-orange-800';
      case 'expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getIconComponent = (iconName: string) => {
    const iconProps = { size: 32, className: "text-white" };
    switch (iconName) {
      case 'BookOpen': return <BookOpen {...iconProps} />;
      case 'Users': return <Users {...iconProps} />;
      case 'TrendingUp': return <TrendingUp {...iconProps} />;
      case 'Clock': return <Clock {...iconProps} />;
      default: return <BookOpen {...iconProps} />;
    }
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Choose Your Learning Path
          </h2>
          <span className="text-gray-600 font-medium">
            {subjects.length} subject{subjects.length !== 1 ? 's' : ''} available
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <div 
              key={subject.id}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => onSelectSubject(subject)}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${subject.color} rounded-xl flex items-center justify-center`}>
                  {getIconComponent(subject.icon)}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(subject.id);
                  }}
                  className={`p-1 rounded-full transition-colors ${
                    favorites.has(subject.id) 
                      ? 'text-yellow-500 hover:text-yellow-600' 
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Star size={20} fill={favorites.has(subject.id) ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {subject.name}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                {subject.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{subject.estimatedTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen size={14} />
                    <span>{subject.topics} topics</span>
                  </div>
                </div>
              </div>

              {/* Difficulty Badge */}
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(subject.difficulty)}`}>
                  {subject.difficulty.charAt(0).toUpperCase() + subject.difficulty.slice(1)}
                </span>
                <div className="flex items-center space-x-1 text-blue-600 group-hover:text-blue-700 transition-colors">
                  <span className="text-sm font-medium">Explore</span>
                  <Play size={14} />
                </div>
              </div>

              {/* Prerequisites */}
              {subject.prerequisites.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Prerequisites:</p>
                  <div className="flex flex-wrap gap-1">
                    {subject.prerequisites.slice(0, 2).map((prereq) => (
                      <span key={prereq} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {prereq}
                      </span>
                    ))}
                    {subject.prerequisites.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{subject.prerequisites.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectGrid;