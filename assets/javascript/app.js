// Setting the variables first
var answers = [];
var correct = 0;
var unanswer = 0;
var incorrect = 0;
var questions = [{
    question: "What island is named for the Spanish word for 'strange birds' or 'pelicans?",
    answer: ["Hawaii", "Alcatraz", "Cuba", "Dominican"],
    correctAnswer: "Alcatraz"
  },
  {
    question: "What museum in Madrid features and extensive collections of works by Francisco de Goya?",
    answer: ["Louvre", "Dali Theatre and Museum", "Prado", "Met"],
    correctAnswer: "Prado"
  },
];

// On-Click Button 'Start'
$('#start').on('click', function() {
  $("#button").empty();
  countDown(5, "timer");
  startGame();
});


// Functions
function startGame() {
  var questionString = '';

  for (var i = 0; i < questions.length; i++) {
    var answerString = '';
    questionString = '<div>' + (i + 1) + '. ' + questions[i].question + '</div>';

    for (var j = 0; j < questions[i].answer.length; j++) {
      answerString += '<input name="answer' + i + '" class="answer" type="radio" value="' + questions[i].answer[j] + '">' + questions[i].answer[j] + '</input>';
    }

    $('#questions').append('<div class="question">' + questionString + answerString + '</div>');
  }

}

// Set the countdown
function countDown(sec, el) {

  var element = document.getElementById(el);
  element.innerHTML = "Time Remaining: " + sec + " seconds";

  if (sec < 1) {
    clearTimeout(timer);
    $("#timer").hide();
    $("#questions").hide();
    return results();
  }
  sec--;
  var timer = setTimeout('countDown(' + sec + ',"' + el + '")', 1000);

}

// Display the results
function results() {
  document.getElementById('results').innerHTML = '<h2>All Done!</h2>';

  for (i = 0; i < questions.length; i++) {
    //Assign the value to the answer variables
    answers[i] = $("input[name='answer" + i + "']:checked").val();
    //Compare values to see if they're correct or unanswered
    if (answers[i] === questions[i].correctAnswer) {
      correct++;
    } else if (answers[i] === undefined) {
      unanswer++;
    } else {
      incorrect++;
    }
  }

  // Display the results
  document.getElementById('results').innerHTML += '<div>Correct Answers: ' + correct + '</div>';
  document.getElementById('results').innerHTML += '<div>Incorrect Answers: ' + incorrect + '</div>';
  document.getElementById('results').innerHTML += '<div>Unanswered: ' + unanswer + '</div>';

}
