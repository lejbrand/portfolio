$(document).ready(function(){

    let wheel_count = 0;
    let slide_num = 0;

    
    const $slide_text = $(".slide .slide-pc .text ul li")
    const $art = $(".section .slide .slide-pc .artwork")
    const $m_art = $(".section .slide .slide-mobile .artwork")
    const $button = $(".section .section-wrap .right .top .button ul li")

    $(".indicator ul li").eq(0).addClass("on")
    $(".indicator ul li").eq(0).addClass("color")
    $(".slide .slide-pc .text ul li").eq(0).addClass("color")
    $(".slide .slide-mobile .text ul li").eq(0).addClass("color")
    $(".slide .slide-mobile .content .artwork").eq(0).show()
    
    for(let k = 0; k < 3; k++){
        $(".section").eq(k).find($button).eq(0).addClass("color")    
        //한덩이리씩 내려가는 것들은 반복문을 돌려줘야지 작동을 제대로 한다. 
        // section이 k라는 위치에 내려가게 되면 $button을 찾아서 eq(0)에 색을 주라는 의미
    }

    $(".hamburger a").click(function(){
        $(this).toggleClass("on")
        $(".hamburger a b").fadeToggle()
        $(".side").fadeToggle()
        if($(".header .header-wrap .logo a img").attr("src") == "images/logo.png"){
            $(".header .header-wrap .logo a img").attr("src","images/logo-w.png");
        }else{
            $(".header .header-wrap .logo a img").attr("src","images/logo.png");
        }
        if($(".header").css("background-color") == "rgb(239, 239, 246)"){
            $(".header").css("background-color","transparent");
        }else{
            $(".header").css("background-color","rgb(239, 239, 246)");
        }
    })



    // 모바일 스크롤 해제
    //resize=  사이즈를 줄일떄를 체크해서 설정하는거 
    $(window).resize(function(){
        let $width = $(window).width();

        if($width < 640){
            $(window).off("mousewheel DOMMouseScroll touchmove");
            $(window).on("mousewheel DOMMouseScroll touchmove", function(e) {
                e.preventDefault();
                return;
            });

            $("html, body").css("overflow", "auto")//overflow 를 auto로 해주면 hidden이 풀어지게 된다.
        }else{  //아니라면 일 때 설정해둔 내용을 전부 붙여넣기 해준다.
            $("html, body").css("overflow", "hidden")
            $(window).on("mousewheel DOMMouseScroll touchmove ",function(e){
                let delta = e.originalEvent.wheelDelta;
                let firefox = e.originalEvent.detail
        
                if($("html,body").is(":animated")){
                    return
                }
        
                if(delta < 0 || firefox < 0){
                    wheel_count++
                    if(wheel_count > $(".section").length - 1){
                        wheel_count = $(".section").length - 1 
                    }
                }else{
                    wheel_count--
                    if(wheel_count < 0){
                        wheel_count = 0;
                    }
                }
                console.log(wheel_count)
        
                $("html, body").stop().animate({
                    scrollTop : $(".section").height() * wheel_count
                },1000)//1초
                $(".indicator ul li").removeClass("on").eq(wheel_count).addClass("on")
                $(".indicator ul li").removeClass("color").eq(wheel_count).addClass("color")
            })
        }
    })



    // matchMedia = 사이트를 켰을때의 사이즈를 체크해준다.
    if (matchMedia("screen and (max-width: 640px)").matches) {

        $(window).on("mousewheel DOMMouseScroll touchmove", function(e) {
            e.preventDefault();
            return;
        });
            $("html, body").css("overflow", "auto")
        } else {
            $("html, body").css("overflow", "hidden")
            $(window).on("mousewheel DOMMouseScroll touchmove ",function(e){
                let delta = e.originalEvent.wheelDelta;
                let firefox = e.originalEvent.detail
        
                if($("html,body").is(":animated")){
                    return
                }
        
                if(delta < 0 || firefox < 0){
                    wheel_count++
                    if(wheel_count > $(".section").length - 1){
                        wheel_count = $(".section").length - 1 
                    }
                }else{
                    wheel_count--
                    if(wheel_count < 0){
                        wheel_count = 0;
                    }
                }
                console.log(wheel_count)
        
                $("html, body").stop().animate({
                    scrollTop : $(".section").height() * wheel_count
                },1000)//1초
                $(".indicator ul li").removeClass("on").eq(wheel_count).addClass("on")
                $(".indicator ul li").removeClass("color").eq(wheel_count).addClass("color")
            })
        
        }


    // 모바일 스크롤 해제


    // 버튼눌렀을떄 컬러 들어오기
    $button.click(function(){
        let number = $(this).index()
        $(".section").eq(wheel_count).find($button).removeClass("color").eq(number).addClass("color")
        
    })

    // 버튼눌렀을 때 컬러 들어오게 하기

    


    // 휠이벤트 활성화
    

    // 인디게이터 클릭 활성화
    $(".indicator ul li").click(function(){
        wheel_count = $(this).index() 

        $("html, body").stop().animate({
            scrollTop : $(".section").height() * wheel_count
        },1000)
        $(".indicator ul li").removeClass("on").eq(wheel_count).addClass("on")
        $(".indicator ul li").removeClass("color").eq(wheel_count).addClass("color")
    })

    $slide_text.click(function(){
        $(".slide-pc .content .artwork").eq(slide_num).stop().animate({
            left : "160%",
            opacity : 0 ,
            Zindex : "-1"

        })

        slide_num = $(this).index()
        $(".slide-pc .content .artwork").eq(slide_num).css("left","160%").stop().animate({
            left : "50%",
            opacity : 1,
            Zindex : "2"
        })


        $slide_text.removeClass("color").eq(slide_num).addClass("color")
        $art.scrollTop(0)

    })

    // 시간지남에 따라 돌아가는 거
    let timer = setInterval(function(){
        
        $(".slide-pc .content .artwork").eq(slide_num).stop().animate({
            left : "160%",
            opacity : 0 ,
            Zindex : "-1"

        })
        
        slide_num++
        if(slide_num>($slide_text).length-1){
            slide_num = 0
        }

        $(".slide-pc .content .artwork").eq(slide_num).css("left","160%").stop().animate({
            left : "50%",
            opacity : 1,
            Zindex : "2"
        })
        $slide_text.removeClass("color").eq(slide_num).addClass("color")

    },3000)

    // 마우스 올렷을 떄 작동안하게
    $slide_text.mouseover(function(){
        clearInterval(timer)
    })
    $slide_text.mouseout(function(){
        timer = setInterval(function(){
        
            $(".slide-pc .content .artwork").eq(slide_num).stop().animate({
                left : "160%",
                opacity : 0 ,
                Zindex : "-1"
    
            })
            
            slide_num++
            if(slide_num>($slide_text).length-1){
                slide_num = 0
            }
    
            $(".slide-pc .content .artwork").eq(slide_num).css("left","160%").stop().animate({
                left : "50%",
                opacity : 1,
                Zindex : "2"
            })
    
            $slide_text.removeClass("color").eq(slide_num).addClass("color")
            
    
        },3000)

    })




    //마우스 올렸을때 휠 이벤트 중지
    $(".artwork").mouseover(function(){
        clearInterval(timer)
        $("html,body").on('scroll touchmove mousewheel', function(event) {

            event.preventDefault();
            event.stopPropagation();
            return false;
        });     
    })
    $(".artwork").mouseout(function(){
        timer = setInterval(function(){
        
            $(".slide-pc .content .artwork").eq(slide_num).stop().animate({
                left : "160%",
                opacity : 0 ,
                Zindex : "-1"
    
            })
            
            slide_num++
            if(slide_num>($slide_text).length-1){
                slide_num = 0
            }
    
            $(".slide-pc .content .artwork").eq(slide_num).css("left","160%").stop().animate({
                left : "50%",
                opacity : 1,
                Zindex : "2"
            })
    
            $slide_text.removeClass("color").eq(slide_num).addClass("color")
        },3000)
        $("html,body").off('scroll touchmove mousewheel');
    })

    // $(".section:nth-child(2) .right .top .button ul li:nth-child(1n+2)").click(function(){
    //     alert("활성화 되지 않았습니다")
    // })


    // 버튼클릭시 목업 변경
    const $section_btn = $(".section .right .top .button ul li")

    $(".section:nth-child(1) .right .top .button ul li").click(function(){
        let i = $(this).index()
        $(".section:nth-child(1) .right .top .mokup .mokup-wrap").hide().eq(i).show()
    })
    $(".section:nth-child(3) .right .top .button ul li").click(function(){
        let i = $(this).index()
        $(".section:nth-child(3) .right .top .mokup .mokup-wrap").hide().eq(i).show()
    })

    $section_btn.click(function(){
        let i = $(this).index()
        $(".section").eq(wheel_count).find($(".right .top .mokup .mokup-wrap")).hide().eq(i).show()
    })




    $(".slide .slide-mobile .text ul li").click(function(){
        slide_num = $(this).index()
        $(".slide-mobile .content .artwork").hide().eq(slide_num).show()
        $(".slide .slide-mobile .text ul li").removeClass("color").eq(slide_num).addClass("color")
    })



    // 모달창 마우스오버시 휠 이벤트 정지
    $(".modal").mouseover(function(){
        $("html,body").on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });  
    })
    $(".modal").mouseout(function(){
        $("html,body").off('scroll touchmove mousewheel');

    })


    $art.click(function(){
        let number = $(this).index()
        $(".modal").slideDown()
        $(".modal-wrap").slideDown()
        $(".modal-wrap img").hide().eq(number).scrollTop(0).show()

    })
    $m_art.click(function(){
        let number = $(this).index()
        $(".modal").slideDown()
        $(".modal-wrap").slideDown()
        $(".modal-wrap img").hide().eq(number).scrollTop(0).show()
    })

    $(".modal p").click(function(){
        $(".modal").slideUp()
        $(".modal-wrap").slideUp()
        $(".modal-wrap img").hide().scrollTop(0)

    })

})//jquery