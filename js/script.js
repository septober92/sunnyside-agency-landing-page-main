const btnNavEl = document.querySelector('.mobile-nav-btn');
const headerEl = document.querySelector('.header-nav');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});
