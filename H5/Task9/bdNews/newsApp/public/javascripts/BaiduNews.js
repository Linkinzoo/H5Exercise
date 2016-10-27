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
      url: "/category/?newsTypeBtn="+newsTypeBtn,
      cache: false,
      type:'get',
      datatype:'json',
      success: function(json){

        // 内容清空语句：
        $(".newsWrapper").html("");

        $newsBlock = "";
        $theImg = "";
        $newsContent = "";
        $imgBox = "";
        $newsTitle = "";
        $textBox = "";
        $timeBox = "";
        $jsonLength = json.length;

        for (var i = 0; i < $jsonLength; i++) {

          $theImg = json[i].newsImg;

          $newsBlock = $('<div></div>').addClass('newsBlock');

          $newsContent = $('<div></div>').addClass('newsContent');
          $newsBlock.append($newsContent);

          $imgBox = $('<div></div>').addClass('imgBox');
          $imgBox.append($('<img>').attr('src',$theImg));
          $newsContent.append($imgBox);

          $textBox = $('<div></div>').addClass('textBox');
          $newsContent.append($textBox);
          $textBox.append($('<div>'+json[i].newsTitle+'</div>').addClass('newsTitle'));

          $timeBox = $('<div></div>').addClass('timeBox');
          $textBox.append($timeBox);
          $timeBox.append($('<b>'+json[i].addTime+'</b>'));

          $('.newsWrapper').append($newsBlock);
        }
      }
    });
  });
  $("#theIndex").click();
})
