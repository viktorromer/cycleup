document.addEventListener("DOMContentLoaded", function() {
 
  const button = document.querySelector(".learnmore");

  const originalWidth = button.offsetWidth;

  function handleScroll() {
    const scrollPosition = window.scrollY || window.pageYOffset;

    const newWidth = originalWidth + (scrollPosition / 10);

    button.style.width = newWidth + "px";
  }

  window.addEventListener("scroll", handleScroll);
});



