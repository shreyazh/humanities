import React from 'react';
import { GraduationCap, Search, Star, Settings } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200/20 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Learning Hub</h1>
              <p className="text-sm text-gray-600">Humanities & Commerce Roadmaps</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#subjects" className="text-gray-600 hover:text-gray-800 transition-colors font-medium">Subjects</a>
            <a href="#roadmaps" className="text-gray-600 hover:text-gray-800 transition-colors font-medium">Roadmaps</a>
            <a href="#resources" className="text-gray-600 hover:text-gray-800 transition-colors font-medium">Resources</a>
            <a href="#progress" className="text-gray-600 hover:text-gray-800 transition-colors font-medium">Progress</a>
          </nav>

          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
              <Star size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;