// ===============================
// AOS ANIMATION
// ===============================

AOS.init({
duration:1000,
once:true
});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

window.addEventListener("scroll", function(){

const navbar = document.getElementById("navbar");

if(window.scrollY > 50){

navbar.classList.add("shadow-lg","bg-white");

}else{

navbar.classList.remove("shadow-lg");

}

});


// ===============================
// TYPING EFFECT LOOP
// ===============================

const words = [
"Web Developer",
"Frontend Developer",
"UI Designer"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect(){

currentWord = words[i];

if(!isDeleting){

document.getElementById("typing").innerHTML =
currentWord.substring(0, j+1);

j++;

if(j === currentWord.length){

isDeleting = true;

setTimeout(typeEffect,1200);

return;

}

}else{

document.getElementById("typing").innerHTML =
currentWord.substring(0, j-1);

j--;

if(j === 0){

isDeleting = false;

i++;

if(i === words.length){

i = 0;

}

}

}

setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();

// efek partikel
particlesJS("particles-js", {
  particles: {
    number: {
      value: 60
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.4
    },
    size: {
      value: 3
    },
    move: {
      enable: true,
      speed: 1
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.2,
      width: 1
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 0.5
        }
      }
    }
  }
});

// hover efek

const cards = document.querySelectorAll(".card-effect");

cards.forEach(card => {

card.addEventListener("mousemove", (e) => {

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

card.style.setProperty("--x", x + "px");
card.style.setProperty("--y", y + "px");

});

});