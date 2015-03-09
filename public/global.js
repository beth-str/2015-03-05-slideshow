var current_slide = 1;
var parsed_response;
var nextButton = document.getElementById("next_btn");
var prevButton = document.getElementById("prev_btn");


window.onload = function() {

//Load initial slide on window / page load
  var initial_request = new XMLHttpRequest();
  initial_request.open ("GET", "/" + current_slide);
  initial_request.onreadystatechange = function() {
    if ((initial_request.readyState===4) && (initial_request.status===200)) {
      var parsed_response = JSON.parse(initial_request.response);
      document.getElementById("title").innerHTML = parsed_response.title;
      document.getElementById("body").innerHTML = parsed_response.body;
    }//parse
  } //onreadystatechange
  initial_request.send();
  
  //Listen for next_btn and prev_button
  nextButton.onclick, nextSlide;
  prevButton.addEventListener("click", prevSlide);
  
}; //pageLoad


  //Load nextSlide when the next_button is pushed
    var nextSlide = function () {
      //Show that this function is firing in the console
      console.log("Next slide...");
      //Advance the current slide to the nextSlideNumber
      var current_slide = current_slide + 1;
      //Show the current_slide number in the console (to prove that the function nextSlideNumber is working)
      console.log(current_slide);
      //make and parse request and return to innerHTML
      var next_request = new XMLHttpRequest();
      next_request.open ("GET", "/" + current_slide);
      var parsed_response = JSON.parse(next_request.response);
      console.log(parsed_response);
      document.getElementById("title").innerHTML = parsed_response.title;
      document.getElementById("body").innerHTML = parsed_response.body;
      next_request.send();
    } //next_slide

  //Load prevSlide when the prev_button is pushed
    var prevSlide = function () {
      alert("Prev slide...");
      var current_slide = current_slide - 1;
      console.log(current_slide);
      var prev_request = new XMLHttpRequest();
      prev_request.open ("GET", "/" + current_slide);
      var parsed_response = JSON.parse(prev_request.response);
      console.log(parsed_response);
      document.getElementById("title").innerHTML = parsed_response.title;
      document.getElementById("body").innerHTML = parsed_response.body;
      prev_request.send();
    } //prev_slide


//Change slide number to next slide
// var nextSlideNumber = function() {
//   current_slide + 1;
//   alert("Next slide is:" + current_slide);
//   return current_slide;
// }
//
// //Change slide number to previous slide
// var prevSlideNumber = function() {
//   if (current_slide===1) {
//     current_slide===5
//   } else current_slide = current_slide - 1;
//   alert("Previous slide is:" + current_slide);
//   return current_slide;
// }