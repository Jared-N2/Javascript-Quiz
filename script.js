// GIVEN I am taking a code quiz
// WHEN I click the start button
// make a start button
var timer = document.getElementById('timer');
var questionBox = document.getElementById('qBox');

var startBtn = document.getElementById("start")
startBtn.addEventListener('click', function () {
    start()
})

function start() {
    startBtn.classList.add("hide");
    timer.classList.remove('hide');
    questionBox.classList.remove('hide')


    document.getElementById("Question1").innerHTML = questions[0].question
    var timeLeft = 60

    setInterval(function() {
        timer.innerHTML = timeLeft
        timeLeft--

    }, 1000)


}

if(button == wrong){
    timeLeft = timeleft -= 10
}
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