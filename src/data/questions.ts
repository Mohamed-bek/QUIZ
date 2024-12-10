import { htmlQuestions } from "./languages/html";
import { javascriptQuestions } from "./languages/javascript";
import { reactQuestions } from "./languages/react";
import { pythonQuestions } from "./languages/python";
import { QuestionSet } from "./types";
import { cssQuestions } from "./languages/css";
import { javaQuestions } from "./languages/java";

export const questions: Record<string, QuestionSet> = {
  html: htmlQuestions,
  css: cssQuestions,
  javascript: javascriptQuestions,
  react: reactQuestions,
  python: pythonQuestions,
  java: javaQuestions,
};
