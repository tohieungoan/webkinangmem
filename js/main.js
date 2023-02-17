const menu = document.querySelector(".navbar__links")
const menuButton = document.querySelector(".navbar__icons")

menuButton.addEventListener('click', () =>{
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
});


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
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}


function myFunction() {
    const element = document.getElementById("content");
    element.scrollIntoView();
  }
  function myFunction1() {
    const element = document.getElementById("header");
    element.scrollIntoView();
  }

