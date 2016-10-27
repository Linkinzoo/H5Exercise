// 提交后阻止跳转
function doNotJump(){
  // alert($("#newsType").val());
  // $.ajax({
  //           type:"post",
  //           url:"http://localhost/newsbd/mysql.php",
  //           type:"newsModify",
  //           newsType:$("#newsType").val(),
  //           // cache:false,
  //           // async: true,
  //           success:function(html){
  //             alert("添加成")
  //             // window.location.reload();
  //           }
  //         })
  // alert($("#newsTitle").val());
  if (!$("#newsTitle").val()) {
    alert("请您输入新闻标题")
    return false;
  }

  $("#theForm").submit();

  return false;
}