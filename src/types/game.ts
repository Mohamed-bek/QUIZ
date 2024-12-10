export interface Player {
  name: string;
  score: number;
}

export interface GameState {
  currentPlayer: number;
  players: Player[];
  currentQuestion: number;
  gameOver: boolean;
  selectionPhase: "language" | "level" | "question";
  currentLanguage?: string;
  currentLevel?: Level;
}

export type Level = "easy" | "medium" | "hard";

export interface QuestionState {
  language: string;
  level: Level;
  points: number;
}
