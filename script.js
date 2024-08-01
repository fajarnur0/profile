const hamburgerBtn = document.querySelector(".hamburgerBtn");
const navbar = document.querySelector("nav");

hamburgerBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  const spanFirst = document.querySelector(".hamburgerBtn span:nth-child(1)");
  const spanSecond = document.querySelector(".hamburgerBtn span:nth-child(2)");
  const spanThird = document.querySelector(".hamburgerBtn span:nth-child(3)");
  spanFirst.classList.toggle("spanFirstRotate");
  spanSecond.classList.toggle("spanSecondHide");
  spanThird.classList.toggle("spanThirdRotate");
});

for (let i = 0; i < 4; i++) {
  const skill = document.querySelector(".skillBox-container").cloneNode(true);

  document.querySelector(".skills-wrapper").appendChild(skill);
}
