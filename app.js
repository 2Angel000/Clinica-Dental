window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel__lista"), {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: '.carousel__indicadores',
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
  });
});
