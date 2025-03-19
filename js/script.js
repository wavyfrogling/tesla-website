$(function () {
    $('.slider').slick({
        infinite: true,        // Безкінечний скролл
        slidesToShow: 1,       // Кількість видимих слайдів
        slidesToScroll: 1,     // Кількість слайдів при прокрутці
        dots: true,            // Додати навігаційні точки
        arrows: false,          // НЕВідображати стрілки
        autoplay: true,        // Автоматична зміна слайдів
        autoplaySpeed: 2500,   // Час зміни (3 сек)
        speed: 700,            // Швидкість анімації
        fade: true,
    });
});