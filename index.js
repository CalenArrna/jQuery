$("h1").removeClass("margin-50");

$("h1").text("Bye");

$("button").html("<em>Don't click!</em>");

$(".hide").text("Hide Title");
$(".show").text("Show Title");
$(".toggle").text("Toggle Title");

$(".fadeIn").text("fadeIn Title");
$(".fadeOut").text("fadeOut Title");
$(".fadeToggle").text("fadeToggle Title");

$(".slide").text("Slide Title");
$(".animadness").text("Animadness!!!");


console.log($("img").attr("src"));

$("a").attr("href", "https://www.yahoo.com");

$(document).keypress(function(event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
});

$("h1").before("<button>Meow</button>");
$("h1").after("<button>Meow</button>");
$("h1").append(", LittleOne!");
$("h1").prepend("Good ");


$(".hide").on("click", function () {
  $("h1").hide();
});

$(".show").on("click", function () {
  $("h1").show();
});

$(".toggle").on("click", function () {
  $("h1").toggle();
})

$(".fadeIn").on("click", function () {
  $("h1").fadeIn();
});

$(".fadeOut").on("click", function () {
  $("h1").fadeOut();
});

$(".fadeToggle").on("click", function () {
  $("h1").fadeToggle();
});

$(".slide").on("click", function () {
  $("h1").slideToggle();
});

$(".animadness").on("click", function () {
  $("h1").slideToggle().slideToggle().slideToggle().fadeIn().animate({opacity: 0.5});
});
