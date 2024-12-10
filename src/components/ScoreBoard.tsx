import React from 'react';
import { Trophy } from 'lucide-react';
import { Player } from '../types/game';

interface ScoreBoardProps {
  players: Player[];
  currentPlayer: number;
}

export function ScoreBoard({ players, currentPlayer }: ScoreBoardProps) {
  return (
    <div className="flex justify-around items-center bg-white p-4 rounded-lg shadow-md">
      {players.map((player, index) => (
        <div
          key={index}
          className={`text-center p-3 rounded-lg ${
            currentPlayer === index ? 'bg-indigo-50 ring-2 ring-indigo-300' : ''
          }`}
        >
          <div className="flex items-center gap-2 justify-center">
            <span className="font-semibold">{player.name}</span>
            {player.score > 0 && <Trophy className="w-4 h-4 text-yellow-500" />}
          </div>
          <div className="text-2xl font-bold text-indigo-600">{player.score}</div>
        </div>
      ))}
    </div>
  );
}