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


})//jquery