import Swiper, { Navigation, Pagination, Scrollbar, Keyboard, Mousewheel, FreeMode, Autoplay, EffectFade, EffectFlip, EffectCube, EffectCoverflow, Lazy, Zoom, Thumbs, Controller, Parallax, Virtual, A11y } from 'swiper';

export function swipers() {
    new Swiper('.swiper-hero', {
        modules: [Navigation, Scrollbar, Keyboard, Mousewheel, FreeMode, EffectCoverflow, Lazy],

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        mousewheel: {
            sensitivity: 0.5,
            eventsTarget: '.swiper-hero-slide'
        },
        simulateTouch: true,
        touchRatio: 2,
        touchAngle: 45,
        grabCursor: true,
        freeMode: true,
        autoHeight: false,
        slidesPerView: 3,
        spaceBetween: 100,
        centeredSlides: true,
        initialSlide: 1,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0,
            stretch: 50,
            slideShadows: false,
            depth: 300,
        },
        preloadImages: true,
        lazy: {
            loadOnTransitionStart: false,
            loadPrevNext: false
        },
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        },
        speed: 1000
    });

    new Swiper('.swiper-ice', {
        modules: [Navigation, Pagination, Scrollbar, Keyboard, Mousewheel, FreeMode, Lazy, Autoplay],

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        mousewheel: {
            sensitivity: 0.5,
            eventsTarget: '.swiper-ice-slide'
        },
        simulateTouch: true,
        touchRatio: 2,
        touchAngle: 45,
        grabCursor: true,
        freeMode: true,
        slidesPerView: 3,
        // spaceBetween: 100,
        centeredSlides: true,
        initialSlide: 1,
        preloadImages: true,
        lazy: {
            loadOnTransitionStart: false,
            loadPrevNext: false
        },
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        },
        loop: true,
        loopedSlides: 1,
        autoplay: {
            delay: 0,
            stopOnLastSlide: false,
            disableOnInteraction: true
        },
        speed: 5000,
    });
};