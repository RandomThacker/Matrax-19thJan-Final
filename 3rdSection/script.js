// import Splide from "@splidejs/splide";

var splide3 = new Splide("#splide", {
  classes: {
    pagination: "splide__pagination tyre-pagination",
    page: "splide__pagination__page your-class-page",
  },
  autoplay: "play",
  pauseOnHover: false,

  // intersection: {
  //   inView: {
  //     autoplay: true,
  //   },
  //   outView: {
  //     autoplay: false,
  //   },
  // },
  type: "loop",
  perPage: 1,
  arrows: false,
  interval: 2500,
  // speed: 40,
});

splide3.mount(window.splide3.Extensions);

// gsap styles, maybe not required idk

// const splitTypes = document.querySelectorAll(".reveal-type");

// splitTypes.forEach((char, i) => {
//   const text = new SplitType(char, { types: "chars" });

//   // Set initial opacity to 0
//   gsap.set(text.chars, { opacity: 1 });

//   gsap.from(
//     text.chars,
//     {
//       scrollTrigger: {
//         trigger: "#main",
//         start: "11.5% top",
//         end: "20% top",
//         scrub: true,
//         pin: true,
//         // markers: true,
//       },
//       duration: 0.5, // Adjust the duration as needed
//       stagger: 0.1,
//       opacity: 0.2, // Set the target opacity to 1
//     },
//     "a"
//   );
// });
