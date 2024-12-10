import React from "react";
import { Languages } from "lucide-react";

interface LanguageSelectorProps {
  onSelect: (language: string) => void;
}

export function LanguageSelector({ onSelect }: LanguageSelectorProps) {
  const languages = ["HTML", "CSS", "JavaScript", "React", "PYTHON", "JAVA"];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-2xl font-bold text-indigo-600 justify-center">
        <Languages className="w-8 h-8" />
        <h2>Select Programming Language</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => onSelect(lang.toLowerCase())}
            className="p-4 text-lg font-semibold bg-white rounded-lg shadow-md hover:bg-indigo-50 transition-colors border-2 border-transparent hover:border-indigo-300"
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}
