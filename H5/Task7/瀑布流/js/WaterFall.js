// 页面渲染完成后执行匿名函数：
$(document).ready(function(){

	imgLocation();

    $('.wrapper').get(0).onscroll = function(){

        if (loadWhenScroll()) {

            // 载入一组数据：
            for (var i = 0; i < 10; i++) {
                var box = $('<div>').addClass('cell').appendTo($('.wrapper'));
                var cellContent = $('<div>').addClass('cellContent').appendTo(box);
                $('<img>').attr("src","./img/" + (i+1) + ".jpg").appendTo(cellContent);
                var tag = $('<div>').addClass('tag').appendTo(cellContent);
                tag.html("竖版壁纸");
            };

            // 为新数据布局
            imgLocation();
        }
    }
})

// 窗口变化时，改变栏数：
window.onresize = function(){
    imgLocation();
}

// 确定图片位置的方法：
function imgLocation(){
	// 获取对象
    var cell = $('.cell');
    var cellWidth = cell.eq(0).width();
    var cellNum = Math.floor($('.wrapper').width() / cellWidth);

    // 创建方法中所需的变量
    var cellColumn = [];
    var cellHeight = 0;
    var minHeight = 0;
    var minHeightIndex = 0;

    // 遍历方法
    cell.each(function(index, element) {

        // 获取当前cell的高度
        cellHeight = cell.eq(index).height();

        // 判断cell的位置是否为第一排：
        if (index < cellNum) {

            cellColumn[index] = cellHeight;
            $(element).css({
                'position':'absolute',
                'top':'21px',
                'left': cellWidth * index +21 
            })

        } else { //当前cell的位置不是第一排：

            // 获取当前图片中最短的那一栏的高度,从而获得其索引：
            minHeight = Math.min.apply(null, cellColumn);
            minHeightIndex = $.inArray(minHeight, cellColumn);

            // 获取当前对象
            $(element).css({

                // 改变位置(21为包装的padding值)
                'position': 'absolute',
                'top': minHeight + 21,
                'left': cell.eq(minHeightIndex).position().left
            })
            // 刷新列高度数组：
            cellColumn[minHeightIndex] += cellHeight;


            // 留白控制：
            $('.paddingBox').eq(0).css({

                // 改变位置
                'position':'absolute',
            	'top':Math.max.apply(null, cellColumn) + 21
            })
        }
    })
}
// 判断页面是否滚动到底部：
function loadWhenScroll(){

    // 创建/获取 变量
    var cell = $('.cell');
    var lastCellHeight = cell.last().get(0).offsetTop +Math.floor(cell.last().height() / 2);
    var documentHeight = $(document).height();
    var scrollHeight = $(".wrapper").scrollTop();

    // 判断滚动距离是否超过规定值：
    return (lastCellHeight < documentHeight + scrollHeight)?1:false;

}





