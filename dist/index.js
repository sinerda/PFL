let ButtonMenu = document.querySelector('.button-burger-menu');
let menu = document.querySelector('.adaptive-menu');
ButtonMenu.addEventListener('click', function () {
  menu.classList.toggle('active');
  ButtonMenu.classList.toggle('active');
})


let link = document.querySelectorAll('.adaptive-menu li a');
for (let elem of link) {
  elem.addEventListener('click', function () {
    menu.classList.toggle('active');
    ButtonMenu.classList.toggle('active');
  })
}


// function onClickClose(menu) { // вызвать в момент показа окна, где elem - окно
//     function outsideClickListener(event) {
//         if (!menu.contains(event.target) && isVisible(menu)) {  // проверяем, что клик не по элементу и элемент виден
//              menu.style.display = 'none'; //скрыть
//              document.removeEventListener('click', outsideClickListener);
//         }
//     }
//     document.addEventListener('click', outsideClickListener)
// }
// function isVisible(menu) { //открыто ли условное окно
//    return !!menu && !!( menu.offsetWidth || menu.offsetHeight || menu.getClientRects().length );
// }