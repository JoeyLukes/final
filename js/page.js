const preloader = document.querySelector('.preloader');

const fadeEffect = setInterval(() => {
  // if we don't set opacity 1 in CSS, then   //it will be equaled to "", that's why we   // check it
  if (!preloader.style.opacity) {
    preloader.style.opacity = 2;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= .15;
  } else {
    clearInterval(fadeEffect);
  }
}, 200);


window.addEventListener('load', fadeEffect);

setTimeout(function(){ alert("Hello"); }, 3000);

function navToggle() {
  var x = document.getElementById("main-nav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
