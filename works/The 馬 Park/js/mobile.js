$(document).ready(function(){

    /* 적응형 홈페이지 적용법
    function isMobile(){

        var UserAgent = navigator.userAgent;
    
    
    
        if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
    
        {
    
            return true;
    
        }else{
    
            return false;
    
        }
    
    }
    

    
    if(isMobile()){
    
        // location.href = "http://m.naver.com";	//모바일페이지
        location.href = "index_m.html";	//모바일페이지
    
    }else{
    
        // location.href = "http://www.naver.com";		//PC용 페이지
        location.href = "index.html";		//PC용 페이지
    
    }
*/


    
    // 햄버거메뉴
    $(".hamburger a").click(function(){
        $(".hamburger a").toggleClass("on")
        $(".hamburger b").fadeToggle()
        $(".hamburger-wrap").fadeToggle()

        //↓ 클릭했을 때 헤더 색상 변경
        if(($(".header").css("background-color")== "rgb(255, 255, 255)")){
            $(".header").css("background-color","#4b644a").css("border-bottom","0")
            $(".header .logo a img").attr("src","images/logo-w.png")
            $(".hamburger a").addClass("color")
        }else{
            $(".header").css("background-color","").css("border-bottom","1px solid #6a041d")
            $(".header .logo a img").attr("src","images/logo.png")
            $(".hamburger a").removeClass("color")
        }
    })
    // 햄버거메뉴

    // 스와이퍼
    var swiper = new Swiper(".main-banner", {
        loop: true,
        cssMode: true,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        pagination: {
        el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });    
    // 스와이퍼
    
    var swiper = new Swiper(".ride-swiper", {
        effect: "flip",
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    
})//jquery