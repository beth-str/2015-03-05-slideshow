var current_slide = 1;

window.onload = function(){

  //startSlide
  function load () {
    console.log('load is running');
    var js_req = new XMLHttpRequest();
      js_req.addEventListener("load", function() {

        var x = js_req.response;
        var title = x.title;
        var body = x.body;

        document.getElementById("title").innerHTML = title;
        document.getElementById("body").innerHTML = body;

        js_req.open("get","http://localhost:4567/");
        js_req.send();
        ;} //EventListener
    );} //function load
}; //window onload

  // //nextSlide
  // document.getElementById("next_btn").onclick = next_slide;
  // function next_slide() {
  //   var js_req = new XMLHttpRequest;
  //   js_req.addEventListener("load", function() {
  //
  //     var parsed_response = JSON.parse(js_req.response);
  //     console.log(parsed_response.title);
  //     var title = parsed_response.title;
  //     var body = parsed_response.body;
  //
  //     document.getElementById("title").innerHTML = title;
  //     document.getElementById("body").innerHTML = body;
  //
  //   });
  //   js_req.open("get","http://localhost:4567/")
  //   js_req.send();
  // }
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
