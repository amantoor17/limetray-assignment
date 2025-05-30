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

function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Close menu when clicking a link
$(".nav-links a").on("click", function() {
  $("#navLinks").removeClass("active");
});

$(document).ready(function () {

  showSlide(currentSlide);
  setInterval(nextSlide, 3000);

  $(".next").click(nextSlide);
  $(".prev").click(prevSlide);

  $(".nav-burger").click(toggleNav);

});




