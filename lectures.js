/*
// SELECTING CREATING DELETING ELEMENTS
console.log("--------------SELECTING CREATING DELETING ELEMENTS--------------");

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent =
  "We use cookies for improved functionality and analytics.";
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete Elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
    // Old Way => message.parentElement.removeChild(message);
  });*/

/*
// STYLES AND ATTRIBUTES AND CLASSES
console.log("--------------STYLES AND ATTRIBUTES AND CLASSES--------------");
// STYLES
message.style.backgroundColor = "#37383d";
message.style.width = "120%"; // => inline styles

console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

// ATTRIBUTES
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute("designer"));

logo.setAttribute("company", "Bankist");

console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c");
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c");

// Don't use override all the classes and allows to only add one class
logo.className = "felipe";*/

/*

// EVENTS LISTENERS
console.log("--------------EVENTS LISTENER--------------");

const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("addEventListener: Great your are reading the heading!");
};

h1.addEventListener("mouseenter", alertH1);

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// Old Way
h1.onmouseover = function (e) {
  alert("addEventListener: Great your are reading the heading!");
};
*/
/*
// EVENTS BUBBLING
console.log("--------------EVENTS BUBBLING--------------");

// Random color rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log("NAV", e.target, e.currentTarget);
  },
  false
);*/
