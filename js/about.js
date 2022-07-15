$(document).ready(function(){
    

    let count = 0;
    let pro_chk = false;

    $(".skill .text ul li").eq(0).show()
    $(".skill .icon ul li").eq(0).addClass("on")
    $(".skill .text ul li").eq(0).addClass("on")

    $(".hamburger a").click(function(){
        $(this).toggleClass("on")
        $(".hamburger a b").fadeToggle()
        $(".side").fadeToggle()
        $(".header").toggleClass("on")
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





    $(".skill .icon ul li a").click(function(e){
        e.preventDefault()
    })
    $(".skill .icon ul li").click(function(){
        let inumber = $(this).index()
        $(".skill .text ul li").hide().eq(inumber).show()
        $(".skill .icon ul li").removeClass("on").eq(inumber).addClass("on")
        $(".skill .text ul li").removeClass("on").eq(inumber).addClass("on")

    })

    let timer = setInterval(function(){
        count++
        if(count>$(".skill .icon ul li").length-1){
            count = 0
        }
        $(".skill .text ul li").hide().eq(count).show()
        $(".skill .icon ul li").removeClass("on").eq(count).addClass("on")
        $(".skill .text ul li").removeClass("on").eq(count).addClass("on")
        
    },3000)

    $(".skill .icon ul li").mouseover(function(){
        clearInterval(timer)
    }).mouseout(function(){
        timer = setInterval(function(){
            count++
            if(count>$(".skill .icon ul li").length-1){
                count = 0
            }
            $(".skill .text ul li").hide().eq(count).show()
            $(".skill .icon ul li").removeClass("on").eq(count).addClass("on")
            $(".skill .text ul li").removeClass("on").eq(count).addClass("on")
            
        },3000)
    })







    // let bar1 = new ProgressBar.Circle("#pro1",{    //C가 대문자 (원형)
    //     strokeWidth: 4 , // \ strokeWidth: 채워지는 선의 굵기라는 의미
    //     color: "#6667ab" , //\원하는 색상을 설정해주면 그 색상대로 찬다.
    //     trailColor : "#e1e1e1" , //\뒷 배경을 설정해 줄수 있다 C가 대문다
    //     duration: 1000 ,      //\채워지는 속도 이것도 1000m/s가 1초다.
    //     trailWidth : 4 ,   //\ 뒷배경의 크기를 설정해 줄 수 있다. 
    //     step: function(state,circle){
    //         circle.setText(Math.round(circle.value() * 100)+"%")
    //     }

    // })
    // bar1. animate(0.95) //1이 100%다 변수명은 위에서 선언한 변수명을 그대로 사용해줘야 한다.

    // let bar2 = new ProgressBar.Circle("#pro2",{ 
    //     strokeWidth: 4 , 
    //     color: "#6667ab" , 
    //     trailColor : "#e1e1e1" ,
    //     duration: 1000 ,    
    //     trailWidth : 4 , 
    //     step: function(state,circle){
    //         circle.setText(Math.round(circle.value() * 100)+"%")
    //     }

    // })
    // bar2. animate(0.95)

    // let bar3 = new ProgressBar.Circle("#pro3",{ 
    //     strokeWidth: 4 , 
    //     color: "#6667ab" , 
    //     trailColor : "#e1e1e1" ,
    //     duration: 1000 ,    
    //     trailWidth : 4 , 
    //     step: function(state,circle){
    //         circle.setText(Math.round(circle.value() * 100)+"%")
    //     }

    // })
    // bar3. animate(0.95)

    // let bar4 = new ProgressBar.Circle("#pro4",{ 
    //     strokeWidth: 4 , 
    //     color: "#6667ab" , 
    //     trailColor : "#e1e1e1" ,
    //     duration: 1000 ,    
    //     trailWidth : 4 , 
    //     step: function(state,circle){
    //         circle.setText(Math.round(circle.value() * 100)+"%")
    //     }

    // })
    // bar4. animate(0.95)

    // let bar5 = new ProgressBar.Circle("#pro5",{ 
    //     strokeWidth: 4 , 
    //     color: "#6667ab" , 
    //     trailColor : "#e1e1e1" ,
    //     duration: 1000 ,    
    //     trailWidth : 4 , 
    //     step: function(state,circle){
    //         circle.setText(Math.round(circle.value() * 100)+"%")
    //     }

    // })
    // bar5. animate(0.95)


    $(window).scroll(function(){

        let pos = $(window).scrollTop();
        let current = (pos/($(document).outerHeight() - $(window).height())) * 100;
        console.log(current)
        // console.log(pos)

        if(current >= 54){
    
            if(pro_chk == true){
                return
            }

            let bar1 = new ProgressBar.Circle("#pro1",{    //C가 대문자 (원형)
                strokeWidth: 4 , // \ strokeWidth: 채워지는 선의 굵기라는 의미
                color: "#6667ab" , //\원하는 색상을 설정해주면 그 색상대로 찬다.
                trailColor : "#e1e1e1" , //\뒷 배경을 설정해 줄수 있다 C가 대문다
                duration: 2000 ,      //\채워지는 속도 이것도 1000m/s가 1초다.
                trailWidth : 4 ,   //\ 뒷배경의 크기를 설정해 줄 수 있다. 
                step: function(state,circle){
                    circle.setText(Math.round(circle.value() * 100)+"%")
                }
        
            })
            bar1. animate(0.95) //1이 100%다 변수명은 위에서 선언한 변수명을 그대로 사용해줘야 한다.
        
            let bar2 = new ProgressBar.Circle("#pro2",{ 
                strokeWidth: 4 , 
                color: "#6667ab" , 
                trailColor : "#e1e1e1" ,
                duration: 2000 ,    
                trailWidth : 4 , 
                step: function(state,circle){
                    circle.setText(Math.round(circle.value() * 100)+"%")
                }
        
            })
            bar2. animate(0.95)
        
            let bar3 = new ProgressBar.Circle("#pro3",{ 
                strokeWidth: 4 , 
                color: "#6667ab" , 
                trailColor : "#e1e1e1" ,
                duration: 2000 ,    
                trailWidth : 4 , 
                step: function(state,circle){
                    circle.setText(Math.round(circle.value() * 100)+"%")
                }
        
            })
            bar3. animate(0.95)
        
            let bar4 = new ProgressBar.Circle("#pro4",{ 
                strokeWidth: 4 , 
                color: "#6667ab" , 
                trailColor : "#e1e1e1" ,
                duration: 2000 ,    
                trailWidth : 4 , 
                step: function(state,circle){
                    circle.setText(Math.round(circle.value() * 100)+"%")
                }
        
            })
            bar4. animate(0.95)
        
            let bar5 = new ProgressBar.Circle("#pro5",{ 
                strokeWidth: 4 , 
                color: "#6667ab" , 
                trailColor : "#e1e1e1" ,
                duration: 2000 ,    
                trailWidth : 4 , 
                step: function(state,circle){
                    circle.setText(Math.round(circle.value() * 100)+"%")
                }
        
            })
            bar5. animate(0.95)  
            
            pro_chk = true

        }
    })

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





})//jquery