var userAnswer = "";
var totalCorrect = 0;

var questionOne = {
  question: "What is the meaning of 'Minnesota'?", 
  answers: [ "10,000 lakes",  "clear blue waters", "the good life", "north country" ],
  correct: "clear blue waters"
}

var questionTwo = {
  question: "When was Minnesota admitted to statehood?", 
  answers: [ "1800", "1776", "1858", "1995"],
  correct: "1858"
}

var questionThree = {
  question: "What number state is Minnesota?", 
  answers: [ "32nd", "53rd", "1st", "40th" ],
  correct: "32nd"
}

var questionFour = {
  question: "What is the state motto?", 
  answers: [ "L'Étoile du Nord", "3 months of summer", "A Prairie Home Companion", "LoonLand" ],
  correct: "L'Étoile du Nord"
}

var questionFive = {
  question: "Who is the Governor of Minnesota?", 
  answers: [ "Jesse Ventura", "Louis L'Amour", "Goldy the Gopher", "Mark Dayton" ],
  correct: "Mark Dayton"
}

var questionSix = {
  question: "What is the state nickname?", 
  answers: [ "Mall of America", "A Prairie Home Companion", "Land of 10,000 Lakes", "Land of the Loon" ],
  correct: "Land of 10,000 Lakes"
}

var questionSeven = {
  question: "What is the state bird?", 
  answers: [ "Whooping Crane", "Bluebird", "Meadowlark", "Loon" ],
  correct: "Loon"
}

var questionEight = {
  question: "What is the state flower?", 
  answers: [ "Tulip", "Lilac", "Lady's Slipper", "Sunflower" ],
  correct: "Lady's Slipper"
}

var questionNine = {
  question: "What is the state capital?", 
  answers: [ "Minneapolis", "Duluth", "St. Paul", "Rochester" ],
  correct: "St. Paul"
}

var questionTen = {
  question: "What is the meaning of the state motto: L'Étoile du Nord?", 
  answers: [ "The Star of the North", "Northern Lakes", "Northern Lights", "Moon lights" ],
  correct: "The Star of the North"
}

question_list = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen]

var questions = question_list;

function listAnswer(){for (var i = 0; i <= 10; i++);
  { question.answers[i] + "\n" }
}

while (questions.length > 0){
  var question = questions.pop();
  var userAnswer = prompt(question.question + "\nChoices: " + question.answers);
  if (userAnswer == question.correct){
    totalCorrect++;
    alert("Correct!");
  }
  else {
    alert("Incorrect!");
  }}
alert("You got " + totalCorrect + " correct")