$(document).ready(function(){

	// 标签按钮的宽度设置
    btnResize();

    /**
    ***单例模式管理页面主要内容中，标签控制页面切换功能：
    **/ 
    var contentMenu = {
        init:function(){
            this.render();//绑定元素；
            this.bind();//绑定方法；
            this.test(0);// 初始页面显示；
        },
        render:function(){
            var menu = this;
            menu.juniorBtn = $('#juniorBtn');
            menu.htmlBtn = $('#htmlBtn');
            menu.cssBtn = $('#cssBtn');
            menu.jsBtn = $('#jsBtn');
        },
        bind:function(){
            var menu = this;
            menu.juniorBtn.click(function(){menu.test(0);});
            menu.htmlBtn.click(function(){menu.test(1);});
            menu.cssBtn.click(function(){menu.test(2);});
            menu.jsBtn.click(function(){menu.test(3);bugFix();});
        },
        // 调用按钮点击绑定的方法，将载入时的默认超始页设为推荐页面：
        test:function(index){
        		// 判断点击的标签，给标题和背影填色：
        		bugFix();
        		var color ="";
                switch(index){
                	case 0:color="#fff";break;
                	case 1:color="#35b558";break;
                	case 2:color="rgb(100, 136, 186)";break;
                	case 3:color="rgb(254, 205, 82)";break;
                };
                $("h2").css({"color":color});
                $(".wrapper").css({"background-color":color});

                // 刷新所有标签的状态：
                // alert(index);
                $('li .textBox').removeAttr("style").eq(index).css({
                	"height":"51px",
                	"background-color": "rgb(251,70,93)"
                });
                $('li b').removeAttr("style").eq(index).css({
                	"color":"#fff",
				    "font-size": "21px"
                });
                $('li .edgeTop').css({"border-top-color":""}).eq(index).css({
                	"border-top-color": "rgb(251,70,93)"
                });

                // 刷新所有内容页面的状态：
                $('.container').removeAttr("style");

                // 改变选中标签的状态：
                $('.container').eq(index).css({
                    'display':'block'
                });
                // 添加了0.6s动画后,bugFix方法不能在第一次点击时完成调整
                setTimeout('bugFix()',600);
				// setTimeout('console.log(2)',1000);
        }
    }
    contentMenu.init();

});
// 窗口变化时，需要做的操作：
window.onresize = function(){

	// 标签按钮的宽度设置
	btnResize();
	bugFix();
}

/*********** 方法 ***********/
// 标签按钮的宽度设置
function btnResize(){
	// 获取屏幕宽度
	var windowW = $(window).width();
	var theWidth = windowW /12 *11 /4 /2;
	// alert(theWidth);
	// 设置按钮下部的宽度：
	$("li .edgeTop").css({
		"border-right-width":theWidth,
		"border-left-width":theWidth
	});
	$(".nav .edgeRight").css({
		"border-left-width":windowW
	});
}
function bugFix(){
	// alert(123);
	var height = $('li .textBox').eq(3).css("height");
	// alert(height == "51px");
	if ($("li").width() < 130 && height == "51px") {
		$('li b').eq(3).stop().css({"font-size": "14px"});
	}else if ($("li").width() > 130 && height == "51px") {
		$('li b').eq(3).stop().css({"font-size": "21px"});
	}
}