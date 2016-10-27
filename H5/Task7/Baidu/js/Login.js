// 页面渲染完成后执行匿名函数：
$(document).ready(function(){

    // 导航栏：划过用户名时出现列表：
    var userList = $('.userListBox');
    var userListIndex = $('#userListIndex');

    userListIndex.hover(function(){

        userList.stop().show();
    })
    userListIndex.mouseleave(function(){

        userList.stop().hide();
    })
    userList.hover(function(){
        
        userList.stop().show();
    })
    userList.mouseleave(function(){
        
        userList.stop().hide();
    })

    // 导航栏：划过设置时出现列表：
    var settingList = $('.settingListBox');
    var settingListIndex = $('#settingListIndex');

    settingListIndex.hover(function(){

        settingList.stop().show();
    })
    settingListIndex.mouseleave(function(){

        settingList.stop().hide();
    })
    settingList.hover(function(){
        
        settingList.stop().show();
    })
    settingList.mouseleave(function(){
        
        settingList.stop().hide();
    })

    // 导航栏：划过更多产品时出现列表：
    var moreMenu = $('.menu');
    var moreMenuIndex = $('.moreIndex');
    moreMenuIndex.hover(function(){

        moreMenu.stop().fadeIn(300);

        // 让鼠标在菜单内时，固定住页面：
        $('body').css({
            'overflow':'hidden'
        });
    })
    moreMenu.mouseleave(function(){
        
        moreMenu.hide();

        // 让鼠标在离开菜单时，解除对页面的固定：
        $("body").removeAttr("style");
    })
    moreMenu.mouseenter(function(){
    })

    // 更多产品列表的高度设置
    moreMenuHeightResize();

    // 窗口滚动时，需要做的操作：
    // $('body').get(0).onscroll = function(){
    $(window).scroll(function(){

        // 判断是否该显示回到顶部按钮
        loadWhenScroll();
    })
    // 刷新窗口时，判断是否该显示回到顶部按钮：
    // loadWhenScroll();

    // 为回到顶部按钮添加功能
    $('.backToTopWrapper').click(function(){

        // 回到顶部功能；为兼容更多的浏览器，加入了html标签
        // $('body').scrollTop(0, normal);
        $('body, html').stop().animate({scrollTop: '0px'}, 1000);
        
    })

    // 为换肤按钮添加点击事件
    $('#ccBtn').click(function(){

        // 换肤菜单显示：
        $('.changeBgWrapper').css({
            'top':'0',
            'opacity':'1'
        });

        // 默认页面为风景界面
        bgTagSelected(0);
    })


    // 为换肤菜单中的收起按钮添加点击事件
    $('.takeBack').click(function(){

        $('.changeBgWrapper').removeAttr('style');
    })


    // 为换肤菜单中的取消背景按钮添加点击事件
    $('.bgCancel').click(function(){

        // 清除储存的想着字段
        // localStorage.clear('theBgBtnIndex');
        localStorage.removeItem('theBgBtnIndex');
        localStorage.removeItem('theBgPath');

        // 判断是否选择过皮肤，并进行相应的操作
        chooseBgOrNot();

        // 取消原背景的选中状态
        $('.choose').removeAttr('style');
    })


    // 判断是否选择过皮肤，并进行相应的操作
    chooseBgOrNot();
    

    // 为换肤菜单中的每个背景添加点击事件：
    $('.bgCell').click(function(){

        // 取消原背景的选中状态
        $('.choose').removeAttr('style');

        // 储存被选中的背景按钮的位置
        var bgBtnIndex = $(this).index('.bgCell');
        localStorage.setItem('theBgBtnIndex', bgBtnIndex);

        // 储存颜色到localStorage：
        var bgPath = $(this).children('img').attr('src');
        localStorage.setItem('theBgPath', bgPath);

        // 判断是否选择过皮肤，并进行相应的操作
        chooseBgOrNot();
    })


    // 为换肤菜单中的每个背景添加hover事件
    $('.bgCell').hover(function(){

        // 接收点击按钮的索引
        var thePath = $(this).children('img').attr('src');

        $('.previewImg').attr('src',thePath);


        // 获取上次选择的背景：
        var theBgPath = localStorage.getItem('theBgPath');

        // 判断预览框的背景是否是无背景下的背景：
        if (theBgPath == null) {

            // 当前未选用背景时，图片是隐藏的
            $('.previewImg').show();

            $('.pageUI').removeAttr('style');
        }
    },function(){

        // 判断是否选择过皮肤，并进行相应的操作
        chooseBgOrNot();
    })


    // 为换肤菜单内容的标签栏按钮添加点击事件
    $('.bgMenuBtn').click(function(){

        // 接收点击按钮的索引
        var index = $(this).index('.bgMenuBtn');

        // 调用按钮点击绑定的方法
        bgTagSelected(index);
    })

    // 页面主要内容的标签栏按钮控制
    $('.cellInMenu').click(function(){

        // 接收点击按钮的索引
        var index = $(this).index('.cellInMenu');

        // 调用按钮点击绑定的方法
        tagSelected(index);
    })

    // 调用按钮点击绑定的方法，将载入时的默认超始页设为推荐页面：
    tagSelected(1);

    // 我的关注中的内容控制
    $('.titleForMyNavBar').click(function(){
        $('.myNavBarContent').toggle();
    })

    // 视频页面中的评分设置：
    $('.scoreNum').ready(function(){

        videoScoreSetting();
    })
})

// 窗口变化时，需要做的操作：
window.onresize = function(){

    // 更多产品列表的高度设置
    moreMenuHeightResize();

    // 判断是否该显示回到顶部按钮
    loadWhenScroll();

    // 窗口变化到手机大小时，隐藏换肤菜单：
    hideChangeBgMenu();
}

/************************************ 方法 ************************************/
// 监听页面滚动：
var offsetTop;
var hotPointRight;
var windowWidth;
var hotPointScrollTop;   

// 判断是否该显示回到顶部按钮
function loadWhenScroll() {

    windowWidth = $(window).width();
    offsetTop = $(window).scrollTop();

    /********** 显示/隐藏回到顶部按钮 **********/
    // 判断是否显示按钮：
    if (offsetTop == 0) {

        $('.backToTopWrapper').stop().fadeOut(200);

    }else{

        $('.backToTopWrapper').stop().fadeIn(200);
    }


    /********** 推荐页面中的实时热点模块位置设置 **********/
    // 获得右边距离：
    if (windowWidth > 1000) {

        hotPointRight = (windowWidth - 895) / 2 + 6;

    }else{
        hotPointRight = windowWidth - 895 - 52.5 + 6;
    }
    
    // 判断顶部偏移量，决定是否固定实时热点模块
    if (offsetTop > 320) {
        $('.hotPoint').css({

            'position':'fixed',
            'top':'0px',
            'bottom':'auto',
            'right':hotPointRight
        })

        // 判断是否滚动到底部：
        hotPointScrollTop =  $('.recommendContent').height() - $('.hotPoint').height() + 320 - 39;
        if (offsetTop > hotPointScrollTop) {

            $('.hotPoint').removeAttr("style");

            $('.hotPoint').css({
                'position':'absolute',
                'bottom':'19px',
                'top':'auto'
            })
        }
    }else{

        $('.hotPoint').removeAttr("style");
    }

    // 测试用方法，监听滚动值：
    // console.log(offsetTop);
    // console.log($('.hotPoint').height());

    // console.log(hotPointScrollTop);
}


// 更多产品列表的高度设置
function moreMenuHeightResize() {

    var moreMenu = $('.menu');
    var moreMenuHeight = $(window).height() - 41;

    $('.pic').css({
                'height':moreMenuHeight
            });
}

// 调用按钮点击绑定的方法，将载入换肤菜单时的默认超始页设为风景页面：
function bgTagSelected(index){
        // 刷新所有标签的状态：
        $('.bgMenuBtn').removeAttr("style");

        // 刷新所有内容页面的状态：
        $('.bgBlock').removeAttr("style");

        // alert($('.cellInMenu').length);

        // 改变选中标签的状态：
        $('.bgMenuBtn').eq(index).css({
            'color': '#fff',
            'background-color': '#389cff'
        })

        // 改变相应页面的状态
        $('.bgBlock').eq(index).css({
            'display':'block'
        });
}

// 调用按钮点击绑定的方法，将载入时的默认超始页设为推荐页面：
function tagSelected(index){
        // 刷新所有标签的状态：
        $('.cellInMenu').removeAttr("style");

        // 刷新所有内容页面的状态：
        $('.contentCell').removeAttr("style");

        // 改变选中标签的状态：
        $('.cellInMenu').eq(index).css({

            'background-color':'rgba(147,152,162,0.4)',
            'font-weight':'bold'
        })

        // 改变相应页面的状态
        $('.contentCell').eq(index).show();
}

// 视频页面中的评分设置：
function videoScoreSetting(){

    // 遍历评分控件，设置相应的分数
    for (var i = 0; i < $('.scoreNum').length; i++) {
        var score = $('.scoreNum').eq(i).html();
        var scoreWidth = 65 * score / 10;
        $('.activeStar').eq(i).css({
            'width':scoreWidth
        });
    }
}

// 窗口变化到手机大小时，隐藏换肤菜单：
function hideChangeBgMenu(){

    windowWidth = $(window).width();

    if (windowWidth < 810) {
        $('.changeBgWrapper').css({
            'top':'-500px'
        });
    }
} 

// 判断是否选择过皮肤
function chooseBgOrNot(){
    // 获取上次选择的背景：
    var theBgPath = localStorage.getItem('theBgPath');

    // 获取上次选择的按钮的位置
    var bgBtnIndex = localStorage.getItem('theBgBtnIndex');

    if (bgBtnIndex != null) {

        // 为选择的背景按钮添加选中状态
        $('.bgCell').eq(bgBtnIndex).children('.choose').css({
                'display':'block'
        });
    }

    // 判断是否选择过皮肤
    if (theBgPath == null) {

        // 改变页面配色
        $('.navColor').css({
            'background-color':'transparent',
            'border-bottom': '1px solid rgba(192, 192, 192, .9)',
            'height': '32px'
        });
        $('.mainColor').css({
            'color':'#555'
        });
        $('.logo').attr('src','./Icon/baiduLogo.png');
        $('.inputBorder').css({
            'border':'1px solid #AAAAAA',
            'border-right':'none',
            'height':'32px',
            'box-shadow':'none'
        });
        $('.buttonBorder').css({
            'background-image':'none',
            'box-shadow':'none',
            'color':'#fff'
        });
        $('.bgImg').hide();
        $('.previewImg').hide();
        $('.pageUI').css({
            'background-position':'-275px 0'
        });
        $('.bgCancel').hide();

    }else{

        // 恢复页面配色成为有背景图片的配色
        $('.navColor').removeAttr('style');
        $('.mainColor').removeAttr('style');
        $('.logo').attr('src','./Icon/logo_white.png');
        $('.inputBorder').removeAttr('style');
        $('.buttonBorder').removeAttr('style');
        $('.bgImg').show();
        $('.previewImg').show();
        $('.pageUI').removeAttr('style');
        $('.bgCancel').show();

        // 替换背景
        $('.bgImg').attr('src',theBgPath);
        $('.previewImg').attr('src',theBgPath);
    }
}