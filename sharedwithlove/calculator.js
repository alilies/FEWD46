var dresses = [
  {
    image: "dress/sandro-1.jpg",
    brand: "Sandro",
    url: "https://www.sharedwlove.com/products/sandro",
    retailPrice: 255
  },
  {
    image: "dress/sandro-2.jpg",
    brand: "Sandro",
    url: "https://www.sharedwlove.com/products/sandro-two-piece-dress",
    retailPrice: 475
  },
  {
    image: "dress/sandro-4.jpg",
    brand: "Sandro",
    url: "https://www.sharedwlove.com/products/sandro-zig-zag-pattern-color-dress",
    retailPrice: 345
  },
  {
    image: "dress/sandro-5.jpg",
    brand: "Sandro",
    url: "https://www.sharedwlove.com/products/sandro-mesh-top-and-dress",
    retailPrice: 355
  },
  {
    image: "dress/sandro-6.jpg",
    brand: "Sandro",
    url: "https://www.sharedwlove.com/products/sandro-bow-sheath",
    retailPrice: 355
  },
  {
    image: "dress/sandro-7.jpg",
    brand: "Sandro",
    url: "https://www.sharedwlove.com/products/sandro-color-block-black-and-orange-dress",
    retailPrice: 475
  },
  {
    image: "dress/sandro-8.jpg",
    brand: "Sandro",
    url: "https://www.sharedwlove.com/products/sandro-fringe-detail-dress",
    retailPrice: 415
  },
  {
    image: "dress/sandro-9.jpg",
    brand: "Sandro",
    url: "https://www.sharedwlove.com/products/sandro-red-collar-dress",
    retailPrice: 440
  },
  {
    image: "dress/sandro-10.jpg",
    brand: "Sandro",
    url: "https://www.sharedwlove.com/products/sandro-short-sleeve-pleated-dress",
    retailPrice: 290
  },
  {
    image: "dress/sandro-11.jpg",
    brand: "Sandro",
    url: "https://www.sharedwlove.com/products/sandro-deep-v-neck-maxi-dress",
    retailPrice: 470
  },
  {
    image: "dress/sandro-12.jpg",
    brand: "Sandro",
    url: "https://www.sharedwlove.com/products/sandro-chiffon-top-and-bottom-lace",
    retailPrice: 345
  },
  {
    image: "dress/sandro-13.jpg",
    brand: "Sandro",
    url: "https://www.sharedwlove.com/products/sandro-two-piece-polka-dot-sheath",
    retailPrice: 455
  },
  {
    image: "dress/sandro-14.jpg",
    brand: "Sandro",
    url: "https://www.sharedwlove.com/products/sandro-silk-collar-knit-long-sleeve-dress",
    retailPrice: 375
  },
  {
    image: "dress/zara-1.jpg",
    brand: "Zara",
    url: "https://www.sharedwlove.com/products/zara-green-lace",
    retailPrice: 26
  },
  {
    image: "dress/zara-2.jpg",
    brand: "Zara",
    url: "https://www.sharedwlove.com/products/zara-halter-neck-sheath-dress",
    retailPrice: 99
  },
  {
    image: "dress/zara-3.jpg",
    brand: "Zara",
    url: "https://www.sharedwlove.com/products/zara-red-cape-dress",
    retailPrice: 99
  },
  {
    image: "dress/zara-4.jpg",
    brand: "Zara",
    url: "https://www.sharedwlove.com/products/zara-beaded-black-dress",
    retailPrice: 119
  },
  {
    image: "dress/zara-5.jpg",
    brand: "Zara",
    url: "https://www.sharedwlove.com/products/zara-two-piece-lace-crop-top-and-pencil-skirt",
    retailPrice: 149
  },
  {
    image: "dress/aqua-1.jpg",
    brand: "Aqua",
    url: "https://www.sharedwlove.com/products/aqua-lace-dress-self-portrait",
    retailPrice: 148
  },
  {
    image: "dress/aqua-2.jpg",
    brand: "Aqua",
    url: "https://www.sharedwlove.com/products/aqua-sequin-bottom",
    retailPrice: 188
  },
  {
    image: "dress/clovercanyon-1.jpg",
    brand: "Clover Canyon",
    url: "https://www.sharedwlove.com/products/clover-canyon-patterned-maxi-dress",
    retailPrice: 317
  },
  {
    image: "dress/clovercanyon-2.jpg",
    brand: "Clover Canyon",
    url: "https://www.sharedwlove.com/products/clover-canyon-scarf-patterned-dress",
    retailPrice: 229
  },
  {
    image: "dress/clovercanyon-3.jpg",
    brand: "Clover Canyon",
    url: "https://www.sharedwlove.com/products/clover-canyon-printed-sheat",
    retailPrice: 268
  },
];

$("#payout-button").on("click", addDress);
$("#payout-button").on("click", retailPrice);
$("#payout-button").on("click", calculate);
$("#payout-button").on("click", showResults);

var brandResults = [];

function addDress(event) {
  dresses.forEach(function(dress) {
    if (dress.brand === $("#brand-dropdown").val()) {
      brandResults.push(dress);
    }
  });
}

var average;

function retailPrice(event) {
  var priceResults = [];

  brandResults.forEach(function(dress) {
    priceResults.push(dress.retailPrice);
  });

  var priceTotal = priceResults.reduce(function(previousResult, thisElement) {
    return previousResult + thisElement;
  }, 0);

  average = priceTotal / brandResults.length;
}

function calculate(event) {
   event.preventDefault();
   var timesValue = parseInt($("#times-dropdown").val());
   var priceValue = parseInt($("#price-dropdown").val());


   if ($("#price-dropdown").val() == null) {
     $(".payout-price").text(Math.round(average * timesValue * .15 * .5));
   }
   else {
     $(".payout-price").text(Math.round(timesValue * priceValue * .15 * .5));
   }
}

function showResults(event) {
  var searchResults = [];

  dresses.forEach(function(dress) {
    if (dress.price === $("#price-dropdown").val()) {
      searchResults.push(dress);
    }

    if (dress.brand === $("#brand-dropdown").val() && searchResults.indexOf(dress) === -1) {
      searchResults.push(dress);
    }
  });

  $("#dress-container").empty();
  $("#brand-container").empty();

  searchResults.slice(0, 4).forEach(function(dress) {
      var link = $("<a>").attr("href", dress.url);
      var image = $("<img>").attr("src", dress.image).addClass("image-results");
      $(image).appendTo($(link));
      $(link).appendTo($("#dress-container"));
    });

    searchResults.slice(0, 4).forEach(function(dress) {
      var span = $("<span>").text(dress.brand);
      span.addClass("brand-span");
      span.appendTo($("#brand-container"));
    });
}
