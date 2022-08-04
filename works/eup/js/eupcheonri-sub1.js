$("document").ready(function(){
    // AOS.init();
    new WOW().init();
    
    // 처음 버튼에 on class 부여
    $(".btn ul li").eq(0).addClass("on")

    // 처음화면에서 첫번째 배너 및 첫번째 컨텐츠 출력
    $(".banner ul li").eq(0).show()
    $(".tabmenu .content").eq(0).show()

    // 탭메뉴 클릭시 화면에 나오도록
    $(".btn ul li").click(function(){
        let a = $(this).index();

        $(".btn ul li").removeClass("on").eq(a).addClass("on")

        $(".banner ul li").hide().eq(a).fadeIn()

        $(".tabmenu .content").hide().eq(a).fadeIn()
    })

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

    // console.log(sub)
    if (getUrlParameter("sub") != undefined) {
        $("."+getUrlParameter("sub")).trigger("click");
        setTimeout(function(){
            $("html, body").stop().animate({
                scrollTop: $(".btn-wrap ul li a").offset().top
            })
        },100)
    }
    
    
})