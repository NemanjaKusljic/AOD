
//ACCORDION 

var acc = document.getElementsByClassName("content__side__accordion-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("content__side__accordion-button--plus");
    this.classList.toggle("active-accordion");

    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}