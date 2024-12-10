import React from 'react';
import { History } from 'lucide-react';
import { QuestionState } from '../types/game';

interface QuestionHistoryProps {
  history: QuestionState[];
  currentPlayer: number;
}

export function QuestionHistory({ history, currentPlayer }: QuestionHistoryProps) {
  const playerHistory = history.filter((_, index) => index % 2 === currentPlayer);

  if (playerHistory.length === 0) return null;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-3">
        <History className="w-5 h-5 text-indigo-600" />
        <h3 className="font-semibold">Previous Questions</h3>
      </div>
      <div className="space-y-2">
        {playerHistory.map((question, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-sm text-gray-600 border-b border-gray-100 pb-1"
          >
            <span>
              {question.language} ({question.level})
            </span>
            <span className="font-medium text-indigo-600">+{question.points}</span>
          </div>
        ))}
      </div>
    </div>
  );
}