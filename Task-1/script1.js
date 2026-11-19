
const images = Array.from(document.querySelectorAll(".gallery img"));

const lightbox = document.getElementById("lightbox");
const largeImage = document.getElementById("largeImage");
const caption = document.getElementById("caption");

let currentIndex = 0;

function showImage(index) {
    currentIndex = (index + images.length) % images.length;

    largeImage.src = images[currentIndex].src;
    largeImage.alt = images[currentIndex].alt;
    caption.textContent = images[currentIndex].alt;

    lightbox.classList.add("active");
}

images.forEach((image, index) => {
    image.addEventListener("click", () => showImage(index));
});

document.getElementById("close").addEventListener("click", () => {
    lightbox.classList.remove("active");
});

document.getElementById("prev").addEventListener("click", () => {
    showImage(currentIndex - 1);
});

document.getElementById("next").addEventListener("click", () => {
    showImage(currentIndex + 1);
});

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("active")) return;

    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    } else if (event.key === "ArrowRight") {
        showImage(currentIndex + 1);
    } else if (event.key === "ArrowLeft") {
        showImage(currentIndex - 1);
    }
});
