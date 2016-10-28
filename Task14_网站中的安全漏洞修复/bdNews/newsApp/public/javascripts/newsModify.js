<!-- 提交请求 -->
// 页面渲染完成后执行匿名函数：
$(document).ready(function(){

  // // 页面加载完成后，获取传来的数据：
  var newsId = $('#h5ForNewsID').text();
  var newsTitle = $('#h5ForNewsTitle').text();
  var newsImg = $('#h5ForNewsImg').text();
  var newsType = $('#h5ForNewsType').text();
  var addTime = $('#h5ForAddTime').text();

  // 判断新闻类型的索引数字：
  var typeIndex = 0;
  if (newsType == "") {typeIndex = 0}
  else if (newsType == "社会") {typeIndex = 1}
  else if (newsType == "百家") {typeIndex = 2}
  else if (newsType == "本地") {typeIndex = 3}
  else if (newsType == "国际") {typeIndex = 4}
  else if (newsType == "科技") {typeIndex = 5}
    
  // 向新闻类型的单选框赋值：
  // $("#newsType option").eq(typeIndex).attr('selected', 'true');
  // $("#newsType option").eq(typeIndex).attr('selected', 'selected');

  $("#newsType").val(newsType);
  // $("#newsTitle").attr('text',newsTitle);
  $("#newsTitle").val(newsTitle);
  $("#newsImg").val(newsImg);
  $("#addTime").val(addTime);

  // 为newsId赋值：
  $("#newsId").val(newsId);

})

// 提交后阻止跳转
function doNotJump(){
  
  // 让POST请求携带token参数：
  $("input[name='token']").val(localStorage.getItem('token'));

  if (!$("#newsTitle").val()) {

    alert("请您输入新闻标题");

    return false;

  }else if (!$("#newsType").val()) {

    alert("请您选择新闻类型");

    return false;

  }else if (!$("#addTime").val()) {

    alert("请您选择新闻时间");

    return false;
  }
  // $("#theForm").submit();
  return true;
}

//获取url中的参数的方法
function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

// 此方法当前版本暂时关闭
// function getUrlParam(name) {
//   //构造一个含有目标参数的正则表达式对象
//   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
//   //匹配目标参数
//   var r = window.location.search.substr(1).match(reg); 
//   //返回参数值 
//   if (r != null) return unescape(r[2]); return null; 
// }

// 点击返回按钮后，返回首页
function backToIndex(){
  window.location.href = "/newsCenter";
}