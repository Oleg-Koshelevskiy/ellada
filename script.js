let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".header-nav");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

let modal = document.querySelectorAll(".modal");
let openModalBtn = document.querySelectorAll(".openModal");
let closeModalBtn = document.querySelectorAll(".btn-close");

openModalBtn.forEach((item, index) =>
  item.addEventListener("click", function (e) {
    const match = [...modal].filter((el, i) => i === index);
    match[0].classList.add("show");
    match[0].classList.remove("hide");
  })
);

closeModalBtn.forEach((item, index) =>
  item.addEventListener("click", function (e) {
    const match = [...modal].filter((el, i) => i === index);

    match[0].classList.add("hide");
    match[0].classList.remove("show");
  })
);

modal.forEach((item) =>
  item.addEventListener("click", function (e) {
    if (e.target === item) {
      item.classList.add("hide");
      item.classList.remove("show");
    }
  })
);

let info = document.querySelectorAll(".info");
let trainerContacts = document.querySelectorAll(".trainer-contacts");

info.forEach((item, index) =>
  item.addEventListener("click", function (e) {
    item.classList.add("hide-info");
    item.classList.remove("show-info");
    const match = [...trainerContacts].filter((el, i) => i === index);
    match[0].classList.add("show-info");
    match[0].classList.remove("hide-info");
  })
);

const btnScrollToSection = document.querySelectorAll(".nav-item");
const markedSection = document.querySelectorAll(".scrollSection");

btnScrollToSection.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    const match = [...markedSection].filter((el, i) => i === index);
    match[0].scrollIntoView({ behavior: "smooth" });
  });
});

const arrowSection = document.querySelector(".arrow-section");
const arrow = document.querySelector(".scroll-arrow");
arrow.addEventListener("click", (e) => {
  arrowSection.scrollIntoView({ behavior: "smooth" });
});

const showArrow = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    arrow.classList.add("show");
    arrow.classList.remove("hide");
  } else {
    arrow.classList.add("hide");
    arrow.classList.remove("show");
  }
};

const obsOptions = {
  root: null,
  threshold: 0,
};

const scrollObserver = new IntersectionObserver(showArrow, obsOptions);
scrollObserver.observe(arrowSection);
