$(document).ready(function(){

    let wheel_count = 0;
    let slide_num = 0;

    
    const $slide_text = $(".slide .slide-pc .text ul li")
    const $art = $(".section .slide .slide-pc .artwork")
    const $m_art = $(".section .slide .slide-mobile .artwork")
    const $button = $(".section .section-wrap .right .top .button ul li")
    const $design = $(".section .section-wrap .right .bottom ul li:nth-child(1)")
    // nth:child(1)로 첫번째 요소만 클릭 하였을때로 설정해준다.

    $(".indicator ul li").eq(0).addClass("on")
    $(".indicator ul li").eq(0).addClass("color")
    $(".slide .slide-pc .text ul li").eq(0).addClass("color")
    $(".slide .slide-mobile .text ul li").eq(0).addClass("color")
    $(".slide .slide-mobile .content .artwork").eq(0).show()
    
    for(let k = 0; k < 7; k++){
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

    $section_btn.click(function(){
        let i = $(this).index()
        $(".section").eq(wheel_count).find($(".right .top .mokup .mokup-wrap")).hide().eq(i).show()
    })


    $(".portfolio .right .top .button ul li").click(function(){
        let i = $(this).index()
        $(".section:nth-child(1) .right .top .mokup .mokup-wrap").hide().eq(i).show()
    })
    $(".themapark .right .top .button ul li").click(function(){
        let i = $(this).index()
        $(".themapark .right .top .mokup .mokup-wrap").hide().eq(i).show()
        $(".themapark .right .top .button ul li").removeClass("color").eq(i).addClass("color")
        // this는 자기 자시을 의미하는 거라서 클래스를 추가해준다음에 또 삭제해 버려서 색이 사라진 것이다
        $(this).addClass("color").sblings("li").removeClass("color")//sblings형제선택자 선택한 자신을 제외한 형제선택자 모두의 클래스를 제거해주는 것
    })
    $(".kooksoondang .right .top .button ul li").click(function(){
        let i = $(this).index()
        $(".section:nth-child(3) .right .top .mokup .mokup-wrap").hide().eq(i).show()
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
        $(".modal-wrap .img").hide().eq(number).scrollTop(0).show()

    })
    $m_art.click(function(){
        let number = $(this).index()
        $(".modal").slideDown()
        $(".modal-wrap").slideDown()
        $(".modal-wrap .img").hide().eq(number).scrollTop(0).show()
    })

    $(".modal p").click(function(){
        $(".modal").slideUp()
        $(".modal-wrap").slideUp()
        $(".modal-wrap .img").hide().scrollTop(0)

    })


    // 모달 창 이미지
    let guide_img = [
        "images/portfolio-guide.png",
        "",
        "",
        "",
        "",
        "images/themapark guide.png",
        "images/kooksoondang_guide.png"
    ]
    // 디자인 가이드 창
    $(".modal-design").mouseover(function(){
        $("html,body").on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
    })
    $(".modal-design").mouseout(function(){
        $("html,body").off('scroll touchmove mousewheel');
    })
    
        // 클릭이벤트
    $design.click(function(){
        let i = $design.index(this);
        // let i = $design.index(this) / 2;         - 2로 나뉘어 주는 것 
        // let i = $(this).index()
        // alert(i)
        // $(".section").eq(0).show()
        // $(".section").eq(i).find(".modal-design").show()        - 모달창을 안에 배열해 뒀을때 띄우려면 이렇게 써주면 된다.
            $(".modal-design").slideDown()
            $(".modal-design .design-wrap img").attr("src",guide_img[i]).show()
            // if(!i/2) 라고 적어주면 i를 2로 나뉘어 떨어지는 값이 맞다면 이라는 의미 !important와 같은의미? if절에서 쓰이는 ~이 ~라면 이 없기 때문에 ! 를 써줘서 i/2로 나뉘어 진다면 이라는 의미로 쓰이게 된다.

            // alert("확인")
        // alert(i)
    })

    // index(this) = nth-of-type 과 같은 것이다.
    // 모든 bottom ul li 의 순서를 세어주는데 0 , 1 , 2 의 순서가 되기 위해서 /2 로 나뉘어 준것
    // this(index) = nth-child와 같다

    $(".modal-design").click(function(){
        $(this).hide()
        $(".modal-design .design-wrap img").attr("src","#")
        // 모달창이 사라질때 원래대로 돌아가 주는 코드 ↑
    })
    // 디자인 가이드 창



    
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

// 버튼클릭
$(".together01 .button_together button").click(function(){
    $(".together01 .button_together .together_wrap").slideToggle()
    $(".together01 .button_together button span").eq(0).toggle()
    $(".together01 .button_together button span").eq(1).toggle()
})
// 버튼클릭

// 버튼 마우스 오버시 휠막기
$(".together01 .button_together .together_wrap").mouseover(function(){
    $("html,body").on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
}).mouseout(function(){
    $("html,body").off('scroll touchmove mousewheel');
})
// 버튼 마우스 오버시 휠막기
})//jquery