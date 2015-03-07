var current_slide = 1;
var x;
var parsed_response;

request = new XMLHttpRequest();
request.open ('GET', "/1")
request.onreadystatechange = function() {
  if ((request.readyState===4) && (request.status===200)) {
    var parsed_response = JSON.parse(request.response);
    document.getElementById('title').innerHTML = parsed_response.title;
    document.getElementById('body').innerHTML = parsed_response.body;
    
  }
} //ready state change
request.send();


// window.onload = function(){
//
//   //startSlide
//   function load () {
//     console.log('load is running');
//     var js_req = new XMLHttpRequest();
//       js_req.addEventListener("load", function() {
//
//         var x = js_req.response;
//         var title = x.title;
//         var body = x.body;
//
//         document.getElementById("title").innerHTML = title;
//         document.getElementById("body").innerHTML = body;
//
//         js_req.open("get","http://localhost:4567/");
//         js_req.send();
//         ;} //EventListener
//     );} //function load
// }; //window onload

  //nextSlide
window.onload = function() {
  document.getElementById("next_btn").onclick = next_slide;
  function next_slide() {
    request = new XMLHttpRequest();
    request.open ('GET', "/2")
    request.onreadystatechange = function() {
      if ((request.readyState===4) && (request.status===200)) {
        var parsed_response = JSON.parse(request.response);
        document.getElementById('title').innerHTML = parsed_response.title;
        document.getElementById('body').innerHTML = parsed_response.body;
      }
    } //ready state change
  request.send();
}
}
  //
  //
  // //previousSlide
  // document.getElementById("prev_btn").onclick = prev_slide;
  // function prev_slide() {
  //   var js_req = new XMLHttpRequest;
  //   js_req.addEventListener("load", function() {
  //     document.getElementById("results").innerHTML =     js_req.send();
  //   });
  //   js_req.open("get","http://localhost:4567/prevslide"+ id + "/new_name/" + new_name);
  //   js_req.send();
  // }
// } //window onload
