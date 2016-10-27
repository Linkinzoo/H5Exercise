<!-- 提交请求 -->
// 页面渲染完成后执行匿名函数：
$(document).ready(function(){

  // $.getJSON("http://localhost/newsbd/HtmlTest.php/?type=newsCenter", function(json){  
  //   // $("#newsTitle").html(json.newsTitle); 
  //   // $("#newsType").html(json.newsType); 
  //   // $("#newsImg").html(json.newsImg); 
  //   // $("#addTime").html(json.addTime); 
  //   alert(json.newsTitle)
  // });
  
  // 页面加载完成后，显示数据库中的所有数据：
  $.ajax({
    url: "/all",
    cache: false,
    type:'get',
    async:true,
    // datatype:'json',
    // type:"newsCenter",
    success: function(json){
      // var result = new Array(); 
      // result = eval(html);  
      // result ; 
      // alert(json);
      // alert(result.length);
      // $('.tableContainer').append(html);
      // console.log(json[0].newsTitle);
      // alert(html.length);
      if (json.user == "none") {
        window.location.href = "/login";
      }
      $row = "";
      $newsId = "";
      $newsImg = "";
      $newsType = "";
      $newsTitle = "";
      $addTime = "";
      $btn = "";
      $jsonLength = json.length;
      console.log(json.user);
      for (var i = 0; i < $jsonLength; i++) {
        
        $row = $('<tr></tr>').addClass('col-md-12 col-xs-12');
        $newsId = $('<td></td>').addClass('col-md-1 col-xs-1').attr('id',"newsId").html(json[i].newsId);
        // $newsId.addId('newsId');
        $row.append($newsId);

        $newsImg = $('<td></td>').addClass('col-md-2 col-xs-2').attr('id',"newsImg");
        // $newsImg.addId('newsImg');
        $newsImg.append($('<img>').attr('src',json[i].newsImg));
        $row.append($newsImg);

        $newsType = $('<td></td>').addClass('col-md-1 col-xs-1').attr('id',"newsType");
        // $newsType.addId('newsType');
        $newsType.append($('<span></span>').html(json[i].newsType));
        $row.append($newsType);

        $newsTitle = $('<td></td>').addClass('col-md-4 col-xs-4').attr('id',"newsTitle");
        // $newsTitle.addId('newsTitle');
        $newsTitle.append($('<span></span>').html(json[i].newsTitle));
        $row.append($newsTitle);

        $addTime = $('<td></td>').addClass('col-md-2 col-xs-2').attr('id',"addTime");
        // $addTime.addId('addTime');
        $addTime.append($('<span></span>').html(json[i].addTime));
        $row.append($addTime);

        $btn = $('<td></td>').addClass('col-md-2 col-xs-2');
        $btn.append($('<a></a>').addClass('modifyBtn').html('修改'));
        $btn.append($('<a></a>').addClass('deleteBtn').html('删除'));
        $row.append($btn);

        $('.tableContainer').append($row);

      }
      // 删除当前行功能：
      $(".deleteBtn").click(function(){
        var newsId = $(this).parent().siblings(1).html();
        var deleteOrNot = confirm("请您确认是否要删除此列");
        if (deleteOrNot == 1) {
          $.ajax({
            url:"/delete/?newsId="+newsId,
            cache:false,
            success:function(){
              window.location.reload();
            }
          })
        }
      })

      // 修改当前行功能：
      $(".modifyBtn").click(function(){

        var index = $(this).parent().parent().index()-1;
        var newsId = $(this).parent().parent().children("#newsId").html();
        var newsImg = $(this).parent().parent().children("#newsImg").children('img').attr('src');
        var newsType = $(this).parent().parent().children("#newsType").children('span').html();
        var newsTitle = $(this).parent().parent().children("#newsTitle").children('span').html();
        var addTime = $(this).parent().parent().children("#addTime").children('span').html();

        // alert(newsTitle);
        var newsTitle = htmlspecialchars_decode(newsTitle);
        // alert(newsType);
        var url = "./newsModify.html?newsId="+newsId+"&newsImg="+newsImg+"&newsType="+newsType+"&newsTitle="+newsTitle+"&addTime="+addTime;
        window.location.href = url;
      })
    }
  });

  // 筛选当前数据,暂未开启
  $("input[id=keyForNewsId]").keyup(function(){
    $.ajax({
      url: "http://localhost/newsbd/HtmlTest.php/?type=newsSearch",
      cache: false,
      // type:"newsCenter",
      success: function(html){

        $('.tableContainer').append(html);
        // alert(html);
      }
    });
  })


})

/* 处理特殊字符的方法 */
function htmlspecialchars_decode(str){           
  str = str.replace(/&amp;/g, '&'); 
  str = str.replace(/&lt;/g, '<');
  str = str.replace(/&gt;/g, '>');
  str = str.replace(/&quot;/g, "''");  
  str = str.replace(/&#039;/g, "'");   
  str = str.replace(";", "%3b");  
  return str;  
}
