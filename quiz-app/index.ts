// index.ts
import chalk from 'chalk';
import startQuiz from './quiz.js';
import questions from './questions.js';
import calculateScore from './scoreCalculator.js';

async function main() {
  console.log(chalk.bold('Welcome to the Quiz!\n'));

  const userAnswers = await startQuiz();
  const score = calculateScore(userAnswers, questions);

  console.log('\nQuiz Results:');
  questions.forEach(question => {
    const userAnswer = userAnswers[question.question];
    const isCorrect = userAnswer === question.correctAnswer;
    const colorFunction = isCorrect ? chalk.green : chalk.red;
    const answerText = isCorrect ? 'Correct' : `Incorrect (Correct: ${question.correctAnswer})`;
    console.log(`- ${question.question}: ${colorFunction(answerText)}`);
  });

  console.log(chalk.bold(`\nYour score: ${score}/${questions.length}`));
}

main();
