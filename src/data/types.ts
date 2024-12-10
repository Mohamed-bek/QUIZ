export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  points: number;
}

export interface QuestionSet {
  easy: Question[];
  medium: Question[];
  hard: Question[];
}