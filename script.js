"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const btnScrolTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrolTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();

  // Scrolling
  /*  window.scrollTo(
      s1coords.left + window.screenX,
      s1coords.top + window.scrollY
    );*/

  // Old Way
  /*  window.scrollTo({
      left: s1coords.left + window.screenX,
      top: s1coords.top + window.scrollY,
      behavior: "smooth",
    });*/

  // New way work on new browsers
  section1.scrollIntoView({ behavior: "smooth" });
});
