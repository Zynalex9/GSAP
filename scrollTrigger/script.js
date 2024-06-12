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
