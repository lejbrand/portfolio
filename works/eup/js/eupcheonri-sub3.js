$("document").ready(function(){

    $(".store-map .map-right ul li a").on('click', function(e){
        $(this).val($(this).attr('value'));
        e.preventDefault();
    });

    $(".store .store-map .map-right ul li").removeClass("on").eq(0).addClass("on")
    $(".store .store-map .map-right ul li").click(function(){
        // alert()
        let i = $(this).index();
        $(".map-left iframe").hide().eq(i).show()          
        

        $(".store .store-map .map-right ul li").removeClass("on").eq(i).addClass("on")
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

})