document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('nav-icon').addEventListener('click', function () {
    this.classList.toggle('open')
    document.querySelector('.navs').classList.toggle('open');
  });
})