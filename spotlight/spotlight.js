$(".stop").on("click", redLight);
$(".slow").on("click", yellowLight);
$(".go").on("click", greenLight);
$(".caution").on("click", blinkingLight);

function redLight() {
    $(".red-circle").toggleClass("red-light");
    $(".yellow-circle").removeClass("yellow-light");
    $(".green-circle").removeClass("green-light");
}

function yellowLight() {
    $(".red-circle").removeClass("red-light");
    $(".green-circle").removeClass("green-light");
    $(".yellow-circle").toggleClass("yellow-light");
}

function greenLight() {
    $(".red-circle").removeClass("red-light");
    $(".yellow-circle").removeClass("yellow-light");
    $(".green-circle").toggleClass("green-light");
}

function blinkingLight() {
  setInterval(flash, 1000);
  function flash() {
  $(".yellow-circle").removeClass("red-light");
  $(".yellow-circle").removeClass("green-light");
  $(".yellow-circle").toggleClass("yellow-light");
  }
}
