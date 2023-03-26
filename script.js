let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".header-nav");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

let modal = document.querySelectorAll('.modal');
let openModalBtn = document.querySelectorAll('.openModal')
let closeModalBtn = document.querySelectorAll(".btn-close");
console.log(modal, openModalBtn, closeModalBtn);

openModalBtn.forEach((item, index) => item.addEventListener('click', function (e){  
  const match = [...modal].filter((el, i) => i === index)  
  match[0].classList.add("show");
  match[0].classList.remove("hide");
}));

closeModalBtn.forEach((item, index) => item.addEventListener('click', function (e){  
  const match = [...modal].filter((el, i) => i === index)  
  match[0].classList.add("hide");
  match[0].classList.remove("show");
}));

modal.forEach((item) => item.addEventListener('click', function (e){
  console.log(e.target, item)  
  if (e.target === item) {
    item.classList.add("hide");
    item.classList.remove("show");
  }
}));