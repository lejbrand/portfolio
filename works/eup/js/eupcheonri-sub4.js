$("document").ready(function(){

    let btn_idx = 0;
    let comp_idx = 0;
    let pro_process = $(".pro-content-wrap>div");
    let pro_ani_type="animated fadeIn";
    let pro_ani_transDly = "1500ms";
    let scroll_chk = false;
    let click_chk = 0;
    
    let m1_height = "1189px";
    let m2_height = "1250px";
    let m3_height = "1668px";
    let m4_height = "2165px";

    const com_img = document.querySelector(".comp-big");
    const img_root = "images/eupcheonri/big" 

    $(".pro-content-wrap>*").css("opacity","0");
    $(".btn ul li").eq(0).css("background-color","#f6d76a");
    $(".btn ul li span").eq(0).css("color","#2c2c2c");

    com_img.style.backgroundImage = "url("+img_root+"1.png)";
    com_img.style.transition = "0.5s";

    $(".compet").hide();
    $(".price").hide();
    $(".contact").hide();
    $("section").css("height",m1_height);

    window.onload = function() {
        scroll_chk=true;
	}

    // 각 항목 마우스 오버시 효과
    $(".btn ul li").mouseover(function(){
        btn_idx = $(this).index();
        if(btn_idx != click_chk){
            $(".btn ul li span").eq(btn_idx).css("color","#2c2c2c");
        }
    }).mouseout(function(){
        if(btn_idx != click_chk){
            $(".btn ul li span").eq(btn_idx).css("color","#7d7d7d");
        }
    })

    $(".submit-btn input").mouseover(function(){
        $(this).css("background-color","#2c2c2c").css("color","#fff");
    }).mouseout(function(){
        $(this).css("background-color","").css("color","");
    })

    com_img.style.width = "610px";
    com_img.style.height = "610px";
    com_img.style.borderRadius = "100px";
    $(".process .pro-title ul li a").addClass(pro_ani_type).css("opacity", 1).css("transition-delay","50ms").css("animation-delay","50ms");
    
    $(window).scroll(function(event){
        scroll_chk = true;
    });

    setInterval(function() {
        if (scroll_chk) {
            scroll_process();
            scroll_chk = false;
        }
    }, 50);

    function scroll_process() {           
        $(pro_process).eq(0).addClass(pro_ani_type).css("opacity", 1).css("transition-delay",pro_ani_transDly).css("animation-delay","300ms");
        $(pro_process).eq(1).addClass(pro_ani_type).css("opacity", 1).css("transition-delay",pro_ani_transDly).css("animation-delay","1000ms");
        $(pro_process).eq(2).addClass(pro_ani_type).css("opacity", 1).css("transition-delay",pro_ani_transDly).css("animation-delay","1300ms");
        $(pro_process).eq(3).addClass(pro_ani_type).css("opacity", 1).css("transition-delay",pro_ani_transDly).css("animation-delay","1600ms");
        $(pro_process).eq(4).addClass(pro_ani_type).css("opacity", 1).css("transition-delay",pro_ani_transDly).css("animation-delay","1900ms");
        $(pro_process).eq(5).addClass(pro_ani_type).css("opacity", 1).css("transition-delay",pro_ani_transDly).css("animation-delay","2200ms");
        $(pro_process).eq(6).addClass(pro_ani_type).css("opacity", 1).css("transition-delay",pro_ani_transDly).css("animation-delay","2500ms");
        $(pro_process).eq(7).addClass(pro_ani_type).css("opacity", 1).css("transition-delay",pro_ani_transDly).css("animation-delay","2800ms");
        $(pro_process).eq(8).addClass(pro_ani_type).css("opacity", 1).css("transition-delay",pro_ani_transDly).css("animation-delay","3100ms");
        $(pro_process).eq(9).addClass(pro_ani_type).css("opacity", 1).css("transition-delay",pro_ani_transDly).css("animation-delay","3400ms");
        $(pro_process).eq(10).addClass(pro_ani_type).css("opacity", 1).css("transition-delay",pro_ani_transDly).css("animation-delay","3700ms");
    }

    $(".btn ul li").click(function(){
        btn_idx = $(this).index();
        click_chk = $(this).index();
        $(this).css("background-color","#f76d76a");
        $(".btn ul li a").eq(btn_idx).css("color","#2c2c2c");
        $(".pri-wrap img").css("opacity","0");
      
        
        if(btn_idx == 0){
            $(".compet").hide();
            $(".price").hide();
            $(".contact").hide();
            $("section .process").show();
            $(".btn ul li").css("background-color","#dfdfdf");
            $(".btn ul li").eq(btn_idx).css("background-color","#f6d76a");            

            $(".btn ul li span").css("color","#7d7d7d").eq(0).css("color","#2c2c2c");
            $(".process .pro-title ul li a").addClass(pro_ani_type).css("opacity", 1).css("transition-delay","50ms").css("animation-delay","50ms");
            $("section").css("height",m1_height);

        }else if(btn_idx == 1){
            $(".process").hide();
            $(".price").hide();
            $(".contact").hide();
            $("section .compet").show();
            $(".btn ul li").css("background-color","#dfdfdf");
            $(".btn ul li").eq(btn_idx).css("background-color","#f6d76a");
            $(".btn ul li span").css("color","#7d7d7d").eq(1).css("color","#2c2c2c");
            $(".compet .compet-title ul li a").addClass(pro_ani_type).css("opacity", 1).css("transition-delay","50ms").css("animation-delay","50ms");
            $("section").css("height",m2_height);

        }else if(btn_idx == 2){
            $(".process").hide();
            $(".compet").hide();
            $(".contact").hide();
            $("section .price").show();
            $(".btn ul li").css("background-color","#dfdfdf");
            $(".btn ul li").eq(btn_idx).css("background-color","#f6d76a");
            $(".btn ul li:nth-child(3) a").css("color","#2c2c2c");
            com_img.style.backgroundImage = "url("+img_root+(comp_idx+2)+".png)";
            $(".btn ul li span").css("color","#7d7d7d").eq(2).css("color","#2c2c2c");
            $(".price .pri-title ul li a").addClass(pro_ani_type).css("opacity", 1).css("transition-delay","50ms").css("animation-delay","50ms");
            $("section").css("height",m3_height);

            setInterval(function() {
                if (scroll_chk) {
                    scroll_start();
                    scroll_chk = false;
                }
            }, 25);
        
            function scroll_start() {
                $(".pri-wrap img").css("opacity","1");
            }
        }else if(btn_idx == 3){
            $(".process").hide();
            $(".price").hide();
            $(".compet").hide();
            $("section .contact").show();
            $(".btn ul li").css("background-color","#dfdfdf");
            $(".btn ul li").eq(btn_idx).css("background-color","#f6d76a");
            $(".btn ul li:nth-child(4) a").css("color","#2c2c2c");
            $(".btn ul li span").css("color","#7d7d7d").eq(3).css("color","#2c2c2c");
            $(".contact .con-title ul li a").addClass(pro_ani_type).css("opacity", 1).css("transition-delay","50ms").css("animation-delay","50ms");
            $("section").css("height",m4_height);
        }
    })

    $(".compet-img").click(function(){
        comp_idx = $(this).index();
        com_img.style.backgroundImage = "url("+img_root+(comp_idx+1)+".png)";
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

    console.log(getUrlParameter("sub"))

    if (getUrlParameter("sub") != undefined) {
        $("."+getUrlParameter("sub")).trigger("click");


        
        $("html, body").stop().animate({
            scrollTop: $(".con div").offset().top
        })
    }
       
    if (getUrlParameter("sub") != undefined) {
        $("."+getUrlParameter("sub")).trigger("click");
        setTimeout(function(){
            $("html, body").stop().animate({
                scrollTop: $(".con").eq(getUrlParameter("sub").slice(7,9)-1).find("div").offset().top
            })
        },100)
    }



})