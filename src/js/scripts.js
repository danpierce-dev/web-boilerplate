
if (document.readyState !== 'loading') {
    toggleNav();
    toggleAccordion()

} else {
    document.addEventListener('DOMContentLoaded', function () {
        toggleNav();
        toggleAccordion();
    });
}

// toggle navigation menu
function toggleNav() {
    const openNavBtn = document.querySelector('.js-open-nav');
    const closeNavBtn = document.querySelector('.js-close-nav');

    openNavBtn.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.header__nav').classList.add('open');
        document.body.classList.add('noscroll');
    });

    closeNavBtn.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.header__nav').classList.remove('open');
        document.body.classList.remove('noscroll');
    });
}

// show/hide accordion content
function toggleAccordion() {
    const accordion = document.querySelectorAll('.js-accordion-toggle');

    if (document.body.contains(document.querySelector('.js-accordion-toggle'))) {
        accordion.forEach(function(e) {
            e.addEventListener('click', function() {
                this.parentNode.classList.toggle('show');
            });
        });
    }
}


