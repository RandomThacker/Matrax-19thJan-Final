const lenis = new Lenis({
  duration: 4,
  smooth: true,
});
function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.body.addEventListener("mousemove", function (dets) {
  gsap.to(".cursor", {
    left: dets.x,
    top: dets.y,
  });
});

var splide3 = new Splide("#splide", {
  classes: {
    pagination: "splide__pagination tyre-pagination",
    page: "splide__pagination__page your-class-page",
  },
  autoplay: "play",
  pauseOnHover: false,
  type: "loop",
  perPage: 1,
  arrows: false,
  interval: 2500,
});

splide3.mount(window.splide3.Extensions);

function disableScroll() {
  var scrollY = window.scrollY;
  document.body.dataset.scrollY = scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
}

function enableScroll() {
  // Get the saved scroll position
  var scrollY = parseInt(document.body.dataset.scrollY || "0");

  // Enable scroll by setting the body's position back to its original state
  document.body.style.position = "";
  document.body.style.top = "";

  // Scroll back to the original position
  window.scrollTo(0, scrollY);

  // Remove the stored scroll position
  delete document.body.dataset.scrollY;
}

function showNav() {
  var navigation = document.getElementsByClassName("navigation")[0];
  navigation.classList.toggle("active");

  // Get the body element
  var body = document.body;

  // Toggle the 'no-scroll' class on the body
  body.classList.toggle("no-scroll");

  // If the 'no-scroll' class is present, disable scroll; otherwise, enable scroll
  if (body.classList.contains("no-scroll")) {
    disableScroll();
  } else {
    enableScroll();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    direction: "ttb",
    height: "50vh",
    wheel: true,
    perPage: 6,
    perMove: 1,
    pagination: false,
    gap: 15,
    padding: "1rem",
  });
  splide.mount();
});

function dom() {
  const canvas = document.querySelector(".heroSection>canvas");
  const context = canvas.getContext("2d");
  const imageSeq = {
    frame: 0,
  };

  function setCanvasSize() {
    const img = images[imageSeq.frame];
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;
    render();
  }

  window.addEventListener("resize", setCanvasSize);

  function files(index) {
    const data = `
      ./images/SequenceImages/jlsousa tires project 4  Urcola+.72.${
        11 + index
      }-min.png
      `;
    return data.trim();
  }

  const frameCount = 141;
  const images = [];

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 1,
      pin: true,
      trigger: "#main",
      start: "top top",
      end: "3% top",
      // markers: true,
    },
    onUpdate: render,
  });

  images[0].onload = setCanvasSize;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  gsap.from(".HeroHeading h1", {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,
      trigger: ".navBar",
      start: "top top",
      end: "center top",
      // markers: true,
    },
  });
}

dom();


function videoSection() {
  const splitTypes = document.querySelectorAll(".reveal-type");
  splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: "chars" });

    // Set initial opacity to 0
    gsap.set(text.chars, { opacity: 1 });

    gsap.from(
      text.chars,
      {
        scrollTrigger: {
          trigger: "#main",
          start: "14.3% top",
          end: "20% top",
          scrub: true,
          // pin: true,
          markers: true,
        },
        duration: 0.5, // Adjust the duration as needed
        stagger: 0.1,
        opacity: 0.2, // Set the target opacity to 1
      },
    );
  });
  ScrollTrigger.create({
    trigger: "#main",
    markers: true,
    start: "14.3% top",
    end: "20% top",
    pin: true
    // pin:".videoSection",
  });
}

videoSection();

function splitCarousel(){
  
  const splitTypes = document.querySelectorAll(".reveal-type1");
  splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: "chars" });
  
    // Set initial opacity to 0
    gsap.set(text.chars, { opacity: 1 });
  
    gsap.from(
      text.chars,
      {
        scrollTrigger: {
          trigger: "#main",
          start: "28.5% top",
          end: "34% top",
          scrub: true,
          // pin: true,
          markers: true,
        },
        duration: 0.5, // Adjust the duration as needed
        stagger: 0.1,
        opacity: 0.2, // Set the target opacity to 1
      },
    );
  });
  ScrollTrigger.create({
    trigger: "#main",
    markers: true,
    start: "28.5% top",
    end: "34% top",
    pin: true
    // pin:".videoSection",
  });
  }
  splitCarousel()

function bullStory() {
  ScrollTrigger.create({
    trigger: "#main",
    markers: true,
    start: "42.9% top",
    end: "55% top",
    pin: true,
  });
  if (window.innerWidth < 600) {
    gsap.to(".bullStoryOverlay", {
      scrollTrigger: {
        trigger: "#main",
        markers: true,
        start: "42.9% top",
        end: "55% top",
        scrub: 2,
      },
      top: "50%",
    });
  } else {
    gsap.to(".bullStoryOverlay", {
      scrollTrigger: {
        trigger: "#main",
          markers: true,
        start: "42.9% top",
        end: "55% top",
        scrub: 2,
      },
      top: "55%",
    });
  }
}
bullStory();

function logoShrink() {
    dot = document.querySelector(".dot");

  gsap.set(dot, {
    width: "142vmax", // ensures it fills every part of the screen.
    height: "142vmax",
    xPercent: -50, // center the dot in the section area
    yPercent: -50,
    top: "50%",
    left: "50%",
    transformOrigin: "center center", // Set the transform origin to the center
  });
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      start: "57.14% top",
      end: "70% top",
      scrub: 1.5,
      pin: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
      markers:true,
      onEnter: () => {
        gsap.set(".bullimg", { zIndex: 10 });
      },
      onLeaveBack: () => {
        gsap.set(".bullimg", { zIndex: 1 });
      },
    },
    defaults: { ease: "none" },
  });

  tl1.fromTo(dot, { scale: 0 }, { scale: 1 });

  if (window.innerWidth < 600) {
    tl1.to(".bullimg", { duration: 0.8, width: "55%", y: -300 }, "+.6");
    tl1.to(".nameLogo", { duration: 0.8, y: -650 }, "+.6");
    tl1.to(".logoTextSection", { duration: 0.8, y: -600 }, "+.9");
  } else {
    tl1.to(".bullimg", { duration: 0.8, width: "7.5%", top: "8%" }, "+.6");
    tl1.to(".nameLogo", { duration:1, top: "8%" }, "+.6");
    tl1.to(".logoTextSection", { duration: 0.8, top: "38%" }, "+.9");
  }

}
logoShrink();

function ecosystem() {
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");
  card1.addEventListener("mouseenter", () => {
    card2.classList.add("nonhover-card-eco");
  });

  card1.addEventListener("mouseleave", () => {
    card2.classList.remove("nonhover-card-eco");
  });

  card2.addEventListener("mouseenter", () => {
    card1.classList.add("nonhover-card-eco");
  });

  card2.addEventListener("mouseleave", () => {
    card1.classList.remove("nonhover-card-eco");
  });
}

ecosystem();

// ----------------Splide section----------------------




function myFunction(x) {
  var title = document.querySelector(".footerText")
  var email = document.querySelector(".emailtext a")
  var footerDiv = document.querySelector(".footerTextDiv")
  if (x.matches) { // If media query matches
    title.innerHTML = "We're Sure to Click!"
    email.innerHTML = "Click Here to Email Us"
  }
  else{
    title.innerHTML = "Let's Get in Touch"
    email.innerHTML = "Email Us"
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 700px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});