const backToTopButton = document.getElementById("button");

function scrollFunction() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 100) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

// The tutorial's cross-browser scroll-to-top function.
function topFunction() {
  // For Safari
  document.body.scrollTop = 0;

  // For Chrome, Firefox, Opera and other modern browsers
  document.documentElement.scrollTop = 0;

  // Smooth scrolling where supported
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", scrollFunction, { passive: true });
backToTopButton.addEventListener("click", topFunction);
scrollFunction();
