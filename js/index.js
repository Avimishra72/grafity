document.addEventListener("DOMContentLoaded", (event) => {
  let bannerTl = gsap.timeline({});
  bannerTl
    .to(
      ".banner-info",
      {
        duration: 1.5,
        ease: "power2.inOut",
        left: 0,
        bottom: () => (screen.width > 991 ? 0 : 0),
        top: "unset",
      },
      0
    )
    .to(
      ".dummy-box",
      {
        duration: 1,
        left: () => (screen.width > 991 ? "-35%" : 0),
        bottom: () => (screen.width > 991 ? 0 : "-20%"),
      },
      0
    );
});

/* Journey Swiper Starts */
let journeySwiper;

function initSwiper() {
  const isLarge = window.innerWidth >= 991;

  if (journeySwiper) journeySwiper.destroy(true, true);

  journeySwiper = new Swiper(".journeySwiper", {
    slidesPerView: isLarge ? 1 : window.innerWidth >= 480 ? 1.5 : 1.1,
    spaceBetween: isLarge ? 0 : window.innerWidth >= 480 ? 30 : 20,
    speed: 800,
    effect: isLarge ? "fade" : "slide",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".journey-pagination",
      clickable: true,
    },
  });
}

// Initialize on load
window.addEventListener("load", initSwiper);
// Reinitialize on resize
window.addEventListener("resize", () => {
  clearTimeout(window.swiperResizeTimeout);
  window.swiperResizeTimeout = setTimeout(initSwiper, 300); // Debounce
});
/* Journey Swiper Ends */

let mm = gsap.matchMedia();

mm.add("(max-width: 990px)", () => {
  var banImgHeight = $(".banner-img").height();
  var banInfoHeight = $(".banner-info").height();
  $(".banner-wrap").height(banImgHeight + banInfoHeight + 50);
});

mm.add("(min-width: 991px)", () => {
  const journeyTxt = document.querySelectorAll(".journey-trigger");
  journeyTxt.forEach((section, i) => {
    const tljourneyTxt = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "0% 20%",
        end: "0% 20%",
        toggleActions: "play none none reverse",
        onEnter: () => journeySlideEnter(i),
        onEnterBack: () => journeySlideEnterBack(i),
        // markers: true,
      },
    });
    // xPercent: () => screen.width > 990 ? 110 : screen.width > 576 ? 20 : 110,
    tljourneyTxt.to(
      ".journey-list ul",
      {
        duration: 1,
        y: () => (screen.width > 1600 ? (i - 1) * -120 : (i - 1) * -90),
      },
      0
    );
    tljourneyTxt.to(
      ".journey-circle",
      { duration: 1, rotate: (i + 1) * 100 },
      0
    );
  });

  function journeySlideEnter(i) {
    journeySwiper.slideTo(i);
    $(".journey-list li").removeClass("active");
    $("#journey" + i).addClass("active");
  }

  function journeySlideEnterBack(i) {
    journeySwiper.slideTo(i - 1);
    $(".journey-list li").removeClass("active");
    $("#journey" + (i - 1)).addClass("active");
  }
});

/* Client Starts */
const clientSwiper = new Swiper(".clientSwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  speed: 800,

  pagination: {
    el: ".clients-pagination",
    clickable: true,
  },

  breakpoints: {
    480: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    641: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1201: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
/* Client Ends */

/* Client Starts */
const testimonialSwiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  speed: 800,

  pagination: {
    el: ".testi-pagination",
    clickable: true,
  },

  breakpoints: {
    641: {
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    1201: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
/* Client Ends */
