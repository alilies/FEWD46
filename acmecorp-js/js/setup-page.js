var body = document.querySelector("body");

// Create the <header> and append it to the body...
var header = document.createElement("header");
body.appendChild(header);

var a = document.createElement("a");
a.setAttribute("href", "index.html")

var img = document.createElement("img");
img.setAttribute("src", "images/acme-corp.jpg");
img.setAttribute("width", "200");
img.setAttribute("height", "55");
img.setAttribute("id", "logo");
img.setAttribute("alt", "ACME Anvil Corporation");

body.appendChild(header);
header.appendChild(a);
a.appendChild(img);

var nav = document.createElement("nav");
var ol = document.createElement("ol");
var li = document.createElement("li");
var a1 = document.createElement("a");
var a2 = document.createElement("a");
a2.classList.add("button");

a1.textContent = "Products";
a2.textContent = "Sign Up";

li.appendChild(a1);
li.appendChild(a2);
ol.appendChild(li);
nav.appendChild(ol);
header.appendChild(nav);

var main = document.createElement(main);
main.classList.add("container");

var h1 = document.createElement("h1");
var p1 = document.createElement("p");
var p2 = document.createElement("p");

h1.textContent = "Welcome to ACME Corp!";
p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
p2.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

body.appendChild(main);
main.appendChild(h1);
main.appendChild(p1);
main.appendChild(p2);

var footer = document.createElement(footer);
footer.classList.add("container");
var p3 = document.createElement("p");
p3.textContent = "Copyright, 2015";

body.appendChild(footer);
footer.appendChild(p);
