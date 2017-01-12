$(document).ready(function(){

  $("form#height").submit(function(event) {
    $("li").removeClass("red-text");
    var heightInput = $("#height-options").val();
    if (heightInput === "0 to 3.0 feet"){
      $(".short").addClass("red-text");
    } else if (heightInput === "3.1 to 4.5 feet"){
      $(".med").addClass("red-text");
    } else if (heightInput === "4.6 to 6.5 feet"){
      $(".tall").addClass("red-text");
    } else {
      alert("You are too tall to even be on this website. Go home!");
    }

  event.preventDefault();
  });
});
