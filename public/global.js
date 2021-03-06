var current_slide = 1;

window.onload = function(){
  //Run function to load initial slide
  loadFirstSlide();

  //Set buttons to variables by their id
  nextButton = document.getElementById("next_btn");
  prevButton = document.getElementById("prev_btn");
  liButton = document.getElementById("li_btn")
  loButton = document.getElementById("lo_btn")
  slidesButton = document.getElementById("slides_btn")
  quizButton = document.getElementById("quiz_btn")

  //Listen for next_btn and prev_button
  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);
  liButton.addEventListener("click", logIn);
  loButton.addEventListener("click", logOut);
  slidesButton.addEventListener("click", loadFirstSlide);
  
}

// Load first slide on window / page load
var loadFirstSlide = function(){
  var initial_request = new XMLHttpRequest();
  initial_request.open("get", "/slides/" + current_slide);
  initial_request.onreadystatechange = function() {
    if ((initial_request.readyState===4) && (initial_request.status===200)) {
      var parsed_response = JSON.parse(initial_request.response);
      var slide = parsed_response[0];
      console.log(slide)
      document.getElementById("title").innerHTML = slide.title;
      document.getElementById("body").innerHTML = slide.body;
    }//parse
  } //onreadystatechange
  initial_request.send();
} //loadFirstSlide

//Request to login
var logIn = function() {
  //Show login page to user
  var log_req = new XMLHttpRequest();
  log_req.open("get", "/login");
  log_req.onreadystatechange = function() {
    if ((log_req.readyState===4) && (log_req.status===200)) {
      var parsed_response = JSON.parse(log_req.response);
document.getElementById("login").innerHTML = parsed_response
    }//parse
  }//onreadystatechange
  log_req.send();
} //logIn


//Load nextSlide when the next_button is pushed
var nextSlide = function(){
  //Advance the current slide to the nextSlideNumber
  //If current_slide is 8, then go to 1
  if(current_slide===8){
    current_slide = 1
  }else {
  current_slide = current_slide + 1};
  //Show the current_slide number in the console (to prove that the function nextSlideNumber is working)
  console.log(current_slide);
  //make and parse request and return to innerHTML
  var next_req = new XMLHttpRequest();
  next_req.open("get", "/slides/" + current_slide);
  next_req.onreadystatechange = function() {
    if ((next_req.readyState===4) && (next_req.status===200)) {
    var parsed_response = JSON.parse(next_req.response);
    var slide = parsed_response[0];
    console.log(slide);
    document.getElementById("title").innerHTML = slide.title;
    document.getElementById("body").innerHTML = slide.body;
    }//parse
  } //onreadystatechange
  next_req.send();
} //nextSlide

//Load prevSlide when the prev_button is pushed
var prevSlide = function(){
  if(current_slide===1){
    current_slide = 8
  }else {
  current_slide = current_slide - 1};
  console.log(current_slide);
  var prev_req = new XMLHttpRequest();
  prev_req.open("get", "/slides/" + current_slide);
  prev_req.onreadystatechange = function() {
    if ((prev_req.readyState===4) && (prev_req.status===200)) {
    var parsed_response = JSON.parse(prev_req.response);
    var slide = parsed_response[0];
    console.log(slide);
    document.getElementById("title").innerHTML = slide.title;
    document.getElementById("body").innerHTML = slide.body;
    } //parse
  } //onreadystatechange
  prev_req.send();
} //prevSlide