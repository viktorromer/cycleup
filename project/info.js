var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
  if (prevScrollPos < currentScrollPos) {
    // Scrolling down
    document.getElementById('section-info15').style.backgroundPosition = 'center bottom';
  } else {
    // Scrolling up
    document.getElementById('section-info15').style.backgroundPosition = 'center center';
  }
  prevScrollPos = currentScrollPos;
});
