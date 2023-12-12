var beginScreen = document.querySelector('.begin');
var quizScreen = document.querySelector('.quiz');
var finishScreen = document.querySelector('finish');
var startBtn = document.querySelector('#start')
var quizEl = document.querySelector('#quiz')
var timeEl = document.querySelector('#time-element')
var questionEl = document.querySelector('.questions')
var choicesEl = document.querySelector('.choices')
const quizArray = [ 
    {
      question: "What is the basic code source when creating webpages?",
      answers: ["HTML", "CSS", "Element", "Python"],
      correctAnswer: "HTML"
    },
    {
      question: "Which is not considered a declaration?",
      answers: ["Const", "SetAttr", "Var", "Let"],
      correctAnswer: "SetAttr"
    },
    {
      question: "Who is the best Marvel Character?",
      answers: ["Deadpool", "Deadpool", "Deadpool", "Deadpool"],
      correctAnswer: "Deadpool"
    },
    {
      question: "Are you sure?",
      answers: ["Not really", "110%", "A little", "Maybe"],
      correctAnswer: "110%"
    },
    {
      question: "Which language is used for web styling?",
      answers: ["Java", "Python", "CSS", "HTML"],
      correctAnswer: "CSS"
    }
  ];
  var quizIndex = 0
  var timerInterval;
  var time = 100
var score = 100
function startTimer(){
    timerInterval = setInterval(function(){
        time--
        timeEl.textContent = `time ${time}`
        if (time <= 0){
            clearTimeout()
            //you can put endgame function here later
        }
    },1000)
}
function displayQuiz(){
questionEl.textContent = quizArray[quizIndex].question
let answerBtn = ''
var choiceList = quizArray[quizIndex].answers
for (i = 0; i < choiceList.length; i++){
    answerBtn += `<button>${choiceList[i]}</button>`
    choicesEl.innerHTML = answerBtn
}
}
choicesEl.addEventListener('click', function(event){
    event.preventDefault()
    var userChoice = event.target
    if (userChoice.matches('button')){
        checkChoice(userChoice)
    }
})
function checkChoice(userChoice){
    var rightAnswer = quizArray[quizIndex].correctAnswer
    console.log(userChoice.textContent, rightAnswer)
    if (userChoice === rightAnswer){
        score += 10
    }else {
        time -=10
    }
    quizIndex++
    if (quizIndex <= quizArray.length){
        displayQuiz()
    }else {
        clearInterval()
        //eventually endgame function can go here
    }
}

startBtn.addEventListener('click', function(event){
event.preventDefault()
startTimer()
displayQuiz()
})
