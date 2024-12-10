import { useState } from "react";
import { GameState, Level, QuestionState } from "../types/game";

export function useGameLogic() {
  const [gameState, setGameState] = useState<GameState>({
    currentPlayer: 0,
    players: [
      { name: "Player 1", score: 0 },
      { name: "Player 2", score: 0 },
    ],
    currentQuestion: 0,
    gameOver: false,
    selectionPhase: "language",
  });

  const [questionHistory, setQuestionHistory] = useState<QuestionState[]>([]);

  const handleLanguageSelect = (language: string) => {
    setGameState((prev) => ({
      ...prev,
      currentLanguage: language,
      selectionPhase: "level",
    }));
  };

  const handleLevelSelect = (level: Level) => {
    setGameState((prev) => ({
      ...prev,
      currentLevel: level,
      selectionPhase: "question",
    }));
  };

  const handleAnswer = (isCorrect: boolean, points: number) => {
    setGameState((prev) => {
      const newPlayers = [...prev.players];
      if (isCorrect) {
        newPlayers[prev.currentPlayer].score += points;
      }

      // Record question history
      setQuestionHistory((history) => [
        ...history,
        {
          language: prev.currentLanguage!,
          level: prev.currentLevel!,
          points: isCorrect ? points : 0,
        },
      ]);

      const nextPlayer = (prev.currentPlayer + 1) % 2;
      const totalRounds = 6; // 3 questions per player
      const isGameOver = prev.currentQuestion + 1 >= totalRounds;

      return {
        ...prev,
        players: newPlayers,
        currentPlayer: nextPlayer,
        currentQuestion: prev.currentQuestion + 1,
        selectionPhase: isGameOver ? "question" : "language",
        gameOver: isGameOver,
        currentLanguage: undefined,
        currentLevel: undefined,
      };
    });
  };

  const restartGame = () => {
    setGameState({
      currentPlayer: 0,
      players: [
        { name: "Player 1", score: 0 },
        { name: "Player 2", score: 0 },
      ],
      currentQuestion: 0,
      gameOver: false,
      selectionPhase: "language",
    });
    setQuestionHistory([]);
  };

  return {
    gameState,
    questionHistory,
    handleLanguageSelect,
    handleLevelSelect,
    handleAnswer,
    restartGame,
  };
}
