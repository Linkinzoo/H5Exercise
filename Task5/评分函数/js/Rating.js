// 评级方法：
    function rating(score) {
        // 判断是否为字符：
        if (isNaN(score)) {

            alert("请您用阿拉伯数字输入分数");
            return;
        }
        // 判断值是否符合分数条件
        if (score > 100 || score < 0 || score.trim() =="") {

            alert("您输入的分数不合理");
            return;
        }
        // 对参数进行处理，只保留其十位上的数字：
        var ratio = score / 10;
        var ratio = parseInt(ratio);

        // 判断十位上的数字是几：
        if (ratio == 9 || ratio == 10) {
            alert(1+"等（90分 - 100分）")
        }else{
            alert((10 - ratio) + "等（" + (ratio * 10) + "分 - " + (ratio * 10 + 9) + "分）");
        }
    }
