$(document).ready(function(){
    // alert()
    let count = 0
    let position = parseInt($(".float-menu").css("top"))
    const $new_proudct = $(".new .new-product .product-area .new-product-box")
    const $notice_button = $(".notice .notice-area .notice-arrow > a")
    const $notice_item = $(".notice .notice-area .notice-slide .wrap-content .notice-wrap .notice-item")
    const $notice_wrap = $(".notice .notice-area .notice-slide .wrap-content .notice-wrap")


    $(window).scroll(function(){
        let pos =$(window).scrollTop();
        
        let float_pos = position + pos;
        $(".float-menu").stop().animate({
            top: float_pos
        })
    })//float-menu스크롤

    $(".float-menu ul li").eq(3).click(function(){
        $("html,body").stop().animate({
            scrollTop:0
        },1000)

    })
    $(".float-menu ul li").eq(4).click(function(){
        $("html,body").stop().animate({
            scrollTop: $(document).height()
        },1000)
    })

    const swiper = new Swiper(".product-content",{
        navigation:{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        slidesPerView : 3,
        spaceBetween: 10, 
        slidesPerGroup: 3

    })//siwper

    const swiper2 = new Swiper(".main-slide",{
        loop: true,
        autoplay : {
            delay :3000
        },
        navigation:{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el : ".swiper-pagination",
            clickable : true 
        },
        speed: 1000.
    })
    
    $(".product-menu .menu-list ul li").eq(0).addClass("on")
    $(".product-content").hide().eq(0).show()
    $(".product-menu .menu-list ul li").click(function(){

        let product = $(this).index();
        $(".product-menu .menu-list ul li").removeClass("on").eq(product).addClass("on")
    
        $(".product-content").hide().eq(product).show();
        
        swiper[product].slideTo(0, 1000, false)
    })
    

    // 상세페이지
    $new_proudct.eq(0).find("a").click(function(){
        $(".popup").slideDown();
        $(".popup-content").slideDown().scrollTop(0); // ← 클릭할때 마다 스크롤 값을 0으로 만들어 주겠다는 의미 
    })

    $(".popup").click(function(){
        $(this).slideUp()
        $(".popup-content").slideUp()
    })


    // 공지사항

    $notice_button.mouseover(function(){
        clearInterval(timer)
    }).mouseout(function(){
        clearInterval(timer)
        timer =  setInterval(function(){
            count++
            if(count > $notice_item.length-1){
                count = 0
            }
            $notice_wrap.stop().animate({
    
                left: -100 * count + "%"
    
            },1000)
        },3000)
    })

    $notice_button.click(function(e){
        let nu = $(this).index()
        if(nu<2){
            e.preventDefault()
        }else{
            $(this).attr("href","http://www.ksdb.co.kr/prlounge/news.asp")
        }

        if($notice_wrap.is(":animated")){
            return
        }

        if(nu==0){
            count--;
            if(count < 0){
                count = $notice_item.length-1
            }
        }
        if(nu == 1){
            count++;
            if(count > $notice_item.length-1){
                count = 0
            }
        }


        $notice_wrap.stop().animate({
            left: -100 * count + "%"
        },1000)

        console.log(count)
    })

    let timer =  setInterval(function(){
        count++
        if(count > $notice_item.length-1){
            count = 0
        }
        $notice_wrap.stop().animate({

            left: -100 * count + "%"

        },1000)
    },3000)



})//jquery