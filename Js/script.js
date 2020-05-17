
// <button onclick="myFunction()">click</button>


// function myFunction() {
//   var x = document.createElement("VIDEO");

//   if (x.canPlayType("video/mp4")) {

//     x.setAttribute("src","movie.mp4");
//   } else {
//     x.setAttribute("src","movie.ogg");
//   }

//   x.setAttribute("width", "320");
//   x.setAttribute("height", "240");
//   x.setAttribute("controls", "controls");
//   document.body.appendChild(x);
// }

$(document).ready(function(){
  $(#img-1).click(function(){
    $(.design).toggle();
  })
})
$(document).ready(function(){
  $(#img-2).click(function(){
    $(.dev).toggle();
  })
})
$(document).ready(function(){
  $(#img-3).click(function(){
    $(.product).toggle();
  })
})

$("document").ready(function(){
  $(".row .col-md-3 #one").mouseenter(function(){
      $(".row .col-md-3 #first").show();
  })
  $(".row .col-md-3 #two").mouseleave(function(){
      $(".row .col-md-3 #second").hide();
  })
  $(".row .col-md-3 #three").mouseleave(function(){
    $(".row .col-md-3 #third").hide();
  })
  $(".row .col-md-3 #four").mouseleave(function(){
    $(".row .col-md-3 #five").hide();
   })
});


  $(document).ready(function()
  $(".row .col-md-3 #five").mouseleave(functio(){
    $(".row .col-md-3 #fifth").hide();
  })
  $(".row .col-md-3 #six").mouseleave(function(){
    $(".row .col-md-3 #sixth").hide();
  })
  $(".row .col-md-3 #seven").mouseleave(function(){
    $(".row .col-md-3 #seventh").hide
  })
  $(".row .col-md-3 #eight").mouseleave(function(){
    $(".row .col-md-3 #eighth").hide(;)
  })

})

$("#button").click(function () {
  event.preventDefault()
 var name= $("#name").val();
 var email= $("#email").val();
  var message=$("#textarea").val();
  if(name==="" || email==="" || message===""){
      alert("Kindly key in your information in the output below!");
     
  }
  else{
      alert("Good work we have received your information and we are on progress!");

  }

});

