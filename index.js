const button = document.querySelector('#toggleButton');
const href = document.querySelector('href');
const content = document.querySelector('.hide');
button.addEventListener('click', function(){
  content.classList.toggle('show');
});

const button = document.querySelector('#showVPButton');
const href = document.querySelector('href');
const content = document.querySelector('.hide');
button.addEventListener('click', function(){
  content.classList.toggle('show');
});

const button = document.querySelector('#showVPSButton');
const href = document.querySelector('href');
const content = document.querySelector('.hide');
button.addEventListener('click', function(){
  content.classList.toggle('show');
});

const button = document.querySelector('#showVPAmokButton');
const href = document.querySelector('href');
const content = document.querySelector('.hide');
button.addEventListener('click', function(){
  content.classList.toggle('show');
});

var modal = document.getElementById("myBio");
var button = document.getElementById("bioButton");
var span = document.getElementById("close")[0];
button.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display="none";
}

window.onclick = function(event){
    if (event.targer == modal) {
        modal.style.display = "none";
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("myProjectSlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); 
}