// 页面渲染完成后执行匿名函数：
$(document).ready(function(){

	// var userName = localStorage.getItem('userName');
	// if (userName) {
	// 	$("#userName").val(userName);
	// 	$("#passWord").val(localStorage.getItem('passWord'));
	// }
	$('.submitBtn').click(function(){
		addData();
	});
})
function submitOrNot(){
	localStorage.setItem('userName',$("#userName").val());
	localStorage.setItem('passWord',$("#passWord").val());
	return true;
}

// 发送登录请求：
function addData() {
	var userName = escape($('#userName').val());
	var passWord = escape($('#passWord').val());
	// alert(userName);

	if (!userName) {
		alert("请输入用户名");
		return;
	}else if (!passWord) {
		alert("请输入密码");
		return;
	}
	$.ajax({
	    url: "/loging",
	    cache: false,
	    type:'post',
	    datatype:'json',
	    data:{'userName':userName,'passWord':passWord},
	    // type:"newsCenter",
	    success: function(status){
	    	// alert(status);
      		// alert(status.lastPage);
	     //  console.log(status.status);
	      if (status.status=="success") {
	      	if (status.lastPage) {
	      		localStorage.setItem('token',status.token);
	      		// alert(localStorage.getItem('token'));
	      		location.href = status.lastPage;
	      	}else{
	      		localStorage.setItem('token',status.token);
	      		// alert(localStorage.getItem('token'));
	      		location.href = '/bgSystem';
	      	}
	    
	      }else if (status.status=="noUser") {

	    	alert("用户未注册，请您核实用户名后重新登录");
	    	// location.href = 'http://localhost/newsbd/BGSystem/Login.html';

	      }else if (status.status=="mismatching") {

	    	alert("用户名与密码不匹配，请您核实用户名和密码后重新登录");
	    	// location.href = 'http://localhost/newsbd/BGSystem/Login.html';
	      }
	    },
	    error:function(XMLHttpRequest, textStatus, errorThrown) {
	       // alert(XMLHttpRequest.status);
	       // alert(XMLHttpRequest.readyState);
	       alert(errorThrown);
	    }
	});	
	return false;
}	
