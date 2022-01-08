if (document.readyState !== "loading") {
  toggleNav();
  toggleAccordion();
  initCarousel();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    toggleNav();
    toggleAccordion();
    initCarousel();
  });
}

// toggle main navigation menu
function toggleNav() {
  const openNavBtn = document.querySelector(".js-open-main-nav");
  const closeNavBtn = document.querySelector(".js-close-main-nav");

  openNavBtn.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".main-nav").classList.add("open");
    document.body.classList.add("noscroll");
  });

  closeNavBtn.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".main-nav").classList.remove("open");
    document.body.classList.remove("noscroll");
  });
}

// show/hide accordion content
function toggleAccordion() {
  const accordion = document.querySelectorAll(".js-accordion-toggle");

  if (document.body.contains(document.querySelector(".js-accordion-toggle"))) {
    accordion.forEach(function (e) {
      e.addEventListener("click", function () {
        this.parentNode.classList.toggle("show");
      });
    });
  }
}

// set up glide.js carousel with 1 slide per view
function initCarousel() {
  if (document.body.contains(document.querySelector(".carousel-1"))) {
    const carousels = document.querySelectorAll(".carousel-1");

    const options = {
      type: "carousel",
      focusAt: "center",
      startAt: 0,
      perView: 1,
    };

    Object.values(carousels).map((carousel) => {
      new Glide(carousel, options).mount();
    });
  }
}
