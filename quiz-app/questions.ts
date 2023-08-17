// questions.ts
export interface Question {
  question: string;
  choices: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    question: 'What is the capital of France?',
    choices: ['Paris', 'Madrid', 'Berlin', 'Rome'],
    correctAnswer: 'Paris'
  },
  
  {
    question: 'What is the capital of Spain?',
    choices: ['Paris', 'Madrid', 'Berlin', 'Rome'],
    correctAnswer: 'Madrid'
  },
  // Add more questions...
];

export default questions;
