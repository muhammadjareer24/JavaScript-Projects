const quizURL = "https://opentdb.com/api.php?amount=20&category=18&difficulty=medium&type=multiple";
let currentQuestionIndex = 0;
let questions = [];
let score = 0;

const questionElement = document.getElementById('ques');
questionElement.innerHTML = '<div class="spinner"></div>';


function fetchQuizData() {
  fetch(quizURL)
    .then(response => response.json())
    .then(data => {
      questions = data.results;

      showQuestion(); 
    })
    .catch(error => {
      questionElement.innerText = "Failed to load questions. Please try again.";
      console.error("Error fetching quiz data:", error);
    });
}

function showQuestion() {
  const answerButtonsElement = document.getElementById('ans-btns');
  const nextButton = document.getElementById('next-btn');

  answerButtonsElement.innerHTML = '';  
  nextButton.style.display = 'none';    

  const currentQuestion = questions[currentQuestionIndex];  
  const correctAnswer = currentQuestion.correct_answer;
  const answers = [...currentQuestion.incorrect_answers, correctAnswer].sort(() => Math.random() - 0.5); 

  questionElement.innerHTML = `${currentQuestionIndex + 1}: ${currentQuestion.question}`;

  answers.forEach(answer => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = answer;
    button.addEventListener('click', () => selectAnswer(button, correctAnswer));
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(selectedButton, correctAnswer) {
  const buttons = document.querySelectorAll('.btn');
  const nextButton = document.getElementById('next-btn');

  buttons.forEach(button => button.disabled = true);

  if (selectedButton.innerText === correctAnswer) {
    selectedButton.classList.add('correct');
    score++;  
  } else {
    selectedButton.classList.add('incorrect');
    
    buttons.forEach(button => {
      if (button.innerText === correctAnswer) {
        button.classList.add('correct');
      }
    });
  }

  nextButton.style.display = 'block'; 
}

const nextButton = document.getElementById('next-btn');
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
});

function showResults() {
  const quizElement = document.querySelector('.quiz');
  quizElement.innerHTML = `
    <h2>Your Score: ${score} out of ${questions.length}</h2>
    <button class="restart-btn" onclick="location.reload()" style="display: block;">Restart Quiz</button>
  `;
}


fetchQuizData();
