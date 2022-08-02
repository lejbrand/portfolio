$("document").ready(function(){
    

    $(".lang p").click(function(){
        $(".lang ul").slideToggle()
    })


    $(".hamburger a").click(function(){
        $(".hamburger a").toggleClass("on")
        $(".header .header-nav .header-box:nth-child(2)").fadeToggle()
        $(".hamburger-modal").fadeToggle()
        if($(".hamburger a").hasClass("on")){//hasClass 는 클래스의 유무를 체크해주는 코드
            $(".header").mouseover(function(){
                $(".header-box > ul > li > .submenu").hide()
                $(".header").removeClass("on")
            })
        }else{
            $(".header").mouseover(function(){
                $(".header").addClass("on")
                $(".header-box > ul > li .submenu").show()
            }).mouseout(function(){
                $(".header-box > ul > li > .submenu").hide()
                $(".header").removeClass("on")
            })            
        }
        
    })

    $(".header-box > ul > li").mouseover(function(){
        let i = $(this).index()
        $(".header").addClass("on")
        $(".header-box > ul > li").eq(i).find("a").addClass("color")
        $(".header-box > ul > li .submenu").addClass("animated fadeIn").css("transition-delay","600ms").css("animation-delay","600ms");

    }).mouseout(function(){
        $(".header-box > ul > li a").removeClass("color")
    })

    $(".header").mouseover(function(){
        $(".header").addClass("on")
        $(".header-box > ul > li .submenu").show()
    }).mouseout(function(){
        $(".header-box > ul > li > .submenu").hide()
        $(".header").removeClass("on")
    })


    // 스크롤이벤트
    
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        console.log(pos)

// 300 100
        if(pos > 100){
            $(".header").addClass("sc")
        }else{
            $(".header").removeClass("sc")
        }

        if(pos > 300){
            $(".float-menu .btn-arrow .btn-down").hide()
            $(".float-menu .btn-arrow .btn-up").show()
        }else{
            $(".float-menu .btn-arrow .btn-up").hide()
            $(".float-menu .btn-arrow .btn-down").show()
        }
        let current = (pos/($(document).outerHeight() - $(window).height())) * 100;
        console.log(current)

    })

    // 스크롤이벤트


    // 버튼클릭시 위 아래
    $(".float-menu .btn-arrow .btn-up").click(function(){ //위
        $("html,body").stop().animate({
            scrollTop : 0
        },500)
    })
    $(".float-menu .btn-arrow .btn-down").click(function(){ //아래
        $("html,body").stop().animate({
            scrollTop: $(window).height()
            // 스크롤탑 값 옆에는 숫자만 들어가지 않는다. 어떤 변수나 설정하여 삽입해줘도 된다
            // 윈도우의 세로길이 값을 자동으로 계산하여 대입시켜줌으로 써 제일 아래로 내려가는 것같다
        },500)
    })

    // 버튼클릭시 위 아래

// 해피 스와이퍼
var swiper = new Swiper(".happy-swiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
        nextEl: ".happy .swiper-button-next",
        prevEl: ".happy .swiper-button-prev",
    },
});

// 해피 스와이퍼

AOS.init();

$(".happy-swiper .swiper-wrapper .swiper-slide").mouseover(function(){

}).mouseout(function(){

})

// 브랜드 스와이프
var swiper2 = new Swiper(".brand-swiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
        nextEl: ".brand .swiper-button-next",
        prevEl: ".brand .swiper-button-prev",
    },
    // breakpoints: {//반응형 웹페이지를 지원해준다.
    //     480:{slidesPerView:1 , freeMode:false},//\위에서사용한 속성중 써주고 싶은 속성을 이곳에 그냥 다 적용시켜주면 동작한다.
    //     768:{slidesPerView:2},
    //     1024:{slidesPerView:3},
    //     1400:{slidesPerView:4}
    // },
});

// 브랜드 스와이프



})//jquery

