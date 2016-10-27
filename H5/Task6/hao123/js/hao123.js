// 获取导航栏按钮
var nav1 = document.getElementById('nav1');
var nav2 = document.getElementById('nav2');
var nav3 = document.getElementById('nav3');
var nav4 = document.getElementById('nav4');
var nav5 = document.getElementById('nav5');
var nav6 = document.getElementById('nav6');
var nav7 = document.getElementById('nav7');
var nav8 = document.getElementById('nav8');
var nav9 = document.getElementById('nav9');
var nav10 = document.getElementById('nav10');

var cacheID = "";
var lastBtn = "";

// 获取上次选择的颜色：
var theColor = localStorage.getItem('theColor');

// 导航栏按钮切换效果
function navColor(theBtn) {

	// 用class获取时可采用的方法
    // // 刷新按钮状态
    // nav1.setAttribute("class", "navA");
    // nav2.setAttribute("class", "navA");
    // nav3.setAttribute("class", "navA");
    // nav4.setAttribute("class", "navA");
    // nav5.setAttribute("class", "navA");
    // nav6.setAttribute("class", "navA");
    // nav7.setAttribute("class", "navA");
    // nav8.setAttribute("class", "navA");
    // nav9.setAttribute("class", "navA");
    // nav10.setAttribute("class", "navA");

    // // 改变选中按钮状态
    // theBtn.setAttribute("class", "navA active");

    // 用id获取时可采用的方法
    // 获得上一个点击的按钮
    lastBtn = document.getElementById('active');
    lastBtn.id = cacheID;

    // 判断是否为首次点击，记录ID：
    if (cacheID == "") {

        cacheID = "nav1";

    }else{

    	cacheID = theBtn.id;
    }

    // 上次点击的按钮状态复位：
    lastBtn.style.cssText = "";
    theBtn.id = "active";

    // 判断缓存中的颜色是否有值：
    if (theColor != "") {
    	theBtn.style.cssText = "background-color:" + theColor + ";";
    }
}

// 获取需要改变颜色的控件：bgColor
var conNavList = document.querySelector('.conNavList');
var mainColor = document.querySelector('.mainColor');
var govSite = document.querySelector('.govSite');
var govSiteTitle = document.querySelector('.govSiteTitle');
var bgColor = document.querySelector('.bgColor');

// 鼠标划过时，改变字体颜色：
function hoverColor(theBtn) {

	// 判断是否是选中的按钮
	if (theBtn.id == "active") {
		return;
	}

	if (theColor != "") {
		theBtn.style.cssText = "color:" + theColor + ";";
	}	
}

// 鼠标划出时，改变字体颜色回原样：
function unhoverColor(theBtn) {

	// 判断是否是选中的按钮
	if (theBtn.id == "active") {
		return;
	}

	if (theColor != "") {
		theBtn.style.cssText = "";
	}	
}

// 改变主题颜色的方法：
function changeColor(theBtn) {
    // 取色
    var btnColor = document.defaultView.getComputedStyle(theBtn, null).backgroundColor;

    // 将颜色赋值给外面的变量：
    theColor = btnColor;

    // 储存颜色到localStorage：
    localStorage.setItem('theColor', btnColor);
	
    // 获取动态控件
	var active = document.getElementById('active');

    active.style.cssText = "background-color:" + btnColor + ";";
    conNavList.style.cssText = "border-color:" + btnColor + ";";
    mainColor.style.cssText = "background-color:" + btnColor + ";";
    govSite.style.cssText = "border-color:" + btnColor + ";";
    govSiteTitle.style.cssText = "color:" + btnColor + ";";
    bgColor.style.cssText = "background-color:" + btnColor + ";";
}

// 检查上次选择的主题：
function checkColor() {

    // alert(theColor);
    // 判断上次是否选过颜色：
    if (theColor == "") {

 		return;

    }else{
    	// 获取动态控件
	var active = document.getElementById('active');

    active.style.cssText = "background-color:" + theColor + ";";
    conNavList.style.cssText = "border-color:" + theColor + ";";
    mainColor.style.cssText = "background-color:" + theColor + ";";
    govSite.style.cssText = "border-color:" + theColor + ";";
    govSiteTitle.style.cssText = "color:" + theColor + ";";
    bgColor.style.cssText = "background-color:" + theColor + ";";

    }

}
