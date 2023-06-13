// animation.js

// Function to handle intersection observer callback
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}

// Create a new intersection observer
const observer = new IntersectionObserver(handleIntersection);

// Select the elements to observe
const elements = document.querySelectorAll('.right-column-about h2');

// Observe each element
elements.forEach(element => {
  observer.observe(element);
});
