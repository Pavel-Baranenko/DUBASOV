
const header = document.querySelector('.header')
let lastScroll = 0
window.addEventListener('scroll', () => {
  if (window.scrollY < lastScroll) {
    header.classList.add('fix')
  } else {
    header.classList.remove('fix')
  }
  lastScroll = window.scrollY
})


function observeElements(selector) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.5
  });

  elements.forEach(element => {
    observer.observe(element);
  });
}

observeElements('.animate-item');






const btn = document.querySelector('.navbar-menu')
const links = document.querySelectorAll('.header__link')

if (window.innerWidth < 1080) {
  btn.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('open-menu')
  })
  links.forEach(e => {
    e.addEventListener('click', () => {
      document.querySelector('.navbar').classList.remove('open-menu')
    })
  })
}
