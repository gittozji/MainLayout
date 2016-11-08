$(document).ready(function(){
    //监听屏幕变化
    $(window).resize(function(){
        if($(this).width() < 980){
            $(".main").css("marginLeft","0");
            $(".sidebar").css("left","-250px");
        }
        else{
            $(".main").css("marginLeft","250px");
            $(".sidebar").css("left","0");
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

    //导航栏开启事件
    $(".btn").click(function(){
        $(".screen").css({"width":"100%","height":"100%"});
        openSidebar();
        alert("ddd");
    })

    //导航栏关闭事件
    $(".screen").click(function(){
        $(".screen").css({"width":"0%","height":"0%"});
        closeSidebar();
    })

    //打开导航栏
    function openSidebar(){
        $(".sidebar").removeClass(".mmd-sidebar-out");
        $(".sidebar").addClass("mmd-sidebar-in");
    }
    //关闭导航栏
    function closeSidebar(){
        $(".sidebar").addClass("mmd-sidebar-out");
    }
})
