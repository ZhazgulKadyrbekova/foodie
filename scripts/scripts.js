'use strict'

function setDisplay(id) {
    const elem = document.getElementById(id)
    const display = elem.style.display
    if (display === "block")
      elem.style.display = "none";
    else 
      elem.style.display = "block";
}

function setDisplayWithVal(displayState, id) {
  const elem = document.getElementById(id)
  elem.style.display = displayState;
}
