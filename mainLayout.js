$(document).ready(function(){

    var mmdIsLarge = true;//是否大屏幕的标志
    if($(window).width() < 980){//小于980，隐藏sidebar
        mmdIsLarge = false;
        $(".mmd-main").css("marginLeft","0");
        $(".mmd-sidebar").css("left","-250px");
    }

    //监听屏幕变化
    $(window).resize(function(){
        if($(this).width() < 980){
            mmdIsLarge = false;
            $(".mmd-main").css("marginLeft","0");
            $(".mmd-sidebar").css("left","-250px");
        }
        else{
            mmdIsLarge = true;
            $(".mmd-main").css("marginLeft","250px");
            $(".mmd-sidebar").css("left","0");
            $(".mmd-screen").css({"width": "0%", "height": "0%"});
        }
    });

    //监听导航栏是否获取焦点
    $(document).on("mouseover mouseout",".mmd-sidebar",function(e){
        if(e.type == "mouseover"){
            $(this).css("overflow","auto");
        }else{
            $(this).css("overflow","hidden");
        }
    })

    //导航栏开启事件
    $(".mmd-menu-btn").click(function(){
        if(!mmdIsLarge){
            $(".mmd-screen").css({"width":"100%","height":"100%"});
            openSidebar();
        }
    })

    //导航栏关闭事件
    $(".mmd-screen").click(function(){
        if(!mmdIsLarge) {
            $(".mmd-screen").css({"width": "0%", "height": "0%"});
            closeSidebar();
        }
    })

    //打开导航栏
    function openSidebar(){
        $(".mmd-sidebar").animate({left:'0px'},400);
    }
    //关闭导航栏
    function closeSidebar(){
        $(".mmd-sidebar").animate({left:'-250px'},400);
    }
})
