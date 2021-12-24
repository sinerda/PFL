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
      $(".button-burger-menu").css("background-color", "rgba(38, 38, 38, 0.7)");
      $(".button-burger-menu span").css("background-color", "#fff");
      $(".adaptive-menu").css("background-color", "rgba(38, 38, 38, 0.96)");
      $(".adaptive-menu a").css("color", "#fff");
    } else if (wScroll > $(".section-6").offset().top - ($(window).height() / 10)) {
      // Blog
      $(".button-burger-menu").css("background-color", "rgba(247, 43, 60, 0.7)");
      $(".button-burger-menu span").css("background-color", "#fff");
      $(".adaptive-menu").css("background-color", "#fff");
      $(".adaptive-menu a").css("color", "rgba(247, 43, 60, 0.96)");
    } else if (wScroll > $(".section-5").offset().top - ($(window).height() / 10)) {
      // Subscribe
      $(".button-burger-menu").css("background-color", "rgba(150, 185, 44, 0.7)");
      $(".button-burger-menu span").css("background-color", "#000");
      $(".adaptive-menu").css("background-color", "rgba(150, 185, 44, 0.96)");
      $(".adaptive-menu a").css("color", "#000");
    } else if (wScroll > $(".section-4").offset().top - ($(window).height() / 10)) {
      // Gallery
      $(".button-burger-menu").css("background-color", "rgba(85, 132, 162, 0.7)");
      $(".button-burger-menu span").css("background-color", "#000");
      $(".adaptive-menu").css("background-color", "rgba(85, 132, 162, 0.96)");
      $(".adaptive-menu a").css("color", "#000");
    } else if (wScroll > $('.section-3').offset().top - ($(window).height() / 10)) {
      // Services
      $(".button-burger-menu").css("background-color", "rgba(173, 181, 189, 0.7)");
      $(".button-burger-menu span").css("background-color", "#000");
      $(".adaptive-menu").css("background-color", "rgba(173, 181, 189, 0.96)");
      $(".adaptive-menu a").css("color", "#000");
    } else if (wScroll > $('.section-2').offset().top - ($(window).height() / 10)) {
      // About Us
      $(".button-burger-menu").css("background-color", "rgba(255, 255, 255, 0.7)");
      $(".button-burger-menu span").css("background-color", "#000");
      $(".adaptive-menu").css("background-color", "rgba(255, 255, 255, 0.96)");
      $(".adaptive-menu a").css("color", "#000");
    }
    else {
      // Home
      $(".button-burger-menu").css("background-color", "rgba(255, 96, 51, 0.7)");
      $(".button-burger-menu span").css("background-color", "#fff");
      $(".adaptive-menu").css("background-color", "rgba(255, 96, 51, 0.96)");
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