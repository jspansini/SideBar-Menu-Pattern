$(document).ready(function () {

    //menu principal
    $('.sub-btn').click(function () {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });

    //menu tipos
    $('.sub-btn-tipos').click(function () {
        $(this).next('.sub-sub-menu-item').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });

    //menu relacionamento
    $('.sub-btn-relacionamento').click(function () {
        $(this).next('.sub-sub-menu-item-rel').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });

    
    $('.menu-btn').click(function () {
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility", "hidden");
    });

    $('.close-btn').click(function () {
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility", "visible");
    });

});
