$("document").ready(function(){

    $(".scroll").click(function(){
        $("html,body").stop().animate({
            scrollTop: 0
        }, 1500)
    })
    $(window).scroll(function(){
        let pos = $(window).scrollTop()
        // console.log(pos)
        if(pos > 280){
            $(".scroll").addClass("on")
        }else{
            $(".scroll").removeClass("on")
        }
    })

})