let ButtonMenu = document.querySelector('.button-burger-menu');
let menu = document.querySelector('.menu');


ButtonMenu.addEventListener('click', function () {
  menu.style.visibility = 'visible';
  menu.classList.toggle('active');
})


// Создаем медиа условие, проверяющее viewports на ширину не менее 768 пикселей.
const mediaQuery = window.matchMedia('(max-width: 850px)')

let link = document.querySelectorAll('.menu a');
if (mediaQuery.matches) {
  for (let elem of link) {
    elem.addEventListener('click', function () {
      menu.classList.toggle('active');
      menu.style.visibility = 'hidden';
    })
  }
}




