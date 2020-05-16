
<button onclick="myFunction()">click</button>


function myFunction() {
  var x = document.createElement("VIDEO");

  if (x.canPlayType("video/mp4")) {

    x.setAttribute("src","movie.mp4");
  } else {
    x.setAttribute("src","movie.ogg");
  }

  x.setAttribute("width", "320");
  x.setAttribute("height", "240");
  x.setAttribute("controls", "controls");
  document.body.appendChild(x);
}

