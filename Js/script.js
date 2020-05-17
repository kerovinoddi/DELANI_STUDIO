

$(document).ready(function () {
  $(#img - 1).click(function () {
    $(.design).toggle();
  })
})
$(document).ready(function () {
  $(#img - 2).click(function () {
    $(.dev).toggle();
  })
})
$(document).ready(function () {
  $(#img - 3).click(function () {
    $(.product).toggle();
  })
})

$("document").ready(function () {
  $(".row .col-md-3 #one").mouseenter(function () {
    $(".row .col-md-3 #first").show();
  })
  $(".row .col-md-3 #two").mouseleave(function () {
    $(".row .col-md-3 #second").hide();
  })
  $(".row .col-md-3 #three").mouseleave(function () {
    $(".row .col-md-3 #third").hide();
  })
  $(".row .col-md-3 #four").mouseleave(function () {
    $(".row .col-md-3 #five").hide();
  })
});


$(document).ready(function ()
  $(".row .col-md-3 #five").mouseleave(functio(){
  $(".row .col-md-3 #fifth").hide();
})
  $(".row .col-md-3 #six").mouseleave(function () {
  $(".row .col-md-3 #sixth").hide();
})
  $(".row .col-md-3 #seven").mouseleave(function () {
  $(".row .col-md-3 #seventh").hide
})
  $(".row .col-md-3 #eight").mouseleave(function () {
  $(".row .col-md-3 #eighth").hide(;)
  })

})

$("#button").click(function () {
  event.preventDefault()
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#textarea").val();
  if (name === "" || email === "" || message === "") {
    alert("This information is required we value it please fill in!");

  }
  else {
    alert("Great  we are pleased with you and thanks for contacting us we are looking forward to serve you!");

  }

});

