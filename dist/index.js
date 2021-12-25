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

// Здесь мы меняем цвета при скролле кнопки бургер-меню и адаптивного меню
$(window).scroll(function () {
  if ($(window).width() < 850) {
    // верхняя точка экрана в данный момент
    let wScroll = $(this).scrollTop(),
      // высота вьюпорта
        wHeight = $(window).height() / 10;
    // 
    // Top of sections
    let TopContact = $(".section-7").offset().top,
        TopBlog = $(".section-6").offset().top,
        TopSubscribe = $(".section-5").offset().top,
        TopGallery = $(".section-4").offset().top,
        TopServices = $('.section-3').offset().top,
        TopAboutUs = $('.section-2').offset().top,
        TopHome = $('.section-1').offset().top;
    //
    // css celectors
    const Button = $(".button-burger-menu"),
          Button_span = $(".button-burger-menu span"),
          Menu = $(".adaptive-menu"),
          Menu_a = $(".adaptive-menu a");
    // 
    // Colors 
    const cButtonContact = "rgba(38, 38, 38, 0.7)",
          cMenuContact = "rgba(38, 38, 38, 0.96)";
    
    const cButtonBlog = "rgba(247, 43, 60, 0.7)",
          cMenuBlog = "rgba(247, 43, 60, 0.96)";
    
    const cButtonSubscribe = "rgba(150, 185, 44, 0.7)",
          cMenuSubscribe = "rgba(150, 185, 44, 0.96)";
    
    const cButtonGallery = "rgba(85, 132, 162, 0.7)",
          cMenuGallery = "rgba(85, 132, 162, 0.96)";
    
    const cButtonServices = "rgba(173, 181, 189, 0.7)",
          cMenuServices = "rgba(173, 181, 189, 0.96)";
    
    const cButtonAboutUs = "rgba(255, 255, 255, 0.7)",
          cMenuAboutUs = "rgba(255, 255, 255, 0.96)";
    
    const cButtonHome = "rgba(255, 96, 51, 0.7)",
          cMenuHome = "rgba(255, 96, 51, 0.96)";


    if (wScroll > TopContact - wHeight) {
      Button.css("background-color", cButtonContact);
      Button_span.css("background-color", "#fff");
      Menu.css("background-color", cMenuContact);
      Menu_a.css("color", "#fff");
    }
    else if (wScroll > TopBlog - wHeight) {
      Button.css("background-color", cButtonBlog);
      Button_span.css("background-color", "#fff");
      Menu.css("background-color", "#fff");
      Menu_a.css("color", cMenuBlog);
    }
    else if (wScroll > TopSubscribe - wHeight) {
      Button.css("background-color", cButtonSubscribe);
      Button_span.css("background-color", "#000");
      Menu.css("background-color", cMenuSubscribe);
      Menu_a.css("color", "#000");
    }
    else if (wScroll > TopGallery - wHeight) {
      Button.css("background-color", cButtonGallery);
      Button_span.css("background-color", "#000");
      Menu.css("background-color", cMenuGallery);
      Menu_a.css("color", "#000");
    }
    else if (wScroll > TopServices - wHeight) {
      Button.css("background-color", cButtonServices);
      Button_span.css("background-color", "#000");
      Menu.css("background-color", cMenuServices);
      Menu_a.css("color", "#000");
    }
    else if (wScroll > TopAboutUs - wHeight) {
      Button.css("background-color", cButtonAboutUs);
      Button_span.css("background-color", "#000");
      Menu.css("background-color", cMenuAboutUs);
      Menu_a.css("color", "#000");
    }
    else {
      Button.css("background-color", cButtonHome);
      Button_span.css("background-color", "#fff");
      Menu.css("background-color", cMenuHome);
      Menu_a.css("color", "#fff");
    }

    // Попытки развернуть алгоритм, чтобы визуально он выглядел более логично. Попытки на данный момент не увенчались успехом
    // if (wScroll < wHeight) {
    //   Button.css("background-color", cButtonHome);
    //   Button_span.css("background-color", "#fff");
    //   Menu.css("background-color", cMenuHome);
    //   Menu_a.css("color", "#fff");
    // }
    // else if (wScroll < TopAboutUs - 50) {
    //   Button.css("background-color", cButtonAboutUs);
    //   Button_span.css("background-color", "#000");
    //   Menu.css("background-color", cMenuAboutUs);
    //   Menu_a.css("color", "#000");
    // }
    // else if (wScroll < TopServices + 50) {
    //   Button.css("background-color", cButtonServices);
    //   Button_span.css("background-color", "#000");
    //   Menu.css("background-color", cMenuServices);
    //   Menu_a.css("color", "#000");
    // }
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