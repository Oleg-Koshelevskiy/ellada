let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".header-nav");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

let closeBtn = document.querySelector(".btn-close");
let priceGym = document.querySelector('.price-gym');
let modal1 = document.querySelector('.modal1');


function openModal1() {
  modal1.classList.add("show");
  modal1.classList.remove("hide");
}

function closeModal1() {
  modal1.classList.add("hide");
  modal1.classList.remove("show");
}

closeBtn.addEventListener("click", function (e) {
  closeModal1()
});

modal1.addEventListener("click", function (e) {
  if (e.target === modal1) {
    closeModal1();
  }
});

priceGym.addEventListener('click', function () {
  openModal1();
})

