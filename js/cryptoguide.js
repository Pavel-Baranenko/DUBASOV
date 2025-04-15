const headerLinks = document.querySelector('.header__links')
let currentScroll = 0
window.addEventListener('scroll', () => {
  if (window.innerWidth > 1080) {
    if (window.scrollY < currentScroll) {
      headerLinks.classList.add('fix')
    } else {
      headerLinks.classList.remove('fix')
    }
    currentScroll = window.scrollY
  } else {
    if (window.scrollY > 105) {
      headerLinks.classList.add('fix')
    } else {
      headerLinks.classList.remove('fix')
    }
  }
})

let links = document.querySelectorAll('.header-line-link')
links.forEach(e => {
  e.addEventListener('click', () => {
    e.classList.add('active')
  })
})

function observeElements(selector) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let last = document.querySelector('.header-line-link.active')
        if (last) last.classList.remove('active')
        const link = document.querySelector('[data-link="' + entry.target.id + '"]');
        link.classList.add('active')
      }
    });
  }, {
    threshold: 0.5
  });

  elements.forEach(element => {
    observer.observe(element);
  });
}

observeElements('.section-item');

