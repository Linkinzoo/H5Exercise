<!-- 提交请求 -->
// 页面渲染完成后执行匿名函数：
$(document).ready(function(){

  // 标签点击事件：
  $(".tag ul li").click(function(){
    $(".tag ul li a").removeClass('selectedA');
    $(this).children('a').addClass('selectedA');

    var newsTypeBtn = $(this).children('a').html();

    // 页面加载完成后，显示数据库中的所有数据：
    $.ajax({
      url: "http://localhost/newsbd/HtmlTest.php/?type=baiduNews&newsTypeBtn="+newsTypeBtn,
      cache: false,
      success: function(html){
        
        // 内容清空语句：
        $(".newsWrapper").html("");

        // 输出内容：
        $('.newsWrapper').append(html);
      }
    });
  });
  $("#theIndex").click();
})
