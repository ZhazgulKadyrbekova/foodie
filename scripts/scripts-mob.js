'use strict'

function setDisplay(displayState, id) {
    const elem = document.getElementById(id)
    elem.style.display = displayState;
}

function scrollFunction() {
  if (document.documentElement.scrollTop > 580) {
    document.getElementById("popup-profile").style.bottom = "0";
  } else {
    document.getElementById("popup-profile").style.bottom = "-100px";
  }
}

window.onscroll = function() {
    scrollFunction()
};