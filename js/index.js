$(document).ready(function(){

    $(".hamburger a").click(function(){
        $(this).toggleClass("on")
        $(".hamburger a b").fadeToggle()
        $(".side").fadeToggle()
        
    })

    //쿠키설정
    function setCookie(name, value, expiredays){
        let todayDate = new Date();

        todayDate.setDate(todayDate.getDate() + expiredays);

        document.cookie = name + "="+escape(value) + "; path = / ; expires=" + todayDate.toGMTString+";" 

    }

    function closePopup(){

        if(document.today.chk.checked){
            setCookie("notice","abc",1)
        }
        $(".notice").hide()

    }

    let cookieDate = document.cookie;

    if(cookieDate.indexOf("notice=abc") < 0){
        $(".notice").show();

    }else{
        $(".notice").hide();

    }

    $("label").click(function(){
        closePopup();
        setCookie("notice","abc",1)
    })

    $(".notice p").click(function(){
        $(".notice").hide()
    })

    //쿠키설정




    $(".text ul li").eq(0).addClass("animated slideInLeft").css("opacity",1).css("transition-delay","400ms").css("animation-delay","400ms");
    $(".text ul li").eq(1).addClass("animated slideInRight").css("opacity",1).css("transition-delay","700ms").css("animation-delay","700ms");
    $(".text ul li").eq(2).addClass("animated slideInLeft").css("opacity",1).css("transition-delay","1000ms").css("animation-delay","1000ms");
    $(".text ul li").eq(3).addClass("animated slideInRight").css("opacity",1).css("transition-delay","1300ms").css("animation-delay","1300ms");


    // 큐브


    
    $(function () {
        var $cubelet = $('.cube');
        $cubelet.cubeletInit();
        var $rotateX = $('.rotate-x');
        var $rotateY = $('.rotate-y');
        var $rotateZ = $('.rotate-z');
        var $scale = $('.scale');
        // var $img = $('img');
        $cubelet.on('change', function () {
            var coords = $cubelet.cubeletGetCoords();
            $rotateX.text(coords.x);
            $rotateY.text(coords.y);
            $rotateZ.text(coords.z);
            $scale.text(coords.scale);
            // $cubelet.cubeletApplyRotationToElement($img);
        });
        $(window).on('keydown', function (evt) {
          if (evt.which == 32) { // Space bar
            $cubelet.cubeletIsShown() ? $cubelet.cubeletHide() : $cubelet.cubeletShow();
        }
        })
        $cubelet.trigger('change');
        

    });






    particlesJS("particles-js", {
        particles: {
            number: {
                value: 47,
                density: { enable: true, value_area: 868.0624057955 }
            },
            color: { value: "#c1c2dd" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
                image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
            interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
            retina_detect: true
    });
     
        


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



$("html,body").on('scroll mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
});



})//jquery