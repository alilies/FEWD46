$(".stop").on("click", redLight);
$(".slow").on("click", yellowLight);
$(".go").on("click", greenLight);
$(".caution").on("click", blinkingLight);
var interval;

function redLight() {
    clearInterval(interval);
    $(".red-circle").toggleClass("red-light");
    $(".yellow-circle").removeClass("yellow-light");
    $(".green-circle").removeClass("green-light");
}

function yellowLight() {
    clearInterval(interval);
    $(".red-circle").removeClass("red-light");
    $(".green-circle").removeClass("green-light");
    $(".yellow-circle").toggleClass("yellow-light");
}

function greenLight() {
    clearInterval(interval);
    $(".red-circle").removeClass("red-light");
    $(".yellow-circle").removeClass("yellow-light");
    $(".green-circle").toggleClass("green-light");
}

function blinkingLight() {
  interval = setInterval(flash, 1000);
  function flash() {
    $(".red-circle").removeClass("red-light");
    $(".green-circle").removeClass("green-light");
    $(".yellow-circle").toggleClass("yellow-light");
  }
}
