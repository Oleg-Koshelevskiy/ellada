let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".header-nav");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

let modal = document.querySelectorAll(".modal");
let openModalBtn = document.querySelectorAll(".openModal");
let closeModalBtn = document.querySelectorAll(".btn-close");

let info = document.querySelectorAll(".info");
let trainerContacts = document.querySelectorAll(".trainer-contacts");

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
    console.log(e.target, item);
    if (e.target === item) {
      item.classList.add("hide");
      item.classList.remove("show");
    }
  })
);

info.forEach((item, index) =>
  item.addEventListener("click", function (e) {
    item.classList.add("hide");
    item.classList.remove("show");
    const match = [...trainerContacts].filter((el, i) => i === index);
    match[0].classList.add("show");
    match[0].classList.remove("hide");
  })
);

const btnScrollToAbout = document.querySelector("#to-about-us");
const sectionAbout = document.querySelector("#about-us");
btnScrollToAbout.addEventListener("click", function (e) {
  sectionAbout.scrollIntoView({ behavior: "smooth" });
});

const btnScrollToServises = document.querySelector("#to-servises");
const sectionServises = document.querySelector("#servises");
btnScrollToServises.addEventListener("click", function (e) {
  sectionServises.scrollIntoView({ behavior: "smooth" });
});

const btnScrollToTrainers = document.querySelector("#to-trainers");
const sectionTrainers = document.querySelector("#trainers");
btnScrollToTrainers.addEventListener("click", function (e) {
  sectionTrainers.scrollIntoView({ behavior: "smooth" });
});

const btnScrollToContacts = document.querySelector("#to-contacts");
const sectionContacts = document.querySelector("#contacts");
btnScrollToContacts.addEventListener("click", function (e) {
  sectionContacts.scrollIntoView({ behavior: "smooth" });
});
