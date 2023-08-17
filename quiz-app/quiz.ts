// quiz.ts
import inquirer from 'inquirer';
import questions, { Question } from './questions.js';

async function startQuiz() {
  const answers = await inquirer.prompt(
    questions.map((q: Question) => ({
      type: 'list',
      name: q.question,
      message: q.question,
      choices: q.choices
    }))
  );

  return answers;
}

export default startQuiz;
