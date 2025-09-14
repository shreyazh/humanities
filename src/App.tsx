import React, { useState } from 'react';
import { BookOpen, Search, Filter, Star, Play, ExternalLink } from 'lucide-react';
import Header from './components/Header';
import SubjectGrid from './components/SubjectGrid';
import RoadmapView from './components/RoadmapView';
import SearchFilters from './components/SearchFilters';
import { subjectsData } from './data/subjectsData';

function App() {
  const [selectedSubject, setSelectedSubject] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const filteredSubjects = subjectsData.filter(subject => {
    const matchesCategory = selectedCategory === 'all' || subject.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.keywords.some(keyword => 
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesDifficulty = selectedDifficulty === 'all' || subject.difficulty === selectedDifficulty;
    
    return matchesCategory && matchesSearch && matchesDifficulty;
  });

  const toggleFavorite = (subjectId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(subjectId)) {
      newFavorites.delete(subjectId);
    } else {
      newFavorites.add(subjectId);
    }
    setFavorites(newFavorites);
  };

  if (selectedSubject) {
    return (
      <RoadmapView 
        subject={selectedSubject} 
        onBack={() => setSelectedSubject(null)}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Humanities & Commerce
            <br />
            Learning Hub
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Master every domain of human knowledge. From ancient philosophy to modern economics, 
            literature to business strategy - your complete learning roadmap for the humanities and commerce.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
              <BookOpen className="text-blue-600 mb-2" size={32} />
              <span className="text-gray-700 font-medium">25+ Subjects</span>
              <span className="text-xs text-gray-500 mt-1">Complete Coverage</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
              <Search className="text-purple-600 mb-2" size={32} />
              <span className="text-gray-700 font-medium">1000+ Topics</span>
              <span className="text-xs text-gray-500 mt-1">Detailed Roadmaps</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
              <Play className="text-emerald-600 mb-2" size={32} />
              <span className="text-gray-700 font-medium">Video Integration</span>
              <span className="text-xs text-gray-500 mt-1">YouTube Ready</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
              <Star className="text-amber-600 mb-2" size={32} />
              <span className="text-gray-700 font-medium">Progress Tracking</span>
              <span className="text-xs text-gray-500 mt-1">Your Journey</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <SearchFilters 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
      />

      {/* Subjects Grid */}
      <SubjectGrid 
        subjects={filteredSubjects}
        onSelectSubject={setSelectedSubject}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />

      {/* Statistics Section */}
      <section className="py-16 px-6 bg-white/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Your Learning Journey Awaits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/60 rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Structured Learning</h3>
              <p className="text-gray-600">Each subject includes carefully curated learning paths from fundamentals to advanced concepts.</p>
            </div>
            <div className="p-8 bg-white/60 rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Multimedia Resources</h3>
              <p className="text-gray-600">Integrate books, articles, videos, and courses for a comprehensive learning experience.</p>
            </div>
            <div className="p-8 bg-white/60 rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Track Progress</h3>
              <p className="text-gray-600">Monitor your advancement through each subject and build your personalized curriculum.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;