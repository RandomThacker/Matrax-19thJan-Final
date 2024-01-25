var splideLeft = new Splide("#splide-left", {
  arrows: false,
  pagination: false,
  direction: "rtl",
  autoplay: true,
  interval: 3000,
  type: "loop",
});
var splideRight = new Splide("#splide-right", {
  classes: {
    pagination: "splide__pagination tyre-pagination",
    page: "splide__pagination__page your-class-page",
  },
  arrows: false,
  direction: "ltr",
  autoplay: true,
  interval: 6000,
  type: "loop",
});

splideLeft.sync(splideRight);

splideLeft.mount();
splideRight.mount();
