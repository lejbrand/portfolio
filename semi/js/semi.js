$(document).ready(function(){
    
    let wheel_count = 0;

    var swiper = new Swiper(".main-slide", {
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });

    $(".footer .footer-wrap .footer-top .family button").click(function(){
        $(".familt-wrap").fadeToggle()
        $(".family .button").toggleClass("on")
    })
    

    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        console.log(pos)
        if(pos >= 300){
            $(".up").show()
        }else{
            $(".up").hide()
        }

    })

    $(".up").click(function(){
        $("html,body").stop().animate({
            scrollTop:0
        },1000)
    })

    $(window).on("mousewheel DOMMouseScroll", function(e){
        let delta = e.originalEvent.wheelDelta;  
        let firefox = e.originalEvent.detail;

        if($("html,body").is(":animated")){
            return;
        }


        if(delta < 0 || firefox < 0){
            // wheel_count++
            $(".top").stop().slideUp(200)
        }else{
            // wheel_count--
            $(".top").stop().slideDown(200)
        }
    })




    
})//jquery