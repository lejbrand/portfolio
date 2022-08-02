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
    
    let p = 0
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        // console.log(pos)
        if(pos >= 300){
            $(".up").show()
        }else{
            $(".up").hide()
        }
        
        if(p > pos){
            $(".top").removeClass("on")
        }else{
            $(".top").addClass("on")
        }
        console.log(p,pos)
        p = pos;
        // p값이 안쪽에서 로테이션 돌게 되어서 그걸 계산하여 결과값을 도출하여 클래스 추가 , 삭제 제어
        // p값에 그전에 사용된 pos값이 적용되게 되어서 , 내릴때는 p값이 작아지고 휠을 올리게 되면 p값이 커지게 된다.

    })

    $(".up").click(function(){
        $("html,body").stop().animate({
            scrollTop:0
        },1000)
    })

    
})//jquery