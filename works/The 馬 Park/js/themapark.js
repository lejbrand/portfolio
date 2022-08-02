$(document).ready(function(){

    let count = 0;

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
        // depth: 100,
        depth: 135,
        modifier: 1,
        slideShadows: true,
        }


    });


    var swiper2 = new Swiper(".ride-swiper", {
        // loop : true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation:{
            nextEl: ".ride-banner .swiper-button-next",
            prevEl: ".ride-banner .swiper-button-prev" 
        }
    });

    // 네비게이션 설정 

    
    $(".header .header-wrap .nav ul li").mouseover(function(){
        $(".sub-nav").css("height","200px")

    }).mouseout(function(){
        $(".sub-nav").css("height","")
    })


    $(".sub-nav .sub-wrap ul").mouseover(function(){
        let count = $(this).index()
        $(".header .header-wrap .nav ul li").eq(count).addClass("color")
        
    }).mouseout(function(){
        $(".header .header-wrap .nav ul li").removeClass("color")
    })

    
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        console.log(pos)

        if(pos >= 110){
            $(".header").addClass("on")
            
        }else(
            $(".header").removeClass("on")
        )
    })

    // 네비게이션 설정 
    
    document.documentElement.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault(); 
        } 
    }, false);

var lastTouchEnd = 0; 

document.documentElement.addEventListener('touchend', function (event) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault(); 
        } lastTouchEnd = now; 
    }, false);
    


})//jquery