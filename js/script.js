const navBar = document.querySelector(".navBar");
const navLink = document.querySelectorAll(".navLink");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".cross");
const menuIcon = document.querySelector(".ham-menu");
const toggle = document.querySelector(".toggler");
const small = document.querySelector(".short");
const long = document.querySelector(".long");
const gigw = document.getElementsByClassName("gigw");

function toggleMenu() {
  if (navBar.classList.contains("showMenu")) {
    navBar.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    navBar.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    gigw[0].style.top = "0";
  } else {
    gigw[0].style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

function toggleDesc() {
  console.log("clicked");
  if (toggle.classList.contains("toggled")) {
    toggle.classList.remove("toggled");
    small.style.display = "none";
    long.style.display = "block";
  } else {
    toggle.classList.add("toggled");
    small.style.display = "block";
    long.style.display = "none";
  }
}



function myMap() {
var mapProp= {
  center:new google.maps.LatLng(13.0827,80.2707),
  zoom:13,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

}
