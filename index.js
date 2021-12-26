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


$(window).scroll(function () {
  if ($(window).width() < 850) {
    var wScroll = $(this).scrollTop();

    if (wScroll > $(".section-7").offset().top - ($(window).height() / 10)) {
      // Contact
      $(".button-burger-menu").css("background-color", "#262626");
      $(".button-burger-menu span").css("background-color", "#fff");
      $(".adaptive-menu").css("background-color", "#262626");
      $(".adaptive-menu a").css("color", "#fff");
    } else if (wScroll > $(".section-6").offset().top - ($(window).height() / 10)) {
      // Blog
      $(".button-burger-menu").css("background-color", "#f72b3b");
      $(".button-burger-menu span").css("background-color", "#fff");
      $(".adaptive-menu").css("background-color", "#fff");
      $(".adaptive-menu a").css("color", "#f72b3b");
    } else if (wScroll > $(".section-5").offset().top - ($(window).height() / 10)) {
      // Subscribe
      $(".button-burger-menu").css("background-color", "#96b92c");
      $(".button-burger-menu span").css("background-color", "#000");
      $(".adaptive-menu").css("background-color", "#96b92c");
      $(".adaptive-menu a").css("color", "#000");
    } else if (wScroll > $(".section-4").offset().top - ($(window).height() / 10)) {
      // Gallery
      $(".button-burger-menu").css("background-color", "#5585a2");
      $(".button-burger-menu span").css("background-color", "#000");
      $(".adaptive-menu").css("background-color", "#5585a2");
      $(".adaptive-menu a").css("color", "#000");
    } else if (wScroll > $('.section-2').offset().top - ($(window).height() / 10)) {
      // About Us
      $(".button-burger-menu").css("background-color", "#fff");
      $(".button-burger-menu span").css("background-color", "#000");
      $(".adaptive-menu").css("background-color", "#fff");
      $(".adaptive-menu a").css("color", "#000");
    }
    else {
      // Home
      $(".button-burger-menu").css("background-color", "#ff6033");
      $(".button-burger-menu span").css("background-color", "#fff");
      $(".adaptive-menu").css("background-color", "#ff6033");
      $(".adaptive-menu a").css("color", "#fff");
    }
  }
})



// jQuery(function($){
//   $(document).mouseup(function (e){ // событие клика по веб-документу
//     var div = $(".adaptive-menu"); // тут указываем ID элемента
//     if (!div.is(e.target) // если клик был не по нашему блоку
//         && div.has(e.target).length === 0) { // и не по его дочерним элементам
//       div.hide(); // скрываем его
//     }
//   });
// });