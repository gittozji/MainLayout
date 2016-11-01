$(window).resize(function(){

});

$(document).on("mouseover mouseout",".sidebar",function(e){
    if(e.type == "mouseover"){
        $(this).css("overflowY","scroll");
    }else{
        $(this).css("overflowY","hidden");
    }
})