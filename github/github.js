// WHEN the page loads:
//   - Get the form (document)
//   - Add an event listener
//   WHEN the form is submitted:
//     - Prevent the default form submission
//     - Get the value of the input
//     - Add the input's value to the end of the base URL ("https://api.github.com/users/")
//     - Make an HTTP request to the full URL
//     WHEN the response comes back:
//       - Parse the JSON string response (e.g., JSON.parse(response))
//       - Set the textContent of td#user-name to name
//       - Set the textContent of td#user-bio to bio
//       - Create an <img>
//       - Set the src attribute of the img to avatar_url
//       - Append img to td#user-picture

var form = document.querySelector("form");
form.addEventListener("submit", formSubmitted);
function formSubmitted(event) {
  event.preventDefault();
  var input = document.querySelector("#query");
  var url = ("https://api.github.com/users/") + input.value;
  get(url, showInfo);
}

function showInfo(data){
  var accountDeets = JSON.parse(data);
  var userName = document.querySelector("#user-name");
  userName.textContent = accountDeets.name;
  var userBio = document.querySelector("#user-bio");
  userBio.textContent = accountDeets.bio;
  var img = document.createElement("img");
  img.setAttribute("src", accountDeets.avatar_url);
  var userPicture = document.querySelector("#user-picture");
  userPicture.textContent = "";
  userPicture.appendChild(img);
}
