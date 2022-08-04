$("document").ready(function(){
    // alert("연결확인")

    // 돋보기 클릭
    const $log = $(".header .log ul li")
    const $ham = $(".search .search-wrap .ham")

    $log.eq(0).find("a").click(function(){ 
        $(".modal-search").show()
        $(".search").slideDown()
        $ham.addClass("on")

    })

    $ham.click(function(){
        $(".search").slideUp()
        $(".modal-search").hide()
        $ham .remveClass("on")
    })

    $log.eq(3).find("a").click(function(){
        $(".modal-search").show()
        $(".ham-wrap").addClass("slide")
        $(".ham-wrap .ham-box").addClass("add")
    })

    $(".ham-wrap .ham-box").click(function(){
        $(".modal-search").hide()
        $(".ham-wrap").removeClass("slide")
        $(".ham-wrap .ham-box").removeClass("add")
    })



    // 메인배너
    var swiper = new Swiper(".main-banner", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".banner .next",
            prevEl: ".banner .prev",
        },
    });
    // 메인배너

    // 메인아이템
    var swiper = new Swiper(".main-item-wrap", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        navigation: {
            nextEl: ".main-item .next",
            prevEl: ".main-item .prev",
        },
    });    
    // 메인아이템
    var swiper = new Swiper(".item-wrap02", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        navigation: {
            nextEl: ".main-item .next",
            prevEl: ".main-item .prev",
        },
    });    

    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        console.log(pos)
        if(pos >= 100){
            $(".header").addClass("on")
        }else{
            $(".header").removeClass("on")
        }

        if(pos >= 1300){
            $(".up").show()
        }else{
            $(".up").hide()
        }
    })

    $(".up").click(function(){
        $("html,body").stop().animate({
            scrollTop: 0
        },400)
    })

})//jqeury