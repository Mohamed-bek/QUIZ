import React from 'react';
import { Target } from 'lucide-react';

interface LevelSelectorProps {
  onSelect: (level: 'easy' | 'medium' | 'hard') => void;
}

export function LevelSelector({ onSelect }: LevelSelectorProps) {
  const levels = [
    { name: 'Easy', value: 'easy', points: 100 },
    { name: 'Medium', value: 'medium', points: 200 },
    { name: 'Hard', value: 'hard', points: 300 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-2xl font-bold text-indigo-600">
        <Target className="w-8 h-8" />
        <h2>Select Difficulty Level</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {levels.map((level) => (
          <button
            key={level.value}
            onClick={() => onSelect(level.value as 'easy' | 'medium' | 'hard')}
            className="p-4 text-lg font-semibold bg-white rounded-lg shadow-md hover:bg-indigo-50 transition-colors border-2 border-transparent hover:border-indigo-300"
          >
            <div>{level.name}</div>
            <div className="text-sm text-gray-500">{level.points} points</div>
          </button>
        ))}
      </div>
    </div>
  );
}