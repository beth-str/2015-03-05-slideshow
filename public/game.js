window.onload = function(){
  quizButton = document.getElementById("quiz_btn");

  //Listen for next_btn and prev_button
  quizButton.addEventListener("click", playQuiz);
  
}

var userAnswer = "";
var totalCorrect = 0;

var questionOne = {
  question: "What is the meaning of 'Minnesota'?\n\n", 
  answers: [ "1. 10,000 lakes\n2. clear blue waters\n3. the good life\n4. north country" ],
  correct: "2"
}

var questionTwo = {
  question: "When was Minnesota admitted to statehood?\n\n", 
  answers: [ "1. 1800\n2. 1776\n3. 1858\n4. 1995"],
  correct: "3"
}

var questionThree = {
  question: "What number state is Minnesota?\n\n", 
  answers: [ "1. 32nd\n2. 53rd\n3. 1st\n4. 40th" ],
  correct: "1"
}

var questionFour = {
  question: "What is the state motto?\n\n", 
  answers: [ "1. Three months of summer\n2. A Prairie Home Companion\n3. LoonLand\n4. L'Étoile du Nord" ],
  correct: "4"
}

var questionFive = {
  question: "Who is the Governor of Minnesota?\n\n", 
  answers: [ "1. Jesse Ventura\n2. Louis L'Amour\n3. Goldy the Gopher\n4. Mark Dayton" ],
  correct: "4"
}

var questionSix = {
  question: "What is the state nickname?\n\n", 
  answers: [ "1. Mall of America\n2. A Prairie Home Companion\n3. Land of 10,000 Lakes\n4. Land of the Loon" ],
  correct: "3"
}

var questionSeven = {
  question: "What is the state bird?\n\n", 
  answers: [ "1. Bald Eagle\n2. Loon\n3. Owl\n4. Meadowlark" ],
  correct: "2"
}

var questionEight = {
  question: "What is the state flower?\n\n", 
  answers: [ "1. Lady's Slipper\n2. Tulip\n3. Lilac\n4. Sunflower" ],
  correct: "1"
}

var questionNine = {
  question: "What is the state capital?\n\n", 
  answers: [ "1. Minneapolis\n2. Duluth\n3. St. Paul\n4. Rochester" ],
  correct: "3"
}

var questionTen = {
  question: "What is the meaning of the state motto: \nL'Étoile du Nord?\n\n", 
  answers: [ "1. Northern Lakes\n2. The Star of the North\n3. Northern Lights\n4. The Moon of the North" ],
  correct: "2"
}

question_list = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen]

var questions = question_list;

function listAnswer(){for (var i = 0; i <= 4; i++);
  { question.answers[i] }
}

function playQuiz(){
  while (questions.length > 0){
    var question = questions.pop();
    var userAnswer = prompt(question.question + question.answers);
    if (userAnswer == question.correct){
      totalCorrect++;
      alert("Correct!");
    }
    else {
      alert("Incorrect!");
    }
  }
alert("You got " + totalCorrect + "/10 correct – Good job!")
};