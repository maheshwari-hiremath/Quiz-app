const quizData = [
 {
  question: "What is Java?",
  options: [
    "A low-level programming language",
    "A database management system",
    "A high-level, object-oriented programming language",
    "An operating system"
  ],
  correct: "A high-level, object-oriented programming language"
},
{
  question: "Which keyword is used to create a subclass in Java?",
  options: [
    "implements",
    "extends",
    "inherits",
    "subclass"
  ],
  correct: "extends"
},
{
  question: "Which of these is NOT a primitive data type in Java?",
  options: [
    "int",
    "boolean",
    "String",
    "double"
  ],
  correct: "String"
},
{
  question: "What is the default value of a boolean instance variable in Java?",
  options: [
    "true",
    "false",
    "0",
    "null"
  ],
  correct: "false"
},
{
  question: "Which method is the entry point of any Java program?",
  options: [
    "start()",
    "main()",
    "run()",
    "init()"
  ],
  correct: "main()"
},
{
  question: "What is the purpose of the ‘static’ keyword in Java?",
  options: [
    "Restricts access to method",
    "Allows sharing across all instances of a class",
    "Makes method abstract",
    "None of the above"
  ],
  correct: "Allows sharing across all instances of a class"
},
{
  question: "Which access modifier makes a member visible only within its own class?",
  options: [
    "public",
    "protected",
    "private",
    "default (no modifier)"
  ],
  correct: "private"
},
{
  question: "Which of the following is correct for method overloading?",
  options: [
    "Same method name and same parameters, different return type",
    "Same method name, different parameters",
    "Different method name, same parameters",
    "Different method name and return type"
  ],
  correct: "Same method name, different parameters"
},
{
  question: "What is an Object in Java?",
  options: [
    "Memory location",
    "Blueprint of a class",
    "Instance of a class",
    "None of the above"
  ],
  correct: "Instance of a class"
},
 {
    question: "Which language runs in a browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript"
  }
];

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const totalEl = document.getElementById('total');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  // clear old options
  optionsEl.innerHTML = '';
  
  const current = quizData[currentQuestionIndex];
  questionEl.innerText = current.question;
  
  current.options.forEach(option => {
    const btn = document.createElement('button');
    btn.innerText = option;
    btn.addEventListener('click', () => selectOption(option));
    optionsEl.appendChild(btn);
  });
}

function selectOption(selected) {
  const current = quizData[currentQuestionIndex];
  // disable further clicking (optional)
  Array.from(optionsEl.children).forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === current.correct) {
      btn.style.backgroundColor = '#8bc34a'; // green for correct
    } else if (btn.innerText === selected) {
      btn.style.backgroundColor = '#f44336'; // red for wrong
    }
  });
  
  if (selected === current.correct) {
    score++;
  }
  
  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
    nextBtn.disabled = true;
    resultEl.classList.add('hide');
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.innerText = '';
  optionsEl.innerHTML = '';
  nextBtn.classList.add('hide');
  resultEl.classList.remove('hide');
  scoreEl.innerText = score;
  totalEl.innerText = quizData.length;
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.disabled = true;
  nextBtn.classList.remove('hide');
  resultEl.classList.add('hide');
  loadQuestion();
}

startQuiz();
