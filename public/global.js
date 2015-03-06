window.onload = function(){

  //startSlide
  document.getElementById("allStudents").onclick = all_students;
  function all_students() {
    var js_req = new XMLHttpRequest;
    js_req.addEventListener("load", function() {
      document.getElementById("results").innerHTML = js_req.response;
    });
    js_req.open("get","http://localhost:4567/");
    js_req.send();
  }


  //nextSlide
  document.getElementById("allStudents").onclick = all_students;
  function all_students() {
    var js_req = new XMLHttpRequest;
    js_req.addEventListener("load", function() {
      document.getElementById("results").innerHTML = js_req.response;
    });
    js_req.open("get","http://localhost:4567/nextslide");
    js_req.send();
  }


  //previousSlide
  document.getElementById("changeName").onclick = change_name;
  function change_name() {
    var id = prompt("What is the student ID?");
    var new_name = prompt("What is the student's name?");
    var js_req = new XMLHttpRequest;
    js_req.addEventListener("load", function() {
      document.getElementById("results").innerHTML = "Successfully changed the name.";
    });
    js_req.open("get","http://localhost:4567/students/"+ id +"/new_name/"+new_name);
    js_req.send();
  }
};
