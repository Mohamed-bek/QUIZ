import React from 'react';
import { User } from 'lucide-react';

interface TurnIndicatorProps {
  playerName: string;
  round: number;
}

export function TurnIndicator({ playerName, round }: TurnIndicatorProps) {
  return (
    <div className="flex items-center justify-between text-lg font-semibold text-gray-600 bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center gap-2">
        <User className="w-5 h-5" />
        <span>{playerName}'s Turn</span>
      </div>
      <span className="text-indigo-600">Round {round}/3</span>
    </div>
  );
}