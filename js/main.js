// change navbar styles on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// show/hide nav menu

$(".sidebar ul li").on("click", function () {
  $(".sidebar ul li.active").removeClass("active");
  $(this).addClass("active");
});

$(".open-btn").on("click", function () {
  $(".sidebar").addClass("active");
});

$(".close-btn").on("click", function (event) {
  $(".sidebar").removeClass("active");
});
