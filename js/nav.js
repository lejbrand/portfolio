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
        $(".nav ul li").removeClass("on").eq(i).addClass("on")
    })




})