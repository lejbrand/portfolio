$(document).ready(function(){


    const swiper = new Swiper(".main-banner",{
        loop : true,
        navigation:{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev" 
        },
        // slidesPerView : 3,
        autoplay:{
            delay:3000
        },
        speed:500,
        slidePerGroup: 1,
        centeredSlides : true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
        rotate: 0,
        stretch: 370,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        }


    })






})