var index = 0;
var questions = [
  {
    question: "why did the chicken cross the road?",
    choices: ['to get food', 'sleep', 'get to the other side'],
    answer: 'get to the other side'
  },
  {
    question: "why did the chicken cross the road?",
    choices: ['to get food', 'sleep', 'get to the other side'],
    answer: 'get to the other side'
  }
]

function askquestion() {
    var currentQuestion = questions[index]
    var html = html.text(currentQuestion.question)
    for (var i = 0; i < questions[index].choices;) {
      var button = questions[index].choices[i]
      button.setAttribute('value', questions[index].choices[i])
    }
  }
  function checkAnswer() {
    if (this.value !== questions[index].answer) {
      // WRONGGG time--
    } else {
      // you are right!
    }
    index++
    if (index === questions.length) {
      endquiz()
    } else {
      askquestion()
    }
  }
  function saving() {
    var scores = JSON.parse(localStorage.getItem('scores')) || []
    var newScore = {
      name: name,
      score: timeLeft
    }
    scores.push(newScore)
    localStorage.setItem('scores', JSON.stringify(scores))
  }
  function printPage() {
    var scores = JSON.parse(localStorage.getItem('scores')) || []
    for (var i = 0; i < scores.length; i++) {
      displayName.textContent(scores.name)
      displayScore.textContent(scores.score)
    }
  }
  <button value="to get food">to get food</button>