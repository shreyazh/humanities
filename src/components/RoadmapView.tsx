import React, { useState } from 'react';
import { ArrowLeft, Play, BookOpen, ExternalLink, CheckCircle, Circle, Star, Clock } from 'lucide-react';

interface RoadmapViewProps {
  subject: any;
  onBack: () => void;
  favorites: Set<string>;
  toggleFavorite: (id: string) => void;
}

const RoadmapView: React.FC<RoadmapViewProps> = ({ subject, onBack, favorites, toggleFavorite }) => {
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());
  const [selectedTopic, setSelectedTopic] = useState<any>(null);

  const toggleTopicCompletion = (topicId: string) => {
    const newCompleted = new Set(completedTopics);
    if (newCompleted.has(topicId)) {
      newCompleted.delete(topicId);
    } else {
      newCompleted.add(topicId);
    }
    setCompletedTopics(newCompleted);
  };

  const getPhaseColor = (phaseIndex: number) => {
    const colors = [
      'bg-blue-500',
      'bg-purple-500', 
      'bg-emerald-500',
      'bg-amber-500',
      'bg-red-500',
      'bg-indigo-500',
      'bg-pink-500',
      'bg-teal-500'
    ];
    return colors[phaseIndex % colors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onBack}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{subject.name}</h1>
              <p className="text-gray-600">{subject.description}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              subject.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
              subject.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
              subject.difficulty === 'advanced' ? 'bg-orange-100 text-orange-800' :
              'bg-red-100 text-red-800'
            }`}>
              {subject.difficulty.charAt(0).toUpperCase() + subject.difficulty.slice(1)}
            </span>
            <button
              onClick={() => toggleFavorite(subject.id)}
              className={`p-2 rounded-lg transition-colors ${
                favorites.has(subject.id) 
                  ? 'text-yellow-500 bg-yellow-50' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Star size={20} fill={favorites.has(subject.id) ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white/50 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-600">
              {completedTopics.size} / {subject.roadmap.reduce((acc: number, phase: any) => acc + phase.topics.length, 0)} topics completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${(completedTopics.size / subject.roadmap.reduce((acc: number, phase: any) => acc + phase.topics.length, 0)) * 100}%` 
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Roadmap Content */}
      <main className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {subject.roadmap.map((phase: any, phaseIndex: number) => (
              <div key={phase.id} className="relative">
                {/* Phase Header */}
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 ${getPhaseColor(phaseIndex)} rounded-xl flex items-center justify-center mr-4`}>
                    <span className="text-white font-bold text-lg">{phaseIndex + 1}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{phase.name}</h2>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </div>

                {/* Topics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-16">
                  {phase.topics.map((topic: any, topicIndex: number) => (
                    <div 
                      key={topic.id}
                      className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedTopic(topic)}
                    >
                      {/* Topic Header */}
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-800 flex-1">{topic.name}</h3>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTopicCompletion(topic.id);
                          }}
                          className="ml-2 text-gray-400 hover:text-emerald-500 transition-colors"
                        >
                          {completedTopics.has(topic.id) ? (
                            <CheckCircle className="text-emerald-500" size={20} />
                          ) : (
                            <Circle size={20} />
                          )}
                        </button>
                      </div>

                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {topic.description}
                      </p>

                      {/* Resources Count */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <BookOpen size={14} />
                            <span>{topic.resources?.length || 0} resources</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock size={14} />
                            <span>{topic.estimatedTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* YouTube Placeholder */}
                      <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-dashed border-red-200 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-center space-x-2 text-red-600">
                          <Play size={20} />
                          <span className="font-medium">YouTube Video Slot</span>
                        </div>
                        <p className="text-xs text-red-500 text-center mt-1">
                          Add your YouTube link here
                        </p>
                      </div>

                      {/* Prerequisites */}
                      {topic.prerequisites && topic.prerequisites.length > 0 && (
                        <div className="mb-3">
                          <p className="text-xs text-gray-500 mb-1">Prerequisites:</p>
                          <div className="flex flex-wrap gap-1">
                            {topic.prerequisites.map((prereq: string) => (
                              <span key={prereq} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                {prereq}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      <button className="w-full mt-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all font-medium">
                        Explore Topic
                      </button>
                    </div>
                  ))}
                </div>

                {/* Phase Connector */}
                {phaseIndex < subject.roadmap.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Topic Detail Modal */}
      {selectedTopic && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedTopic.name}</h2>
                  <p className="text-lg text-gray-600">{selectedTopic.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedTopic(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-6">
                {/* YouTube Integration Area */}
                <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-dashed border-red-200 rounded-xl p-8">
                  <div className="text-center">
                    <Play className="mx-auto text-red-600 mb-3" size={48} />
                    <h3 className="text-xl font-bold text-red-700 mb-2">Video Learning Content</h3>
                    <p className="text-red-600 mb-4">Add your curated YouTube videos for this topic</p>
                    <div className="bg-white/50 rounded-lg p-4 text-left">
                      <p className="text-sm text-red-600 font-mono">
                        // YouTube iframe or link will go here<br />
                        // Example: https://youtube.com/watch?v=...
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Learning Objectives */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Learning Objectives</h3>
                  <ul className="space-y-2">
                    {selectedTopic.objectives?.map((objective: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">{objective}</span>
                      </li>
                    )) || [
                      <li key={1} className="flex items-start space-x-3">
                        <CheckCircle className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">Understand core concepts and terminology</span>
                      </li>,
                      <li key={2} className="flex items-start space-x-3">
                        <CheckCircle className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">Apply knowledge to real-world scenarios</span>
                      </li>,
                      <li key={3} className="flex items-start space-x-3">
                        <CheckCircle className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600">Connect ideas to broader subject framework</span>
                      </li>
                    ]}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Learning Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Books */}
                    <div className="bg-blue-50 rounded-xl p-4">
                      <h4 className="font-semibold text-blue-800 mb-2 flex items-center space-x-2">
                        <BookOpen size={16} />
                        <span>Essential Reading</span>
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          <span className="text-gray-700">Primary text or foundational book</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          <span className="text-gray-700">Secondary analysis and commentary</span>
                        </div>
                        <div className="text-xs text-blue-600 bg-white/50 rounded p-2 mt-2">
                          📚 Book recommendations will be added here
                        </div>
                      </div>
                    </div>

                    {/* Videos */}
                    <div className="bg-red-50 rounded-xl p-4">
                      <h4 className="font-semibold text-red-800 mb-2 flex items-center space-x-2">
                        <Play size={16} />
                        <span>Video Content</span>
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                          <span className="text-gray-700">Introductory overview video</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                          <span className="text-gray-700">Deep-dive lecture series</span>
                        </div>
                        <div className="text-xs text-red-600 bg-white/50 rounded p-2 mt-2">
                          🎥 YouTube links will be embedded here
                        </div>
                      </div>
                    </div>

                    {/* Articles */}
                    <div className="bg-emerald-50 rounded-xl p-4">
                      <h4 className="font-semibold text-emerald-800 mb-2 flex items-center space-x-2">
                        <ExternalLink size={16} />
                        <span>Articles & Papers</span>
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                          <span className="text-gray-700">Academic papers and research</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                          <span className="text-gray-700">Popular articles and blogs</span>
                        </div>
                        <div className="text-xs text-emerald-600 bg-white/50 rounded p-2 mt-2">
                          📄 Article links will be organized here
                        </div>
                      </div>
                    </div>

                    {/* Online Courses */}
                    <div className="bg-purple-50 rounded-xl p-4">
                      <h4 className="font-semibold text-purple-800 mb-2 flex items-center space-x-2">
                        <Star size={16} />
                        <span>Online Courses</span>
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                          <span className="text-gray-700">MOOC platforms (Coursera, edX)</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                          <span className="text-gray-700">Specialized learning platforms</span>
                        </div>
                        <div className="text-xs text-purple-600 bg-white/50 rounded p-2 mt-2">
                          🎓 Course links and enrollment info here
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-6 border-t border-gray-200">
                  <button 
                    onClick={() => toggleTopicCompletion(selectedTopic.id)}
                    className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                      completedTopics.has(selectedTopic.id)
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {completedTopics.has(selectedTopic.id) ? 'Mark as Incomplete' : 'Mark as Complete'}
                  </button>
                  <button className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors font-medium">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadmapView;