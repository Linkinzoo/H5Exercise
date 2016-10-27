var $=require("./jquery-3.1.0");
var layoutToBlock = require('./layoutToBlock');


// 页面渲染完成后执行匿名函数：
$(document).ready(function(){

    /* 顶部搜索栏的控制 */ 
    // 导航栏中搜索按钮的点击事件
    $('.searchIcon').click(function(){

        // 搜索栏显示
        $('#searchBar').addClass('scale');
    })

    // 搜索栏关闭按钮的点击事件
    $('.xIcon').click(function(){

        // 搜索栏消失
        $('#searchBar').removeClass('scale');
    })

    // 搜索栏搜索按钮的点击事件
    $('#searchBtn').click(function(){

        window.location.href = 'http://search.jikexueyuan.com/course/?q='+ $('#searchInput').val();
    })

    // 搜索栏搜索框的回车事件
    $('#searchInput').bind('keypress',function(event){
        if(event.keyCode == "13")    
            {
                window.location.href = 'http://search.jikexueyuan.com/course/?q='+ $('#searchInput').val();
            }
    })
    /* 顶部搜索栏的控制 end */ 


    /* 修改课程格子的布局 */ 
    // 块状格式化按钮
    $(".formatBlock").click(function(){
    	layoutToBlock();
    })
    // 块状格式化按钮
    $(".formatList").click(function(){

        $('.lessons li').addClass('class2')
        $('.placeHolderForMainContent').hide();
    })
    /* 修改课程格子的布局 end */ 
})

// 窗口变化时，需要做的操作：
window.onresize = function(){

}

/************************************ 方法 ************************************/