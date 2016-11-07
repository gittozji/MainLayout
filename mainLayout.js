$(window).resize(function(){
    if($(this).width() < 980){

    }
});

$(document).on("mouseover mouseout",".sidebar",function(e){
    if(e.type == "mouseover"){
        $(this).css("overflow","auto");
    }else{
        $(this).css("overflow","hidden");
    }
})