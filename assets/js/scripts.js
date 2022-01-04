//Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('topnav');

hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
})

//Intro Slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); 
}

// Modal element
let modal = document.getElementById('requestVisit');
//Modal open btn
let modalBtn = document.getElementById('modalBtn');
//Modal close btn
let closeBtn = document.getElementById('closeBtn');
//Listen for outside click
window.addEventListener('click', outsideClick);

modalBtn.addEventListener('click', modalOpen);
closeBtn.addEventListener('click', modalClose);

function modalOpen() {
  modal.style.display = 'block';
}
function modalClose() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// Sticky Navbar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Footer */
document.getElementById("footerYear").innerHTML += new Date().getFullYear();