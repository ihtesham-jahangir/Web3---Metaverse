// scoreCalculator.ts
import { Question } from './questions.js';

interface UserAnswers {
  [key: string]: string;
}

function calculateScore(userAnswers: UserAnswers, questions: Question[]): number {
  let score = 0;

  questions.forEach(question => {
    if (userAnswers[question.question] === question.correctAnswer) {
      score++;
    }
  });

  return score;
}

export default calculateScore;
