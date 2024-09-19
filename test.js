let currentSlide = 0;
const slides = document.querySelectorAll('.header-carousel-item');
const totalSlides = slides.length;

function moveSlide(direction) {
  currentSlide += direction;

  // Reset to first slide if we go past the last one
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } 
  // Move to last slide if we go before the first one
  else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  // Translate the slider container to show the current slide
  const slider = document.querySelector('.header-carousel');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Automatic slide transition every 5 seconds
function autoSlide() {
  moveSlide(1);
  setTimeout(autoSlide, 5000); // 5 seconds delay between slides
}

// Start the auto-slide when the page loads
window.onload = function() {
  setTimeout(autoSlide, 5000);
};
