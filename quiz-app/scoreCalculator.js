function calculateScore(userAnswers, questions) {
    let score = 0;
    questions.forEach(question => {
        if (userAnswers[question.question] === question.correctAnswer) {
            score++;
        }
    });
    return score;
}
export default calculateScore;
