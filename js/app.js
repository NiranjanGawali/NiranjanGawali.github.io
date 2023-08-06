$(document).ready(function () {
  // HERO SLIDER
  $('#hero-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 1000,
    navText: ['PREV', 'NEXT'],
    responsive: {
      0: {
        nav: false,
      },
      768: { nav: false },
    },
  });

  // PROJECT SLIDER
  $('#project-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    smartSpeed: 1000,
    navText: ['PREV', 'NEXT'],
    responsive: {
      0: { items: 1, dots: true },
      768: {
        items: 2,
        dots: false,
      },
      1140: {
        items: 2,
        center: true,
        dots: true,
      },
    },
  });

  // REVIEW SLIDER
  $('#reviews-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    items: 1,
  });
});
