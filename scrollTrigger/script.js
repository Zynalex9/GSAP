gsap.to("#page2 h1", {
  transform: "translateX(-60%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0",
    end: "top -150%",
    scrub: 3,
    pin: true,
  },
});
gsap.from("#page3 #h1-con #h1s", {
  x: -1000,
  duration: 1,
});
gsap.from("#page3 #h1-con #h2s", {
  y: -1000,
  duration: 1,
});
gsap.from("#page3 #h1-con #h3s", {
  y: 1000,
  duration: 1,
});
gsap.from("#page3 #h1-con #h4s", {
  x: -1000,
  duration: 1,
});
gsap.from("#page3 #h1-con #h5s", {
  y: 1000,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    markers: true,
    start: "top 30%",
    end: "top 20%",

    scrub: 2,
    pin: true,
  },
});
