// GIVEN I am taking a code quiz
// WHEN I click the start button
// make a start button
var timer = document.getElementById('timer');
var questionBox = document.getElementById('qBox');
var index = 0
var questions = [
    {
         question: "What is NOT a type of input Data ",
         answers: ["Number", "String", "Boolean", "French Fries"],
         correct: "French Fries"
         }, 
    {
        question: "How do you link JavaScript on our page?",
        answers: ["<link>", "<src script=>", "<script src=", "<html src=>"],
        correct: "<script src=>"
         },

    {
        question: "Which are style's of CSS?",
        answers: ["background-color","flex","padding","all of the above"],
        correct: "all of the above"
         },
    
    {
        question: "What is NOT an arithmic operator is js?",
        answers: ["/","*","--","+++"],
        correct: "+++"
       } 
]    

var startBtn = document.getElementById("start")
startBtn.addEventListener('click', function () {
    start()
})

function start() {
    // startBtn.classList.add("hide");
    timer.classList.remove('hide');
    // questionBox.classList.remove('hide')


    document.getElementById("Question1").innerHTML = questions[0].question
    document.getElementById("button0").innerHTML = questions[0].answers[0]
    document.getElementById("button1").innerHTML = questions[0].answers[1]
    document.getElementById("button2").innerHTML = questions[0].answers[2]
    document.getElementById("button3").innerHTML = questions[0].answers[3]

    
    var timeLeft = 60

    setInterval(function() {
        timer.innerHTML = timeLeft
        timeLeft--

    }, 1000)
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