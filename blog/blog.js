function like(event) {
    event.preventDefault();
    var count = document.querySelector(".like-count");
    var currentNumber = parseInt(count.textContent);
    count.textContent = currentNumber+1;
}

var link = document.querySelector(".like-link");
link.addEventListener("click", like);

var form = document.querySelector("#new-comment");
form.addEventListener("submit", comment);

function comment(event) {
  event.preventDefault();
  var newComment = document.createElement("div");
  var newContent = document.createTextNode("You're looking good!");
  var container = document.querySelector("#comments")
  newComment.textContent =
  newComment.appendChild(newContent);
  newComment.classList.add("comment");
  container.appendChild(newComment);
  }
