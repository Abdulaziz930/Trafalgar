let backToTop = document.querySelector(".backToTop");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > "400") {
    backToTop.style.opacity = "1";
  } else {
    backToTop.style.opacity = "0";
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
