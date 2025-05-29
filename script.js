let currentSlide = 0;
let slides = $(".slide");

function showSlide(index) {
  slides.hide();
  slides.eq(index).fadeIn();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

$(document).ready(function () {
  showSlide(currentSlide);
  setInterval(nextSlide, 3000);

  $(".next").click(nextSlide);
  $(".prev").click(prevSlide);
});


function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.remove("active");
  });
});
