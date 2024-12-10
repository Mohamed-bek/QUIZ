import React from "react";
import { questions } from "../data/questions";
import { Level } from "../types/game";

interface QuestionCardProps {
  language: string;
  level: Level;
  questionIndex: number;
  onAnswer: (isCorrect: boolean, points: number) => void;
}

export function QuestionCard({
  language,
  level,
  questionIndex,
  onAnswer,
}: QuestionCardProps) {
  const questionSet = questions[language][level];
  const question = questionSet[questionIndex % questionSet.length];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-gray-800">
            {question.question}
          </h3>
          <div className="flex gap-2 text-sm">
            <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">
              {language}
            </span>
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full">
              {level} • {question.points} pts
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() =>
              onAnswer(index === question.correctAnswer, question.points)
            }
            className="p-3 text-left bg-gray-50 hover:bg-indigo-50 rounded-md transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
