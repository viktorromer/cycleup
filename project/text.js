// Get the h1 element
const h1Element = document.querySelector('#section-about2 h1');

// Calculate the viewport height
const windowHeight = window.innerHeight || document.documentElement.clientHeight;

// Function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (windowHeight || document.documentElement.clientHeight)
  );
}

function toggleH1Visibility() {
  if (isElementInViewport(h1Element)) {
    h1Element.classList.add('h1-visible');
  } else {
    h1Element.classList.remove('h1-visible');
  }
}

// Add an event listener to check visibility on scroll
window.addEventListener('scroll', toggleH1Visibility);

// Check visibility on page load
toggleH1Visibility();