$(document).ready(function () {
    if($('body').hasClass('js')) {
        toggleNav();
        toggleModal();
        toggleAccordion();
        closeDropdown();
        initSlider();
    };    
});


// toggle modal
function toggleModal() {
    var openModalBtn = document.getElementById('js-open-modal');
    var closeModalBtn = document.getElementById('js-close-modal');

    openModalBtn.addEventListener('click', function(e) {
        document.querySelector('.modal').classList.add('modal--open');
        e.preventDefault();
    });

    closeModalBtn.addEventListener('click', function(e) {
        document.querySelector('.modal').classList.remove('modal--open');
        e.preventDefault();
    });
}


// close dropdown list when clicking elsewhere
function closeDropdown() {
    $(document).click(function (e) {
        if ($('.dropdown').hasClass('show')) {
            if (!$('.dropdown__list').is(e.target) && !$(e.target).parents('.dropdown__list').length) {
                $('.dropdown').removeClass('show');
            }
        }
    });
}


// toggle navigation menu
function toggleNav() {
    var openNavBtn = document.getElementById('js-open-nav');
    var closeNavBtn = document.getElementById('js-close-nav');

    openNavBtn.addEventListener('click', function(e) {
        document.querySelector('.main-nav').classList.add('main-nav--open');
        e.preventDefault();
    });

    closeNavBtn.addEventListener('click', function(e) {
        document.querySelector('.main-nav').classList.remove('main-nav--open');
        e.preventDefault();
    });

    // also close nav if child link is clicked
    var x = document.querySelectorAll('.main-nav__link a');
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].addEventListener('click', function(e) {
            document.querySelector('.main-nav').classList.remove('main-nav--open');
        });
    } 
}


// show/hide accordion content
function toggleAccordion() {
    $('.js-accordion-toggle').click(function() {
        $(this).parent().toggleClass('show');
    });
}


/*
    Slick slider
    https://kenwheeler.github.io/slick/
*/
function initSlider() {
    $('.slider').slick({
        appendArrows: $('.slider-arrows'),
        appendDots: $('.slider-dots'),
        arrows: true,
        autoplay: false,
        dots: true,   
        prevArrow: $('.slider-arrows__prev'),
        nextArrow: $('.slider-arrows__next'),
        slidesToShow: 1,
        slidesToScroll: 1
    });
}


