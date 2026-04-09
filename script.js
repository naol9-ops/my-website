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
function checkQuiz() {
  let score = 0;

  const answers = {
    q1: "b", // 4
    q2: "b", // 25 + 27 = 52
    q3: "b", // 45
    q4: "b", // 2x
    q5: "b"  // log10(100) = 2
  };

  const form = document.getElementById("quizForm");
  const result = document.getElementById("result");

  for (let key in answers) {
    if (form[key].value === answers[key]) {
      score++;
    }
  }

  // Feedback system
  if (score === 5) {
    result.style.color = "green";
    result.innerText = "Excellent! Score: 5/5 🔥";
  } else if (score >= 3) {
    result.style.color = "orange";
    result.innerText = "Good! Score: " + score + "/5";
  } else {
    result.style.color = "red";
    result.innerText = "Try again! Score: " + score + "/5";
  }
}
<script>
let timeLeft = 60;
let timer;

function startTimer() {
  const timerDisplay = document.getElementById("timer");

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = "Time Left: " + timeLeft + "s";

    if (timeLeft <= 0) {
      clearInterval(timer);
      timerDisplay.innerText = "Time is up! ⏰";
      checkQuiz(); // auto submit
    }
  }, 1000);
}
</script>
