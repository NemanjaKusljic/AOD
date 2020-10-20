const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav--active');
    burger.classList.toggle('pressed');
})

//slider


var slideIndex = 1;
var myTimer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){nextSlide(1)}, 3000);
  })

function nextSlide(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  if (n === -1){
    myTimer = setInterval(function(){nextSlide(n + 2)}, 3000);
  } else {
    myTimer = setInterval(function(){nextSlide(n + 1)}, 3000);
  }
}

var buttons = document.getElementsByClassName("slider__buttons-button");

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("slider__slide");
  

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < buttons.length; i++) {
      buttons[i].className = buttons[i].className.replace("active-button", "");
  }
  slides[slideIndex-1].style.display = "block";
    buttons[slideIndex - 1].classList.add("active-button");
}

function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){nextSlide(n + 1)}, 3000);
  showSlides(slideIndex = n);
}

var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");


button1.addEventListener('click', function(){currentSlide(1)});
button2.addEventListener('click', function(){currentSlide(2)});
button3.addEventListener('click', function(){currentSlide(3)});







