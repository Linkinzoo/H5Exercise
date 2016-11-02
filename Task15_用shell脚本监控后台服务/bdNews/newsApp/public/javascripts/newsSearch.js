<!-- 提交请求 -->
// 页面渲染完成后执行匿名函数：
$(document).ready(function(){
// document.getElementById("submitBtn").addEventListener("click", reFresh);
    $("#subbtn").click(function(){
        $.ajax({
          url: "http://localhost/newsbd/text.php",
          cache: false,
          success: function(html){
            // var result = new Array(); 
            // result = eval(html);  
            // result ;  
            // alert(result.length);
            alert(html);

          }
        });
    })
    // alert(123);
    // $.get("http://localhost/newsbd/mysql.php",function(data){
    //     console.log(data)
    // })
    // $.ajax({
    //     type: "GET",  
    //     url: "http://localhost/newsbd/mysql.php",
    //     dataType:"json", 
    //     success: function(msg){  
    //         var result = new Array();  
    //         result = eval(msg);  
    //         // var newhtml = '';  
    //         // for(x in result)   
    //         // {  
    //             // newhtml += result[x]['name'];  
    //         // }  
    //         alert(msg);  
    //         console.log(msg);
    //     }  
    // })

    // var xhr = new XMLHttpRequest();

    // xhr.open('get','http://localhost/newsbd/mysql.php',true);

    // xhr.setRequestHeader("Content-Type","application/json");

    // // xhr.send(JSON.stringify({
    // //     fileType:'newsDelete'
    // // }));
    // xhr.send();
    
    // // xhr.onload = function(){
    // //     if (xhr.readyState ===4) {}
    // // }
    // // header('Content-Type:text/html;charset=GB2312'); 
    // // Response.Charset("GB2312");
    // // response.setHeader("Charset","GB2312");
    // xhr.onreadystatechange = function(e){
    //     if (xhr.readyState === 4 && xhr.status == 200) {
    //         // alert(123);
    //         // xhr.setHeader("Charset","GB2312");
    //         // console.log(xhr.responseText);
    //         var resArray = xhr.responseText;
    //         alert(resArray);
    //     }
    // }

    // frame.src = "./linkage/Cube/cube.html";

// })
})
