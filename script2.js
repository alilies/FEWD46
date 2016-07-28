function formSubmitted(event) {
  event.preventDefault();
  $("#new-item-input").val().split(",").forEach(showMovie);
  $("#new-item-form")[0].reset();
}

function showMovie(movie) {
  var listItem = $("<li>").appendTo($("#search-list"));
  var label = $("<label>").appendTo(listItem);
  $("<input>").attr("type","checkbox").appendTo(label);
  $("<span>").text(movie).appendTo(label);
}

$("#new-item-form").on("submit", formSubmitted);
