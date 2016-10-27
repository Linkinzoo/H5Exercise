<!-- 跳转至：首页-->
document.getElementById("firstTitle").addEventListener("click", reFreshToIndex);

var frame = document.getElementById('content');
var stu = document.getElementById('secondTitle');
var tragetStu = document.getElementById('studentMenu');
var task = document.getElementById('thirdTitle');
var traget = document.getElementById('taskList');
var news = document.getElementById('fourthTitle');
var newsList = document.getElementById('newsList');

function reFreshToIndex() {

    frame.src = "./BGIndex.html";

    // 收回菜单，恢复按钮的选择状态
    tragetStu.style.display = "none";
    stu.id = 'unSelectedTag';
    traget.style.display = "none";
    task.id = 'unSelectedTag';
    newsList.style.display = "none";
    news.id = 'unSelectedTag';
}
<!-- 学生信息菜单弹出、收回 -->

document.getElementById("secondTitle").addEventListener("click", dropStudentMenu);


function dropStudentMenu() {

    if (tragetStu.style.display != "block") {

        // 显示学生信息菜单
        tragetStu.style.display = "block";
        stu.id = 'selectedTag';

        // 收回作业列表菜单
        traget.style.display = "none";
        task.id = 'unSelectedTag';

        // 收回新闻管理菜单
        newsList.style.display = "none";
        news.id = 'unSelectedTag';

    } else {

        // 收回学生信息菜单
        tragetStu.style.display = "none";
        stu.id = 'unSelectedTag';
    }
}
<!-- 跳转至：学生A信息 -->

document.getElementById("studentA").addEventListener("click", reFreshToStudentA);

var frame = document.getElementById('content');

function reFreshToStudentA() {
    frame.src = "./studentA.html";

}
<!-- 跳转至：学生B信息 -->

document.getElementById("studentB").addEventListener("click", reFreshToStudentB);

var frame = document.getElementById('content');

function reFreshToStudentB() {
    frame.src = "./studentB.html";

}
<!-- 跳转至：学生C信息 -->

document.getElementById("studentC").addEventListener("click", reFreshToStudentC);

function reFreshToStudentC() {
    frame.src = "./studentC.html";

}
<!-- 作业列表菜单弹出/收回 -->

document.getElementById("thirdTitle").addEventListener("click", dropTaskListMenu);

function dropTaskListMenu() {

    if (traget.style.display != "block") {

        // 弹出作业列表菜单
        traget.style.display = "block";
        task.id = 'selectedTag';

        // 收回学生信息菜单
        tragetStu.style.display = "none";
        stu.id = 'unSelectedTag';

        // 收回新闻管理菜单
        newsList.style.display = "none";
        news.id = 'unSelectedTag';

    } else {

        // 收回作业列表菜单
        traget.style.display = "none";
        task.id = 'unSelectedTag';
    }
}
<!-- 跳转至作业：盒子模型 -->

document.getElementById("taskA").addEventListener("click", reFreshToTaskA);

var frame = document.getElementById('content');

function reFreshToTaskA() {
    frame.src = "./linkage/Boxes/Boxes.html";

}
<!-- 跳转至作业：3D魔方 -->

document.getElementById("taskB").addEventListener("click", reFreshToTaskB);

function reFreshToTaskB() {
    frame.src = "./linkage/Cube/cube.html";

}
<!-- 跳转至作业：动画 -->

document.getElementById("taskC").addEventListener("click", reFreshToTaskC);


function reFreshToTaskC() {
    frame.src = "./linkage/Animation/Animation.html";

}
<!-- 跳转至作业：双飞翼布局 -->

document.getElementById("taskD").addEventListener("click", reFreshToTaskD);


function reFreshToTaskD() {
    frame.src = "./linkage/Layout/Layout.html";

}

<!-- 新闻管理菜单弹出/收回 -->

document.getElementById("fourthTitle").addEventListener("click", dropNewsListMenu);

function dropNewsListMenu() {

    if (newsList.style.display != "block") {

        // 弹出新闻管理菜单
        newsList.style.display = "block";
        news.id = 'selectedTag';

        // 收回学生信息菜单
        tragetStu.style.display = "none";
        stu.id = 'unSelectedTag';

        // 收回作业列表菜单
        traget.style.display = "none";
        task.id = 'unSelectedTag';

    } else {

        // 收回作业列表菜单
        newsList.style.display = "none";
        news.id = 'unSelectedTag';
    }
}
<!-- 跳转至新闻管理：新闻数据 -->

document.getElementById("newsCenter").addEventListener("click", reFreshToNewsCenter);

var frame = document.getElementById('content');

function reFreshToNewsCenter() {
    frame.src = "./newsCenter.html";

}
<!-- 跳转至新闻管理：添加数据 -->

document.getElementById("newsAdd").addEventListener("click", reFreshToNewsAdd);

var frame = document.getElementById('content');

function reFreshToNewsAdd() {
    frame.src = "./newsAdd.html";

}

// <!-- 跳转至新闻管理：修改数据 -->

// document.getElementById("taskC").addEventListener("click", reFreshToTaskC);


// function reFreshToTaskC() {
//     frame.src = "./linkage/Animation/Animation.html";

// }
// <!-- 跳转至新闻管理：查询数据 -->

// document.getElementById("newsSearch").addEventListener("click", reFreshToNewsSearch);


// function reFreshToNewsSearch() {
//     frame.src = "./newsSearch.html";

// }
<!-- 下拉菜单 -->

document.getElementById("popMenu").addEventListener("click", dropMenu);

var popMenu = document.getElementById('popMenu');
var menuContainer = document.getElementById('menuContainer');

function dropMenu() {

    if (menuContainer.style.display != "block") {

        // 弹出菜单
        menuContainer.style.display = "block";

    } else {

        // 收回作业列表菜单
        menuContainer.style.display = "none";
    }
}
