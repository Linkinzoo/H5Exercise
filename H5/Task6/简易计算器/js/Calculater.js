// 获得显示屏
var result = document.getElementById('result');

// 获得符号按钮：
var addBtn = document.getElementById('addBtn');
var minusBtn = document.getElementById('minusBtn');
var multiBtn = document.getElementById('multiBtn');
var diviBtn = document.getElementById('diviBtn');
var powerBtn = document.getElementById('powerBtn');
var sqryBtn = document.getElementById('sqryBtn');
var calcuBtn = document.getElementById('calcuBtn');

// 创建变量
// 数值：
var theValue   = "";
var cacheValue = "";
var valueA 	   = "";
var valueB     = "";

// 符号
var sign = "";

// 正弦值、余弦值和正切值运算中的参数
var sctType = '';
var sctParam = '';

/* 数字输入方法 
 * theBtn:被点击的按钮
*/
function typeValue(theBtn) {

	// 拼接点击的字符
	theValue = theValue.concat(theBtn.innerHTML);
	result.innerHTML = theValue;

	// 判断是否要将运算复位：
	if (sign == '') {

		valueA = '';
	}

	// valueB复位：
	valueB = "";
}

/* 小数点输入方法 */
function typeDot() {

	// 判断当前屏幕所显示的字符串是否为空：
	if (theValue == "") {

		theValue = "0.";
		result.innerHTML = "0.";

	// 判断当前屏幕所显示的字符串中是否有小数点：
	}else if(theValue.indexOf(".") != -1) {
		
		// 显示的字符串中有小数点
		return;

	}else{

		// 显示的字符串中没有小数点，拼接小数点：
		theValue = theValue.concat(".");
		result.innerHTML = theValue;
	}
}

/* 运算符号记忆方法 */
function typeSign(theBtn) {

	// 改变按钮状态
	addBtn.setAttribute("class", "button gray");
	minusBtn.setAttribute("class", "button gray");
	multiBtn.setAttribute("class", "button gray");
	diviBtn.setAttribute("class", "button gray");
	powerBtn.setAttribute("class", "button gray");
	sqryBtn.setAttribute("class", "button gray");

    // 判断是否是首次点击符号按钮：
    if (sign == "") {

		sign = theBtn.innerHTML;
    }

	// 判断是否为连续运算
	// 初次输入符号时：
	if (valueA == "") {

		valueA = theValue;
		theValue = "";

	}else if (valueA != "") {

		valueB = theValue;
		theValue = "";
	}

	// 如果两个数值都不为空，则直接进行计算：
	if (valueA != "" && valueB != "") {

		result.innerHTML = calculate();
	}

	// 记录符号：
	sign = theBtn.innerHTML;

	// 改变按钮状态
    theBtn.setAttribute("class", "button yellow");
}

/* 计算方法
 * valueA:屏幕中数值1的值
 * valueB:屏幕中数值2的值
 * sign  :单选框中选择的运算符号 
*/
function calculate() {

	// 改变符号按钮状态
	addBtn.setAttribute("class", "button gray");
	minusBtn.setAttribute("class", "button gray");
	multiBtn.setAttribute("class", "button gray");
	diviBtn.setAttribute("class", "button gray");
	powerBtn.setAttribute("class", "button gray");
	sqryBtn.setAttribute("class", "button gray");

	// 判断valueB有没有数值：
	if (valueB == "") {

		valueB = theValue;
	}

	// 获得数值
	var A =	Number(valueA);
	var B = Number(valueB);

	// 判断符号，进行计算：
	if (sign == "+") {

		result.innerHTML = parseFloat((A + B).toFixed(4));

	}else if (sign == "-") {

		result.innerHTML = parseFloat((A - B).toFixed(4));

	}else if (sign == "x") {

		result.innerHTML = parseFloat((A * B).toFixed(4));

	}else if (sign == "÷") {

		// 判断除数是否为0：
		if (B == 0) {
			alert("除数不能为0,请重新输入除数");
			theValue = "";
			result.innerHTML = "(请重新输入除数)"
			return;
		}

		result.innerHTML = parseFloat((A / B).toFixed(4));
	}else if (sign == "x^y") {

		result.innerHTML = parseFloat(Math.pow(A, B).toFixed(4));

	}else if (sign == "sqry") {

		result.innerHTML = parseFloat(Math.pow(A, 1.0 / B).toFixed(4));

	}

	// valueA, valueB, theValue, sign复位:
	valueA = result.innerHTML;
	theValue = "";

	if (valueB != "") {

		sign = "";
		valueB = "";
	}

	return valueA;
}

/* 正弦值、余弦值和正切值的运算*/
function sctCalculate(theBtn) {

	// 获得当前按钮内容：
	sctType = theBtn.innerHTML;

	// 获取运算对象：
	// 没有缓存数值时：
	if (valueA == '') {

		sctParam = Number(theValue);

	// 有缓存数值，但没有符号参数时，即valueA为运算结果时，取结果为参数：
	}else if (valueA != '' && sign == '') {

		sctParam = Number(valueA);

	// 有缓存数值，且有符号参数时，放弃缓存数值，直接取当前输入的数值为参数：
	}else if (valueA != '' && sign != '') {

		sctParam = Number(theValue);
	}

	// 判断运算类型并计算：
	if (sctType == "sin") {

		result.innerHTML = parseFloat(Math.sin(sctParam * ((Math.PI)*2/360)).toFixed(8));

	}else if (sctType == "cos") {

		result.innerHTML = parseFloat(Math.cos(sctParam * ((Math.PI)*2/360)).toFixed(8));

	}else if (sctType == "tan") {

		// sctParam不能为90度和270度：
		sctParam = sctParam % 360;

		if (sctParam == 90 || sctParam == -90 || sctParam == 270 || sctParam == -270) {

			alert("tan"+result.innerHTML+"度是不存在的，本次运算已取消");
			return;
		}

		result.innerHTML = parseFloat(Math.tan(sctParam * ((Math.PI)*2/360)).toFixed(8));
	}

	// 数值复位：
	valueA = result.innerHTML;
	theValue = "";
}

/* 清除数值*/
function clearAll(){

	// 改变符号按钮状态
	addBtn.setAttribute("class", "button gray");
	minusBtn.setAttribute("class", "button gray");
	multiBtn.setAttribute("class", "button gray");
	diviBtn.setAttribute("class", "button gray");
	powerBtn.setAttribute("class", "button gray");
	sqryBtn.setAttribute("class", "button gray");
	
	// 清除输入框中的数值：
	valueA   	= "";
	valueB   	= "";
	theValue	= "";
	cacheValue	= "";

	// 显示屏归0：
	result.innerHTML = "0.00";
}



/* 退格键方法*/
function backWord() {

	// 初始值为空时，不做操作
	if (theValue == "") {
		return;
	}

	// 删除最后一个字符：
	theValue = theValue.slice(0, -1);
	result.innerHTML = theValue;

	// 删除后为空时，让屏幕上的值归0：
	if (theValue == "") {

		result.innerHTML = "0.00";
	}
}












