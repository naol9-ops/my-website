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
if (score === 3) {
  result.style.color = "green";
} else {
  result.style.color = "red";
}
function checkQuiz() {
  let score = 0;

  const answers = {
    q1: "b",
    q2: "b",
    q3: "b",
    q4: "b",
    q5: "b"
  };

  const explanations = {
    q1: "2x + 3 = 11 → 2x = 8 → x = 4",
    q2: "5² = 25 and 3³ = 27 → 25 + 27 = 52",
    q3: "Triangle angles = 180° → 90 + 45 = 135 → x = 45°",
    q4: "Derivative of x² is 2x",
    q5: "log₁₀(100) = 2 because 10² = 100"
  };

  const form = document.getElementById("quizForm");
  const result = document.getElementById("result");
  const answersBox = document.getElementById("answers");

  let output = "<h3>Correct Answers & Explanations:</h3>";

  for (let key in answers) {
    let userAnswer = form[key].value;

    if (userAnswer === answers[key]) {
      score++;
      output += `<p style="color:green;">✔ ${key.toUpperCase()}: Correct</p>`;
    } else {
      output += `<p style="color:red;">✘ ${key.toUpperCase()}: Wrong</p>`;
    }

    output += `<p>${explanations[key]}</p><br>`;
  }

  // Score message
  result.innerText = "Your Score: " + score + "/5";

  // Show answers
  answersBox.innerHTML = output;
}
