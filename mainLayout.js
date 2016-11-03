$(window).resize(function(){

});

$(document).on("mouseover mouseout",".sidebar",function(e){
    if(e.type == "mouseover"){
        $(this).css("overflow","auto");
    }else{
        $(this).css("overflow","hidden");
    }
})