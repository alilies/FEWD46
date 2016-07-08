function like(event) {
    event.preventDefault();
    var count = document.querySelector(".like-count");
    var currentNumber = parseInt(count.textContent);
    count.textContent = currentNumber+1;
}

var link = document.querySelector(".like-link");
link.addEventListener("click", like);

var form = document.querySelector("#new-comment");
form.addEventListener("submit", commenting);

function commenting(event) {
  event.preventDefault();
  var newComment = document.createElement("div");
  // creates a new div called newComment
  var body = document.querySelector("#new-comment-body");
  // body is the content from the the div with the id #new-comment-body
  var container = document.querySelector("#comments")
  // container is the content from the div with the class comments
  newComment.textContent = body.value;
  // setting the text content in the new div to be whatever is
  // typed into the original comment
  newComment.classList.add("comment");
  // adds all the class css from comment to the newComment div so that it has
  // borders, margin, etc
  container.appendChild(newComment);
  // adding the new comment to my container
  var form = document.querySelector("#new-comment");
  form.reset();

  }
