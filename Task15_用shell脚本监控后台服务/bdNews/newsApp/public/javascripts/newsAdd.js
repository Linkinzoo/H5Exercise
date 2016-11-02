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
// 点击返回按钮后，返回首页
function backToIndex(){
  window.location.href = "/newsCenter";
}