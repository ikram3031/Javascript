const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
// Slider Arrow
const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');
// Mobile menu
const mobileMenu = document.querySelector('.mobile_menu');
const submenu = mobileMenu.querySelector('.submenu');

let currentSlide = 0;

// Set initial slide width
slides.forEach(slide => slide.style.width = `${100 / slides.length}%`);

// Set initial slides container width
slider.querySelector('.slides').style.width = `${slides.length * 100}%`;

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    // Update slides container transform property
    slider.querySelector('.slides').style.transform = `translateX(-${currentSlide * (100 / slides.length)}%)`;
}

prevArrow.addEventListener('click', () => {
    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    } else {
        goToSlide(slides.length - 1);
    }
});

nextArrow.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        goToSlide(currentSlide + 1);
    } else {
        goToSlide(0);
    }
});

// Mobile menu function
mobileMenu.addEventListener('click', function () {
    this.classList.toggle('active');
});