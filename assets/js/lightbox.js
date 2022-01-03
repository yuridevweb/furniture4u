// Open the Modal
function openModal() {
  document.getElementById("lb-myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("lb-myModal").style.display = "none";
}

let slideInd = 1;
showSlide(slideInd);

// Next/previous controls
function plusSlides(n) {
  showSlide(slideInd += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlide(slideInd = n);
}

function showSlide(n) {
  let count;
  let slide = document.getElementsByClassName("lb-mySlides");
  let dot = document.getElementsByClassName("lb-demo");
  let captionText = document.getElementById("lb-caption");
  if (n > slide.length) {slideInd = 1}
  if (n < 1) {slideInd = slide.length}
  for (count = 0; count < slide.length; count++) {
    slide[count].style.display = "none";
  }
  for (count = 0; count < dot.length; count++) {
    dot[count].className = dot[count].className.replace(" active", "");
  }
  slide[slideInd-1].style.display = "block";
  dot[slideInd-1].className += " active";
  captionText.innerHTML = dot[slideInd-1].alt;
}
