import React from "react";
import { Trophy, RotateCcw } from "lucide-react";
import { Player } from "../types/game";

interface GameOverProps {
  players: Player[];
  onRestart: () => void;
}

export function GameOver({ players, onRestart }: GameOverProps) {
  const winner = players.reduce((prev, current) =>
    prev.score > current.score ? prev : current
  );

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <Trophy className="w-16 h-16 text-yellow-500" />
      </div>
      <h2 className="text-3xl font-bold text-indigo-600">Game Over!</h2>
      <div className="space-y-2">
        <p className="text-xl">Winner: {winner.name}</p>
        <p className="text-2xl font-bold">Score: {winner.score}</p>
      </div>
      <button
        onClick={onRestart}
        className="flex items-center gap-2 mx-auto px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <RotateCcw className="w-5 h-5" />
        Play Again
      </button>
    </div>
  );
}
