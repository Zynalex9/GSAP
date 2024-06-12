const openBtn = document.getElementById("open");
const crossBtn = document.getElementById("cross");
var tl = gsap.timeline();
tl.to("#full", {
  right: 0,
  duration: 0.5,
});
tl.from("#full h4", {
  opacity: 0,
  y: -20,
  duration: 0.3,
  stagger: 0.1,
});
tl.from("#full i", {
  opacity: 0,
});
tl.pause();
openBtn.addEventListener("click", function () {
  tl.play();
});
crossBtn.addEventListener("click", function () {
  tl.reverse();
  
});
