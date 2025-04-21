let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let interval = setInterval(nextSlide, 4000);
let isPaused = false;

function nextSlide() {
  if (!isPaused) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }
}

slides.forEach(slide => {
  slide.addEventListener('mouseenter', () => {
    isPaused = true; 
  });

  slide.addEventListener('mouseleave', () => {
    setTimeout(() => {
      isPaused = false; 
    }, 4000);
  });
});
