const slider = document.getElementById('slider');
const images = slider.getElementsByTagName('img');
let currentIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 2000);

// Initialize
showSlide(currentIndex); 