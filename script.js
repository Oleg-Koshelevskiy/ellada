let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header-nav');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})