$("document").ready(function(){

    //메인 슬라이드
    const swiper = new Swiper(".main-slide",{
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        autoplay:{
            delay: 3000
        }
    })
    
    // 메인 슬라이드 클릭 재생멈춤 버튼
    const $play = $(".main-slide .main-slide-play")
    const $play_icon = $(".main-slide .main-slide-play i")

    $play.click(function(){
        if ( $play_icon.attr("class") == "fa-solid fa-circle-pause"){
            swiper.autoplay.stop()
            $play_icon.attr("class", "fa-regular fa-circle-play");

        }else{
            swiper.autoplay.start()
            $play_icon.attr("class", "fa-solid fa-circle-pause");
        }
    })
    
    //메인아래 슬라이드
    const swiper2 = new Swiper(".main-content",{
        loop: true,
        slidesPerView: 4,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })

    $(".event-content .tabmenu ul li").eq(0).addClass("on")
    $(".event-content .tab-content").eq(0).show()

    $(".event-content .tabmenu ul li").click(function(){
        let i = $(this).index()
        $(".event-content .tabmenu ul li").removeClass("on").eq(i).addClass("on")
        $(".event-content .tab-content").hide().eq(i).show()
        return false;
    })
    var swiper3 = new Swiper(".event-slide",{
        loop:true,
        slidesPerView:3,
        spaceBetween: 56,
        navigation: {
            prevEl:".prev",
            nextEl:".next"
        }
    })

    // 네비 연결
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
    
    if (getUrlParameter("sub") != undefined) {
        $("."+getUrlParameter("sub")+"2").trigger("click");
    }


})