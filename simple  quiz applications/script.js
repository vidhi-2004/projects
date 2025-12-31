const questions = {
  html: [
    { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Markup Language"], a: 0 },
    { q: "Who is the father of HTML?", options: ["Rasmus Lerdorf", "Tim Berners-Lee", "Brendan Eich", "Sergey Brin"], a: 1 },
    { q: "Which tag is used to create a hyperlink?", options: ["<link>", "<a>", "<href>", "<hyper>"], a: 1 },
    { q: "How can you make a numbered list?", options: ["<ul>", "<ol>", "<dl>", "<list>"], a: 1 },
    { q: "What is the correct HTML for inserting an image?", options: ['<img href="image.gif">', '<img src="image.gif">', '<image src="image.gif">', '<img>image.gif</img>'], a: 1 },
    { q: "Which HTML tag is used to define an internal style sheet?", options: ["<css>", "<style>", "<script>", "<link>"], a: 1 },
    { q: "Which is the correct HTML element for the largest heading?", options: ["<head>", "<h6>", "<h1>", "<heading>"], a: 2 },
    { q: "What is the correct HTML for creating a checkbox?", options: ['<input type="check">', '<check>', '<input type="checkbox">', '<checkbox>'], a: 2 },
    { q: "Which attribute specifies an alternate text for an image?", options: ["src", "alt", "title", "href"], a: 1 },
    { q: "In HTML5, which tag is used to define navigation links?", options: ["<nav>", "<navigation>", "<menu>", "<links>"], a: 0 }
  ],
  css: [
    { q: "What does CSS stand for?", options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"], a: 2 },
    { q: "Which is the correct CSS syntax?", options: ["body {color: black}", "{body;color:black}", "body:color=black", "{body:color=black;}"], a: 0 },
    { q: "How do you add a background color in CSS?", options: ["background-color:", "color:", "bgcolor:", "background:"], a: 0 },
    { q: "Which property controls text size?", options: ["font-style", "text-size", "font-size", "text-style"], a: 2 },
    { q: "How do you make a list not display bullets?", options: ["list-style-type: none", "bullet: none", "list: none", "type: none"], a: 0 },
    { q: "Which selector targets an element with id='demo'?", options: [".demo", "*demo", "#demo", "demo"], a: 2 },
    { q: "How do you select all p elements inside a div?", options: ["div p", "div.p", "div + p", "p > div"], a: 0 },
    { q: "What is the default value of position property?", options: ["relative", "fixed", "absolute", "static"], a: 3 },
    { q: "How do you create a flexbox container?", options: ["display: flexbox", "display: flex", "float: flex", "position: flex"], a: 1 },
    { q: "Which property is used to create space between elements?", options: ["padding", "border", "margin", "spacing"], a: 2 }
  ],
  js: [
    { q: "Inside which HTML element do we put JavaScript?", options: ["<js>", "<scripting>", "<javascript>", "<script>"], a: 3 },
    { q: "How do you create a function in JavaScript?", options: ["function = myFunction()", "function myFunction()", "function:myFunction()", "create function myFunction()"], a: 1 },
    { q: "How do you call a function named 'myFunction'?", options: ["call myFunction()", "myFunction()", "call function myFunction()", "execute myFunction()"], a: 1 },
    { q: "How to write an IF statement?", options: ["if i == 5 then", "if i = 5", "if (i == 5)", "if i == 5"], a: 2 },
    { q: "Which event occurs when user clicks on HTML element?", options: ["onchange", "onclick", "onmouseclick", "onmouseover"], a: 1 },
    { q: "How do you declare a JavaScript variable?", options: ["variable carName;", "v carName;", "var carName;", "let carName;"], a: 3 },
    { q: "Which operator is used to assign a value?", options: ["*", "=", "==", "=>"], a: 1 },
    { q: "What will Boolean(5 < 10) return?", options: ["false", "true", "NaN", "undefined"], a: 1 },
    { q: "How to access the first element of an array 'arr'?", options: ["arr[1]", "arr.first()", "arr[0]", "arr.get(0)"], a: 2 },
    { q: "What does 'this' keyword refer to in a method?", options: ["The parent object", "The global object", "The function itself", "undefined"], a: 0 }
  ]
};

let currentSection = '';
let currentQuestion = 0;
let score = { html: 0, css: 0, js: 0 };
let selectedAnswer = null;

const sectionCards = document.querySelectorAll('.section-card');
const quizArea = document.getElementById('quiz-area');
const sectionTitle = document.getElementById('section-title');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const resultDiv = document.getElementById('result');
const finalScore = document.getElementById('final-score');

sectionCards.forEach(card => {
  card.addEventListener('click', () => {
    currentSection = card.dataset.section;
    currentQuestion = 0;
    score[currentSection] = 0;
    document.getElementById('section-selection').classList.add('hide');
    quizArea.classList.remove('hide');
    sectionTitle.textContent = card.textContent;
    loadQuestion();
  });
});

function loadQuestion() {
  const q = questions[currentSection][currentQuestion];
  questionText.textContent = q.q;
  optionsContainer.innerHTML = '';
  selectedAnswer = null;
  nextBtn.disabled = true;

  progressText.textContent = `Question ${currentQuestion + 1} of 10`;
  progressFill.style.width = `${((currentQuestion) / 10) * 100}%`;

  q.options.forEach((opt, i) => {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'answer';
    radio.value = i;

    radio.addEventListener('change', () => {
      selectedAnswer = i;
      nextBtn.disabled = false;
    });

    label.appendChild(radio);
    label.appendChild(document.createTextNode(opt));
    optionsContainer.appendChild(label);
  });
}

nextBtn.addEventListener('click', () => {
  if (selectedAnswer === null) return;

  if (parseInt(selectedAnswer) === questions[currentSection][currentQuestion].a) {
    score[currentSection]++;
  }

  currentQuestion++;

  if (currentQuestion < 10) {
    loadQuestion();
  } else {
    finishSection();
  }
});

function finishSection() {
  progressFill.style.width = '100%';
  
  setTimeout(() => {
    quizArea.classList.add('hide');
    
    if (currentSection === 'js') {
      showFinalResult();
    } else {
      alert(`You scored ${score[currentSection]}/10 in ${currentSection.toUpperCase()}!`);
      document.getElementById('section-selection').classList.remove('hide');
    }
  }, 800);
}

function showFinalResult() {
  finalScore.textContent = `Final Scores:\nHTML: ${score.html}/10\nCSS: ${score.css}/10\nJavaScript: ${score.js}/10`;
  resultDiv.classList.remove('hide');
}
document.getElementById('restart-btn').addEventListener('click', () => {
  resultDiv.classList.add('hide');
  document.getElementById('section-selection').classList.remove('hide');
});
