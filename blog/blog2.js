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
  // newComment is the new comment you created
  var body = document.querySelector("#new-comment-body");
  // body is whatever you input into the original comment div
  var entry = body.value;
  // entry is the text inside the body
  var container = document.querySelector("#comments")
  container.setAttribute("class","comment");
  container.setAttribute("id","new-comment-body");
  newComment.appendChild(body);
  container.appendChild(newComment);
  container.textContent = entry;

  container.setAttribute("class","comment");
  // adding the css from the class comments to the container
  container.setAttribute("id","new-comment-body");
  // adding the css from the id new-comment-body to the container

  }
