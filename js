window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    document.getElementById('nav-menu').classList.add('scrolled');
  } else {
    document.getElementById('nav-menu').classList.remove('scrolled');
  }
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('active');
});
