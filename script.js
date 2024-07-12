function toggleMenu(){
    $(document).on('click','#header__toggle',function(){
        $('header, #header, #header-menu, #header__button').toggleClass('active');
    });
}

function initSliders(){
    const ourProjectsSlider = new Swiper('#our-projects-slider', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 10,

        breakpoints:{
            0:{
                slidesPerView:1
            },

            620:{
                slidesPerView:2
            },

            1024:{
                slidesPerView:3
            }
        },

        pagination: {
            el: "#our-projects-slider-dots",
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          },

        navigation: {
            nextEl: "#our-projects-slider__button-next",
            prevEl: "#our-projects-slider__button-prev",
          },
      });
}

$(document).ready(function(){
    toggleMenu();
    initSliders();
});