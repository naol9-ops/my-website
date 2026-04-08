// QUIZ FUNCTION
function checkQuiz() {
  let score = 0;

  // Correct answers
  const answers = {
    q1: "b", // 5 + 3 = 8
    q2: "a", // 10 - 4 = 6
    q3: "b"  // 3 x 2 = 6
  };

  // Get selected answers
  const form = document.getElementById("quizForm");

  const userAnswers = {
    q1: form.q1.value,
    q2: form.q2.value,
    q3: form.q3.value
  };

  // Check answers
  for (let key in answers) {
    if (userAnswers[key] === answers[key]) {
      score++;
    }
  }

  // Show result
  document.getElementById("result").innerText =
    "Your Score: " + score + "/3";
}
