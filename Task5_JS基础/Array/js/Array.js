// 获得控件
var theChar = document.getElementById('theChar');
var theTimes = document.getElementById('theTimes');
var thePlaces = document.getElementById('thePlaces');

/*检查数组中的元素，哪个出现次数最多，是多少次，位置在哪；
 *array:传入的数组参数；
 */
function checkArray(array) {
	
	// 判断是否是数组：
	if (!Array.isArray(array)) {

		// 不是数组的话，创建一个数组：
		var newArray = [];
		// 遍历数组中的元素到新数组中：

		for (var i in array) {

			// 判断：筛选掉数组中会出现的中文连接符号，不将其加进新数组：
			if (array[i] == "[" || array[i] == "]" || array[i] == "[" ||
			    array[i] == "，" || array[i] == " "|| array[i] == "“" ||
			     array[i] == "”") {
				continue;
			}
			// 将非中文连接符号写入新数组
			newArray.push(array[i]);
		}
	}else{
		// 原参数是数组的话，将其重新命名：
		var newArray = array;
	}
	
	// 创建变量
	var times = 0;
	var maxTimes = 0;
	var theElement = [];
	var order = [];
	var maxOrder = [];

	// 遍历数组中的每个元素：
	for (var j = 0; j < newArray.length; j++) {
		var element = newArray[j];

		// 记数器归零,数组复位：
		times = 0;
		order = [];

		// 让每一个元素遍历数组
		for (var k = 0; k < newArray.length; k++) {

			// 有与本元素相同的时，times加1，并记录其位置：
			if (element == newArray[k]) {
				times ++;
				order.push(k+1);
			}
		}
		// 在遍历数组后，判断本元素的出现次数是否是最多的那个元素：
		if (times > maxTimes) {

			// 是的话，刷新最高次数：
			maxTimes = times;

			// 清空数组并记录最高次数的元素是哪个：
			theElement = [];
			theElement.push(element);

			// 清空数组并记录最高出现次数的元素的位置：
			maxOrder = [];
			maxOrder.push(order);

		// 判断最高出现次数的元素是否唯一而未加入答案数组：
		}else if (times == maxTimes && theElement.indexOf(element) == -1) {

			theElement.push(element);
			maxOrder.push(order);
		}
	}

	// 将次数答案返回到UI界面：
	theTimes.innerHTML 	= (maxTimes)+"个";

	// 将元素答案返回UI界面：
	theChar.innerHTML = theElement;

	// 整理次序答案：
	// 创建变量：
	var sentence = "";
	var word 	 = "";

	// 遍历次序，每个值加1：
	for (var m in maxOrder) {
		word = maxOrder[m] + "和";

		sentence = sentence.concat(word);
	}

	// 将去掉最后逗号的字符串返回到UI界面：
	thePlaces.innerHTML = sentence.slice(0, -1);
}