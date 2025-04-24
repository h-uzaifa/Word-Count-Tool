import React, { useState, useCallback } from 'react';
import { Clock, Type, FileText } from 'lucide-react';

function App() {
  const [text, setText] = useState('');
  
  const getStats = useCallback(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s+/g, '').length;
    const sentences = text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0;
    
    return { words, chars, charsNoSpaces, sentences };
  }, [text]);

  const handleClear = () => {
    setText('');
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Type className="mr-2" /> Word Counter
          </h1>
          
          <div className="mb-6">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-64 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Type or paste your text here..."
            />
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 min-w-[150px] bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
              <div className="flex items-center text-blue-600 dark:text-blue-400 mb-1">
                <FileText size={18} className="mr-2" />
                <span className="text-sm font-medium">Words</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.words}
              </div>
            </div>
            
            <div className="flex-1 min-w-[150px] bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
              <div className="flex items-center text-green-600 dark:text-green-400 mb-1">
                <Type size={18} className="mr-2" />
                <span className="text-sm font-medium">Characters</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.chars}
              </div>
            </div>
            
            <div className="flex-1 min-w-[150px] bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4">
              <div className="flex items-center text-purple-600 dark:text-purple-400 mb-1">
                <Clock size={18} className="mr-2" />
                <span className="text-sm font-medium">Characters (no spaces)</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.charsNoSpaces}
              </div>
            </div>
            
            <div className="flex-1 min-w-[150px] bg-amber-50 dark:bg-amber-900/30 rounded-lg p-4">
              <div className="flex items-center text-amber-600 dark:text-amber-400 mb-1">
                <FileText size={18} className="mr-2" />
                <span className="text-sm font-medium">Sentences</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.sentences}
              </div>
            </div>
          </div>
          
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Clear text
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;