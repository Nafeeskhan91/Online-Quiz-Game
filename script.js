// questions.js
const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "None of the above"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which of the following is not a JavaScript framework/library?",
        options: ["React", "Angular", "Vue", "Java"],
        answer: "Java"
    }
];

// script.js
let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const question = questions[currentQuestionIndex];
    
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    
    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.textContent = option;
        optionElement.classList.add('option');
        optionElement.onclick = () => checkAnswer(option);
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        score++;
        document.getElementById('result').textContent = 'Correct!';
    } else {
        document.getElementById('result').textContent = 'Incorrect!';
    }
    disableOptions();
}

function disableOptions() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.onclick = null;
    });
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        document.getElementById('result').textContent = '';
        displayQuestion();
        document.getElementById('next-btn').disabled = true;
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const container = document.querySelector('.container');
    container.innerHTML = `<h2>Quiz Completed!</h2><p>Your score is: ${score}/${questions.length}</p>`;
}

displayQuestion();
