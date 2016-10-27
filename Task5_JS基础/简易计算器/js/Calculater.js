// 获得显示屏
var result = document.getElementById('result');


/* 计算方法
 * valueA:屏幕中数值1的值
 * valueB:屏幕中数值2的值
 * sign  :单选框中选择的运算符号 
*/
function calculate(valueA, valueB, sign) {

	// 判断值是否是数字
	if (isNaN(valueA) || isNaN(valueB)) {

		alert("请您输入阿拉伯数字");
		return;

	// 判断值是否是空格
	}else if (valueA.trim() == "" || valueB.trim() == "" ) {
		alert("值不能为空");
		return;
	}

	// 获得数值
	var A =	parseFloat(valueA);
	var B = parseFloat(valueB);

	// 判断符号，进行计算：
	if (sign == "+") {

		result.innerHTML = parseFloat((A + B).toFixed(4));

	}else if (sign == "-") {

		result.innerHTML = parseFloat((A - B).toFixed(4));

	}else if (sign == "*") {

		result.innerHTML = parseFloat((A * B).toFixed(4));

	}else if (sign == "/") {

		// 判断除数是否为0：
		if (valueB == 0) {
			alert("除数不能为0");
			return;
		}

		result.innerHTML = parseFloat((A / B).toFixed(4));
	}


	// 判断显示数值的长度，调整字体：
	if (result.innerHTML.length > 8 && result.innerHTML.length < 15) {
		// 长度在8-15位时，字体大小设为30px:
		result.style.cssText = "font-size:30px";

	}else if (result.innerHTML.length > 15) {
		// 长度在15位以上时，字体大小设为18px:
		result.style.cssText = "font-size:18px";
	}
}

// 获取输入框
var input1 = document.getElementById('v1');
var input2 = document.getElementById('v2');

/* 清除数值*/
function clearAll(){
	
	// 清除输入框中的数值：
	input1.value = "";
	input2.value = "";

	// 显示屏归0：
	result.innerHTML = "0.00";

	// 字体复位：
	result.style.cssText = "font-size:54px";
}