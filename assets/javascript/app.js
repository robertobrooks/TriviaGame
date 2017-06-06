// Setting the variables first
var answers = [];
var correct = 0;
var unanswer = 0;
var incorrect = 0;
var questions = [{
    question: "The names of the four ghosts in Pac-Man are Inky, Blinky, Pinky, and ...?",
    answer: ["Cherry", "Cyan", "Clyde", "Nappy"],
    correctAnswer: "Clyde"
  },
  {
    question: "What game was originally named Jumpman?",
    answer: ["Donkey Kong", "Pacman", "Frogger", "Dig Dug"],
    correctAnswer: "Donkey Kong"
  },
  {
    question: "What is the primary weapon of Doom?",
    answer: ["BFG9000", "Fists", "Elven Wand", "Phoneix Rod"],
    correctAnswer: "BFG9000"
  },
  {
    question: "What game game was created by the company Taito in 1978?",
    answer: ["Asteroids", "Space Invaders", "Pong", "Frogger"],
    correctAnswer: "Space Invaders"
  },
  {
    question: "What's Balrog's name in Street Fighter II - Japanese version?",
    answer: ["Vega", "Blanka", "M. Bison", "Sagat"],
    correctAnswer: "M. Bison"
  },
  {
    question: "In 2010, what game became the most downloaded game of all time?",
    answer: ["Minecraft", "Super Mario Bros.", "Tetris", "Mario Kart"],
    correctAnswer: "Donkey Kong"
  },
  {
    question: "How many Guinness World Records does Halo hold?",
    answer: ["2", "3", "4", "5"],
    correctAnswer: "5"
  },
];

// On-Click Button 'Start'
$('#start').on('click', function() {
  $("#button").empty();
  countDown(60, "timer");
  startGame();
});


// Functions
function startGame() {
  var questionString = '';

  for (var i = 0; i < questions.length; i++) {
    var answerString = '';
    questionString = '<div class="panel"><div>' + (i + 1) + '. ' + questions[i].question + '</div>';

    answerString = '<div"><div class="col-xs-12"><div class="btn-group btn-group-vertical" data-toggle="buttons">';

    for (var j = 0; j < questions[i].answer.length; j++) {
      answerString += '<label class="btn"><input name="answer' + i + '" type="radio" value="' + questions[i].answer[j] + '"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i><span>' + questions[i].answer[j] + '</span></input></label>';
    }

    answerString += '</div></div>';

    $('#questions').append('<div class="question">' + questionString + answerString + '</div></div>');
  }

}

// Set the countdown
function countDown(sec, el) {

  var element = document.getElementById(el);
  element.innerHTML = "<h3>Time Remaining: " + sec + " seconds</h3><hr>";

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
