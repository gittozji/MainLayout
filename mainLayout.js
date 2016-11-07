$(document).ready(function(){
    //监听屏幕变化
    $(window).resize(function(){
        if($(this).width() < 980){

        }
    });

    //监听导航栏是否获取焦点
    $(document).on("mouseover mouseout",".sidebar",function(e){
        if(e.type == "mouseover"){
            $(this).css("overflow","auto");
        }else{
            $(this).css("overflow","hidden");
        }
    })

    //导航栏开关点击事件
    $(".btn").click(function(){
        alert("ddd");
    })
})
