$(document).ready(function(event){
  $("#tap1").click(function () {
    $("#par1").slideToggle(1000);
    $("#img-1").slideToggle(1200);
  })

  $("#tap2").click(function () {
    $("#par2").slideToggle(1000);
    $("#img-2").slideToggle(1200);
  })

  $("#tap3").click(function () {
    $("#par3").slideToggle(1000);
    $("#img-3").slideToggle(1200);
  })
  $("#sub").click(function () {
    alert("Thanks for contacting us.We value your feedback.")

});

$(".onTop").hover(function () {
    $(this).css({
        "opacity": "3",
        "transition": "1s"
    })
}, function () {

    $(this).css({
        "opacity": "0"
    })
}
);
  });

