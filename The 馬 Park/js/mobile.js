$(document).ready(function(){
    
    $(".hamburger a").click(function(){
        $(".hamburger a").toggleClass("on")
        $(".hamburger b").fadeToggle()
        $(".hamburger-wrap").slideToggle()

    })

})