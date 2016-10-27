<?php 
	function connect(){
		// 连接数据库
		$connect = mysql_connect("localhost","root","") or die ('数据库连接失败<br/>ERROR '.mysql_errno().':'.mysql_error());
		return $connect;
	}
 ?>