/*GRAB THE INPUT */


document.querySelector(".js-go").addEventListener("click", function(e) {

  //console.log(e); to see mouseevent
  var input = document.querySelector("input").value;
   //console.log(input);

   API(input);

});
document.querySelector(".js-userinput").addEventListener('keyup', function(e) {

  var input = document.querySelector("input").value;


  if (e.which === 13) { //e stands for event or write e.keycode
    console.log(input);
    x=input;

    API(input);
  }
});
/*2. DO THE DATA STUFF WITH THE API*/
function API(input){
var url = "http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=Wwlixd9KGC5e6sYVijpWYDeD27p0fvxD";

//AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open("GET", url);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', function(e) {
  var data = e.target.response;

  pushtodom(data);
});
}
/*3.SHOW ME THE GIFS */
function pushtodom(input) {


  //JSON.parse WILL CONVERT THE STRING PASSED INTO A JS OBJECT
  var response = JSON.parse(input);
  //array of objects here
  var gifurls = response.data;
  var container = document.querySelector(".js-container");
  container.innerHTML="";
  gifurls.forEach(function(image) {

    var src = (image.images.fixed_height.url);
   console.log(src);

    container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
  });



}
