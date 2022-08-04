$("document").ready(function(){
    

    $(".menu ul li").eq(0).addClass("color")
    $(".menu-text ul li").eq(0).show()
    $(".menu-wrap .menu-box").eq(0).show()
    $(".menu-wrap .menu-box01 .picture .picutre-wrap").eq(0).show()
    $(".menu-wrap .menu-box02 .picture .picutre-wrap").eq(0).show()
    $(".menu-wrap .menu-box03 .picture .picutre-wrap").eq(0).show()
    $(".menu-box01 .sub-menu ul li").eq(0).addClass("on")
    $(".menu-box02 .sub-menu ul li").eq(0).addClass("on")

    $(".menu ul li").click(function(){
        let number = $(this).index()

        $(".menu ul li").removeClass("color").eq(number).addClass("color")
        $(".menu-text ul li").hide().eq(number).show()
        $(".menu-wrap .menu-box").hide().eq(number).show()

    })

    $(".menu-text ul li").addClass("animated fadeIn")

    $(".menu-box01 .sub-menu ul li").click(function(){
        let number = $(this).index()
        $(".menu-box01 .sub-menu ul li").removeClass("on").eq(number).addClass("on")
        $(".menu-box01 .picture .picutre-wrap").hide().eq(number).show()
    })

    $(".menu-box02 .sub-menu ul li").click(function(){
        let number = $(this).index()
        $(".menu-box02 .sub-menu ul li").removeClass("on").eq(number).addClass("on")
        $(".menu-box02 .picture .picutre-wrap").hide().eq(number).show()
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

    // console.log(getUrlParameter("sub"))

    if (getUrlParameter("sub") != undefined) {
        $("."+getUrlParameter("sub")).trigger("click");
        setTimeout(function(){
            if(getUrlParameter("sub").slice(3,5)-1 == 2){
                $("html, body").stop().animate({
                    scrollTop: $(".sub-menu").eq(getUrlParameter("sub").slice(3,5)-1).find("p").offset().top
                })
            }else{
                $("html, body").stop().animate({
                    scrollTop: $(".sub-menu").eq(getUrlParameter("sub").slice(3,5)-1).find("ul").offset().top
                })

            }
        },100)
    }
console.log(getUrlParameter("sub"))
    // console.log(getUrlParameter("sub").slice(3,5))



})//jquery