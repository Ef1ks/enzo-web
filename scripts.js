window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const logo = document.querySelector(".logo");

    if (window.scrollY > 0) {
        nav.style.height = "45px";
        logo.style.transform = "scale(0.5)";


    } else {
        nav.style.height = "100px";
        logo.style.transform = "scale(1)";

    }
});

/* slider */
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let current = 0;

function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;
    slidesContainer.style.transform = `translateX(-${current * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    current = (current === 0) ? slides.length - 1 : current - 1;
    updateSlidePosition();
});

nextButton.addEventListener('click', () => {
    current = (current === slides.length - 1) ? 0 : current + 1;
    updateSlidePosition();
});

// Na starcie
updateSlidePosition();