$(document).ready(function(){

    $(".hamburger a").click(function(){
        $(this).toggleClass("on")
        $(".hamburger a b").fadeToggle()
        $(".side").fadeToggle()
        if($(".header .header-wrap .logo a img").attr("src") == "images/logo.png"){
            $(".header .header-wrap .logo a img").attr("src","images/logo-w.png");
        }else{
            $(".header .header-wrap .logo a img").attr("src","images/logo.png");
        }
    })

    $(".nav ul li").click(function(){
        let i = $(this).index();
        // alert("연결확인")
        $(".nav ul li a").removeClass("on").eq(i).addClass("on")
    })


    $(".left ul li").eq(0).addClass("animated fadeInLeft").css("opacity",1).css("transition-delay","400ms").css("animation-delay","400ms");
    $(".left ul li").eq(1).addClass("animated fadeInLeft").css("opacity",1).css("transition-delay","700ms").css("animation-delay","700ms");
    $(".left ul li").eq(2).addClass("animated fadeInLeft").css("opacity",1).css("transition-delay","1000ms").css("animation-delay","1000ms");


    $(".center ul li").eq(0).addClass("animated bounceInUp").css("opacity",1).css("transition-delay","1100ms").css("animation-delay","1100ms");
    $(".center ul li").eq(1).addClass("animated bounceInUp").css("opacity",1).css("transition-delay","1500ms").css("animation-delay","1500ms");
    $(".center ul li").eq(2).addClass("animated zoomIn").css("opacity",1).css("transition-delay","1800ms").css("animation-delay","1800ms");
    $(".center ul li").eq(3).addClass("animated zoomIn").css("opacity",1).css("transition-delay","2000ms").css("animation-delay","2000ms");



// 모바일에서 확대 막아주는 코드
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

// 모바일에서 확대 막아주는 코드


})//jquery