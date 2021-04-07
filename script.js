// GIVEN I am taking a code quiz
// WHEN I click the start button
// make a start button
var timer = document.getElementById('timer');
var questionBox = document.getElementById('qBox');
var question1 = document.querySelector("#Q1")
var button0 = document.querySelector('#button0')
var button1 = document.querySelector('#button1')
var button2 = document.querySelector('#button2')
var button3 = document.querySelector('#button3')
var timeLeft = 60
var highScore = document.querySelector('#scores')
var index = 0
var questions = [
    {
        question: "What is NOT a type of input Data ",
        answers: ["Number", "String", "Boolean", "French Fries"],
        correct: "French Fries"
    },
    {
        question: "How do you link JavaScript on our page?",
        answers: ["link", "src script=", "script src=", "html src="],
        correct: "script src=" 
    },

    {
        question: "Which are style's of CSS?",
        answers: ["background-color", "flex", "padding", "all of the above"],
        correct: "all of the above"
    },

    {
        question: "What is NOT an arithmic operator is js?",
        answers: ["/", "*", "--", "+++"],
        correct: "+++"
    }
]
var startBtn = document.getElementById("start")
startBtn.addEventListener('click', function () {
    start()
})

function start() {
    startBtn.classList.add("hide");
    timer.classList.remove('hide');
    questionBox.classList.remove('hide')


    question1.innerHTML = questions[index].question
    button0.innerHTML = questions[index].answers[0]
    button1.innerHTML = questions[index].answers[1]
    button2.innerHTML = questions[index].answers[2]
    button3.innerHTML = questions[index].answers[3]

    index = index += 1
    

    setInterval(function () {
        timer.innerHTML = timeLeft
        timeLeft--

    }, 1000)
}

function nextQuestion() {

    question1.innerHTML = questions[index].question
    button0.innerHTML = questions[index].answers[0]
    button1.innerHTML = questions[index].answers[1]
    button2.innerHTML = questions[index].answers[2]
    button3.innerHTML = questions[index].answers[3]

    
}

button0.addEventListener('click', function () {
    if (button0.innerHTML === questions[index].correct) {
        //score ++
    } else {
        timeLeft = timeLeft -= 10
    }
    
    index = index += 1
    if (index===questions.length) {
        endQuiz() 
    } else {
        nextQuestion()
    }
})
button1.addEventListener('click', function () {
    if (button1.innerHTML === questions[index].correct) {
        //score ++
    } else {
        timeLeft = timeLeft -= 10
    }
    
    index = index += 1
    if (index===questions.length) {
        endQuiz() 
    } else {
        nextQuestion()
    }
})
button2.addEventListener('click', function () {
    if (button2.innerHTML === questions[index].correct) {
        //score ++
    } else {
        timeLeft = timeLeft -= 10
    }
    

    index = index += 1
    if (index===questions.length) {
        endQuiz() 
    } else {
        nextQuestion()
    }
})
button3.addEventListener('click', function () {
    if (button3.innerHTML === questions[index].correct) {
        //score ++
    } else {
        timeLeft = timeLeft -= 10
    }
    
    index = index += 1
    if (index===questions.length) {
        endQuiz() 
    } else {
        nextQuestion()
    }
})

function saving() {
    var name = document.querySelector('#initials').value
    var scores = JSON.parse(localStorage.getItem('scores')) || []
    var newScore = {
      name: name,
      score: timeLeft
    }
    scores.push(newScore)
    localStorage.setItem('scores', JSON.stringify(scores))
  }





// if correct !(button == wrong){
//     timeLeft = timeleft -= 10
// }
// THEN a timer starts and I am presented with a question
    // make a timer & questions
// WHEN I answer a question
    // make the answers buttons & move to next question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
  // make a true/false statement to correct answer
// THEN time is subtracted from the clock
   // value of time minus wrong answer?
// WHEN all questions are answered or the timer reaches 0
   // Stop the function when questions are answered
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
   // Save lines 14-16 in local storage