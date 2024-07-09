function toggleMenu(){
    $(document).on('click','#header__toggle',function(){
        $('header, #header, #header-menu, #header__button').toggleClass('active');
    });
}

$(document).ready(function(){
    toggleMenu();
});