/* eslint-disable indent */
(function ($) {
	$(() => {
        $('.about__slider-wrap').slick({
            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });

	$(document).on('click', '.nav__button', function () {
        if ($(this).siblings('.nav__wrap').hasClass('is-flex')) {
            $(this).siblings('.nav__wrap').hide().removeClass('is-flex');
        }else {
            $(this).siblings('.nav__wrap').slideDown().addClass('is-flex');
        }
        $(this).toggleClass('nav__button--clicked');
    });

})(jQuery);
