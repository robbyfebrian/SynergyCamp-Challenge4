$(".owl-carousel").owlCarousel({
  stagePadding: 400,
  margin: 50,
  center: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    450: {
      items: 1,
      stagePadding: 0,
    },
    1000: {
      items: 1,
    },
  },
});

var owl = $(".owl-carousel");
owl.owlCarousel();
$(".btn-right").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".btn-left").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});
