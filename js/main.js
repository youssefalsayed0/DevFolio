let navigation = document.getElementById("navbar");
let arrow = document.getElementById("go-up");
let nums = document.querySelectorAll(".counter .number");
let statsSection = document.querySelector(".counter");
let started = false;


window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navigation.style.backgroundColor = "#000000e6";
    navigation.style.padding = "12px";
    arrow.style.visibility = "visible"
    arrow.style.opacity = "1"

  } else {
    navigation.style.backgroundColor = "";
    navigation.style.padding = "20px";
    arrow.style.visibility = "hidden"
    arrow.style.opacity = "0"
  }


  if (window.scrollY >= statsSection.offsetTop - 500) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
  
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 600 / goal);
}


/* floating arrow */
function goUp() {
  window.scrollTo({
    top: 0
  });
}
/* end floating arrow*/

/* satrt typed js*/
var typed = new Typed('#span1', {
  strings: ['Freelancer', 'Designer', 'Photographer', 'Developer'],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
  loopCount: Infinity,
});
/* end typed js*/

