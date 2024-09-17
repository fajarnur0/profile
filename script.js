// HAMBURGER
const hamburgerBtn = document.querySelector(".hamburgerBtn");
const navbar = document.querySelector("nav");
const spanFirst = document.querySelector(".hamburgerBtn span:nth-child(1)");
const spanSecond = document.querySelector(".hamburgerBtn span:nth-child(2)");
const spanThird = document.querySelector(".hamburgerBtn span:nth-child(3)");

hamburgerBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  if (!navbar.classList.contains("active")) {
    hamburgerBtn.classList.add("absolute");
    navbar.classList.add("active");
    navbar.classList.remove("navbar-out");
    navbar.classList.add("navbar-in");
  } else {
    navbar.classList.remove("navbar-in");
    navbar.classList.add("navbar-out");
    setTimeout(() => {
      hamburgerBtn.classList.remove("absolute");
      navbar.classList.remove("active");
      navbar.classList.remove("navbar-out");
    }, 300);
  }
  spanFirst.classList.toggle("spanFirstRotate");
  spanSecond.classList.toggle("spanSecondHide");
  spanThird.classList.toggle("spanThirdRotate");
});
navbar.addEventListener("click", function (e) {
  e.stopPropagation();
});

// FOR SKILLS
// for (let i = 0; i < 4; i++) {
const skill = document.querySelector(".skillBox-container").cloneNode(true);
document.querySelector(".skills-wrapper").appendChild(skill);
// }

// ASIDE
const asideBtn = document.getElementById("aside-button");
const aside = document.getElementById("aside");
const asideBtnIcon = document.querySelector("#aside-button i");
asideBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  asideBtnIcon.classList.toggle("fa-angle-left");
  asideBtnIcon.classList.toggle("fa-angle-right");
  aside.classList.toggle("translateX-full");
  aside.classList.toggle("slide-left");
});
aside.addEventListener("click", function (e) {
  e.stopPropagation();
});

// BODY
window.addEventListener("resize", function () {
  const screenWidth = window.innerWidth;
  if (screenWidth > 748) {
    navbar.classList.remove("navbar-in");
    navbar.classList.remove("active");
  }
});

document.body.addEventListener("click", function () {
  // ASIDE REMOVE HANDLE
  aside.classList.remove("slide-left");
  aside.classList.add("translateX-full");
  asideBtnIcon.classList.remove("fa-angle-right");
  asideBtnIcon.classList.add("fa-angle-left");

  // NAVBAR REMOVE HANDLE
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("navbar-in");
    navbar.classList.add("navbar-out");

    setTimeout(() => {
      hamburgerBtn.classList.remove("absolute");
      navbar.classList.remove("active");
      navbar.classList.remove("navbar-out");
    }, 300);
  }
  spanFirst.classList.remove("spanFirstRotate");
  spanSecond.classList.remove("spanSecondHide");
  spanThird.classList.remove("spanThirdRotate");
});
