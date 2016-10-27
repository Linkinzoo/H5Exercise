<?php 

require_once 'function.php';

header("Content-type:application/json; charset=utf-8");

	/* 测试数据库是否连接 */
	$con = connect();

	if ($con){

  		/** 连接成功时要做的操作 **/ 
  		// 选择数据库
  		mysql_select_db("NewsBaidu", $con);

  		if ($_GET['type'] == "newsCenter") {

			// 查询所有新闻数据
			$sql = "select * from news";

		}elseif ($_GET['type'] == "baiduNews") {

			// 获得新闻类型
			$newsTypeBtn = $_GET['newsTypeBtn'];

			// 查询新闻数据
			$sql = "select * from news WHERE `newsType`='".$newsTypeBtn."'";
		}
		// 选择转译类型：
	  	mysql_query("set names'utf8'");
	  	$result = mysql_query($sql, $con);

	  	if (!$result) {

  		// 关闭连接
  		die('Error:'. mysql_error());

	  	}else{

	  		if ($_GET['type'] == "newsCenter") {
	  			// while($row = mysql_fetch_array($result)){
				  // echo "<tr class='col-md-12 col-xs-12'>";
				  // echo "<td class='col-md-1 col-xs-1' id='newsId'>" . $row['newsId'] . "</td>";
				  // echo "<td class='col-md-2 col-xs-2' id='newsImg'><img src='" . $row['newsImg'] . "'></td>";
				  // echo "<td class='col-md-1 col-xs-1'id='newsType'><span>" . $row['newsType'] . "</span></td>";
				  // echo "<td class='col-md-4 col-xs-4' id='newsTitle'><span>" . $row['newsTitle'] . "</span></td>";
				  // echo "<td class='col-md-2 col-xs-2' id='addTime'><span>" . $row['addTime'] . "</span></td>";
				  // echo "<td class='col-md-2 col-xs-2'><a class='modifyBtn'>修改</a><a class='deleteBtn'>删除</a></td>";
				  // echo "</tr>";

	  			// json
	  			$arr = array();
	  			while ($row = mysql_fetch_array($result)) {
	  				
	  				array_push($arr, array("newsId"=>$row['newsId'],"newsTitle"=>$row['newsTitle'],"newsImg"=>$row['newsImg'],"newsType"=>$row['newsType'],"addTime"=>$row['addTime']));
		    	}
		    	echo json_encode($arr);
	  		}else if ($_GET['type'] == "baiduNews") {
	  			// html
	  			while($row = mysql_fetch_array($result)){

	  				$newsImg = ".".substr($row['newsImg'],12);
	  				
	  				echo "<div class='newsBlock'>";
	  				echo "<div class='newsContent'>";
	  				echo "<div class='imgBox'>";
	  				echo "<img src='" .$newsImg."'>";
	  				echo "</div>";
	  				echo "<div class='textBox'>";
	  				echo "<div class='newsTitle'>".$row['newsTitle']."</div>";
	  				echo "<div class='timeBox'>";
	  				echo "<b>". $row['addTime'] ."</b>";
	  				echo "</div>";
	  				echo "</div>";
	  				echo "</div>";
	  				echo "</div>";
	  			}
	  		}
		}
	}

 ?>