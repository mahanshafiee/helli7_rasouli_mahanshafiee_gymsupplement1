/*hamburger section*/
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.onclick = function () {
  navMenu.classList.toggle('active');
  this.classList.toggle('active');
};


/*daily timer*/

