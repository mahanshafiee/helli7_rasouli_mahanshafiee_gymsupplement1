/*hamburger section*/
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.onclick = function () {
  navMenu.classList.toggle('active');
  this.classList.toggle('active');
};


/*daily timer*/

let d = document.getElementById("days");
let h = document.getElementById("hours");
let m = document.getElementById("minute");
let s = document.getElementById("second");

d.innerHTML = 1;
h.innerHTML = 23;
m.innerHTML = 59;
s.innerHTML = 59;

function count() {
    let sec = s.innerHTML;
    sec--;
    s.innerHTML = sec;

    if (sec < 0) {
        s.innerHTML = 59;
        m.innerHTML--;
    }
    if (m.innerHTML < 0) {
        m.innerHTML = 59;
        h.innerHTML--;
    }
    if (h.innerHTML < 0) {
        h.innerHTML = 23;
        d.innerHTML--;
    }
    if (d.innerHTML < 0) {
        d.innerHTML = 0;
        h.innerHTML = 0;
        m.innerHTML = 0;
        s.innerHTML = 0;
    }
}

setInterval(count, 1000);