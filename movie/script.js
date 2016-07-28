function formSubmitted(event) {
  event.preventDefault();
  var url = ("http://omdbapi.com/?s=") + $("#query").val();
  $("#search-list").text("");
  $.get(url, listMovies);
}

function listMovies(results) {
  results.Search.forEach(function(movie) {
    var movieList = $("<li>").appendTo($("#search-list"));
    $("<div>").text(movie.Title).addClass("green-li").appendTo(movieList);
    $("<div>").text(movie.Year).addClass("grey-li").appendTo(movieList);
  });
}

$("#new-listing-form").on("submit", formSubmitted);
