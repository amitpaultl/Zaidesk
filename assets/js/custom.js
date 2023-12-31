(function ($) {
  "use strict";

  //Run function when document ready
  $(document).ready(function () {
    init_menu_toggle();
  });

  //  menu mobile
  function init_menu_toggle() {
    $(".menu-icon").click(function () {
      $(this).toggleClass("menu-icon-design");
      $(".header-menu").toggleClass("show-menu");
    });

    $(".header-menu li a").click(function () {
      $(".header-menu").removeClass("show-menu");
      $(".menu-icon").removeClass("menu-icon-design");
    });
  }

  // scroll fix menu

  $(window).on("scroll", function () {
    init_menu_scroll();
    init_hero_scroll()
  });

  function init_menu_scroll() {
    var header = $(".header");
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      header.addClass("header-fixed");
    } else {
      header.removeClass("header-fixed");
    }
  }

  // hero area class name add

  function init_hero_scroll() {
    var header = $(".all-top");
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      header.addClass("padding-top");
    } else {
      header.removeClass("padding-top");
    }
  }

  // user slider

  $(".user-box").owlCarousel({
    autoplay: true,
    margin: 20,
    responsiveClass: true,
    autoplayTimeout: 7000,

    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 1,
      },

      1024: {
        items: 2,
      },

      1366: {
        items: 2,
      },
    },
  });
  
})(jQuery);
