<?php 

require_once 'function.php';

/* 测试数据库是否连接 */
$con = connect();

if ($con){

  /** 连接成功时要做的操作 **/ 
  // 选择数据库
  mysql_select_db("NewsBaidu", $con);

  // 获取类型参数
  $fileType = $_REQUEST['type'];

  // 添加新闻数据
  if ( $fileType == 'newsAdd') {

    // 获取要更改的值：
    $newsTitle = $_REQUEST['newsTitle'];
    $newsImg = $_REQUEST['newsImg'];
    $newsType = $_REQUEST['newsType'];
    $addTime = $_REQUEST['addTime'];

    // 处理特殊字符
    $newsTitle = htmlspecialchars($newsTitle,ENT_QUOTES,ture);
    $newsImg = htmlspecialchars($newsImg,ENT_QUOTES,ture);

    // 添加语句：
    $sql = "INSERT INTO `News`(`newsTitle`, `newsImg`, `newsType`, `addTime`) VALUES ('".$newsTitle."','".$newsImg."','".$newsType."','".$addTime."')";

  }else if($fileType  =='newsSearch'){

    // 查询新闻数据
    $sql = "select * from news";
  }else if($fileType  =='newsDelete'){

    // 获取传来的ID：
    $newsId = $_GET['newsId'];

    // 删除语句：
    $sql = "DELETE FROM `News` WHERE newsId='".$newsId."'";
  }else if ($fileType  =='newsModify') {

    // 获取传来的ID：
    $newsId = $_REQUEST['newsId'];

    // 获取要更改的值：
    $newsTitle = $_REQUEST['newsTitle'];
    $newsImg = $_REQUEST['newsImg'];
    $newsType = $_REQUEST['newsType'];
    $addTime = $_REQUEST['addTime'];

    // 处理特殊字符
    $newsTitle = htmlspecialchars($newsTitle,ENT_QUOTES,ture);
    $newsImg = htmlspecialchars($newsImg,ENT_QUOTES,ture);

    // 修改语句：
    $sql = "UPDATE `News` SET `newsTitle`='".$newsTitle."', `newsImg`='".$newsImg."', `newsType`='".$newsType."', `addTime`='".$addTime."' WHERE newsId='".$newsId."'";
  }


  // 选择转译类型：
  mysql_query("set names'utf8'");
  $result = mysql_query($sql, $con);
  if (!$result) {
    // 关闭连接
    die('Error:'. mysql_error());
  }else{

    //   返回页面 
    // echo "添加成功";
    // echo"<script>alert('操作成功');history.go(-1);</script>";
    // echo"<script>alert('操作成功');</script>"; 
    header("Location:BGSystem/newsCenter.html"); 
    // echo "success";
  }
}


// 关闭连接
mysql_close($con);

?>