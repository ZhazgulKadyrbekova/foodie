'use strict'

function setDisplay(id) {
    const elem = document.getElementById(id)
    const display = elem.style.display
    if (display === "block")
      elem.style.display = "none";
    else 
      elem.style.display = "block";
}

function setDisplayFlex(id) {
  const elem = document.getElementById(id)
  const display = elem.style.display
  if (display === "flex")
    elem.style.display = "none";
  else 
    elem.style.display = "flex";
}

function setDisplayWithVal(displayState, id) {
  const elem = document.getElementById(id)
  elem.style.display = displayState;
}

function setFeedDisplay(id) {
  const feeds = document.getElementsByClassName('feed')
  for (let i = 0; i < feeds.length; i++) {
    let current = feeds[i]
    if (current.id === id) {
      current.style.display = 'flex'
    } else {
      current.style.display = 'none'
    }
  }
}

function categoriesSmoothScroll() {
  const categories = document.getElementsByClassName('category')
  for (let i = 0; i < categories.length; i++) {
    let link = categories[i]
    let id = link.getAttribute('category')

    link.addEventListener('click', function(e) {
      e.preventDefault()

      document.querySelector('.current-category')?.classList.remove('current-category')
      e.target.classList.add('current-category')
      
      setFeedDisplay(id)

      const scrollTarget = document.getElementById(id)

      if (!scrollTarget) return

      const elementPosition = scrollTarget.getBoundingClientRect().top
      const offsetPosition = elementPosition - 70

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      })

    })
  }
}

function copyLinkToClipboard() {
  var text = document.getElementById('copy-link').getAttribute('data-copy')
  navigator.clipboard.writeText(text);
}
