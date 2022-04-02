'use strict'

function setDisplay(displayState, id) {
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

function scrollFunction() {
  if (document.documentElement.scrollTop > 580) {
    document.getElementById("popup-profile").style.bottom = "0";
  } else {
    document.getElementById("popup-profile").style.bottom = "-100px";
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

function shareButton() {
  const shareData = {
    title: 'Mustard',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org'
  }

  const buttons = document.getElementsByClassName('profile-share');
  for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i]
    btn.addEventListener('click', async () => {
      try {
        await navigator.share(shareData)
        console.log('Successful share')
      } catch(err) {
        console.log('Error: ' + err)
      }
    });
  }
}

window.onscroll = function() {
    scrollFunction()
};

function setEventListeners() {
  categoriesSmoothScroll();
  shareButton();
}