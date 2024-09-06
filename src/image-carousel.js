let autoAdvancedTimeout;
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
const totalSlides = slides.length;
const getCurrentSlide = () => slides[slideIndex];
const getCurrentSlideIndex = () => slideIndex;
const prevArrow = document.querySelector(".prevArrow");
const nextArrow = document.querySelector(".nextArrow");
const dots = document.querySelectorAll(".dots");

function showSlide() {
  markActiveDot();
  slides.forEach((slide) => slide.classList.remove("activeSlide"));
  const currentSlide = getCurrentSlide();
  currentSlide.classList.add("activeSlide");
  advanceSlide();
}
function moveForward() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide();
}
function moveBackward() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide();
}
prevArrow.addEventListener("click", () => {
  clearTimeout(autoAdvancedTimeout);

  moveBackward();
});
nextArrow.addEventListener("click", () => {
  clearTimeout(autoAdvancedTimeout);
  moveForward();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideIndex = index;
    markActiveDot();
    clearTimeout(autoAdvancedTimeout);
    showSlide();
  });
});
function markActiveDot() {
  dots.forEach((d) => d.classList.remove("activeDot"));
  dots[getCurrentSlideIndex()].classList.add("activeDot");
}

function advanceSlide() {
  clearTimeout(autoAdvancedTimeout);
  autoAdvancedTimeout = setTimeout(moveForward, 5000);
}

export { showSlide, moveForward, moveBackward };
