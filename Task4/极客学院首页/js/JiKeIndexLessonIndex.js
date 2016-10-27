// 主要内容第二列：6个热门课程的Hover效果
document.getElementById("lesson1").addEventListener("mouseover", lesson1Appear);
document.getElementById("lesson2").addEventListener("mouseover", lesson2Appear);
document.getElementById("lesson3").addEventListener("mouseover", lesson3Appear);
document.getElementById("lesson4").addEventListener("mouseover", lesson4Appear);
document.getElementById("lesson5").addEventListener("mouseover", lesson5Appear);
document.getElementById("lesson6").addEventListener("mouseover", lesson6Appear);

// 获得索引
var lesson1 = document.getElementById('lesson1');
var lesson2 = document.getElementById('lesson2');
var lesson3 = document.getElementById('lesson3');
var lesson4 = document.getElementById('lesson4');
var lesson5 = document.getElementById('lesson5');
var lesson6 = document.getElementById('lesson6');

// 课程索引内容

var lesson1Content = document.getElementById('lesson1Content');
var lesson2Content = document.getElementById('lesson2Content');
var lesson3Content = document.getElementById('lesson3Content');
var lesson4Content = document.getElementById('lesson4Content');
var lesson5Content = document.getElementById('lesson5Content');
var lesson6Content = document.getElementById('lesson6Content');


// 方法：
function lesson1Appear() {


    lesson1.setAttribute("class", "onLesson");
    lesson1Content.style.display = "block";

    // 取消选择
    lesson2.setAttribute("class", "unLesson");
    lesson3.setAttribute("class", "unLesson");
    lesson4.setAttribute("class", "unLesson");
    lesson5.setAttribute("class", "unLesson");
    lesson6.setAttribute("class", "unLesson");
    lesson2Content.style.display = "none";
    lesson3Content.style.display = "none";
    lesson4Content.style.display = "none";
    lesson5Content.style.display = "none";
    lesson6Content.style.display = "none";
}

function lesson2Appear() {

    lesson2.setAttribute("class", "onLesson");
    lesson2Content.style.display = "block";

    // 取消选择
    lesson1.setAttribute("class", "unLesson");
    lesson3.setAttribute("class", "unLesson");
    lesson4.setAttribute("class", "unLesson");
    lesson5.setAttribute("class", "unLesson");
    lesson6.setAttribute("class", "unLesson");
    lesson1Content.style.display = "none";
    lesson3Content.style.display = "none";
    lesson4Content.style.display = "none";
    lesson5Content.style.display = "none";
    lesson6Content.style.display = "none";
}

function lesson3Appear() {

    lesson3.setAttribute("class", "onLesson");
    lesson3Content.style.display = "block";

    // 取消选择
    lesson1.setAttribute("class", "unLesson");
    lesson2.setAttribute("class", "unLesson");
    lesson4.setAttribute("class", "unLesson");
    lesson5.setAttribute("class", "unLesson");
    lesson6.setAttribute("class", "unLesson");
    lesson1Content.style.display = "none";
    lesson2Content.style.display = "none";
    lesson4Content.style.display = "none";
    lesson5Content.style.display = "none";
    lesson6Content.style.display = "none";
}

function lesson4Appear() {

    lesson4.setAttribute("class", "onLesson");
    lesson4Content.style.display = "block";

    // 取消选择
    lesson1.setAttribute("class", "unLesson");
    lesson2.setAttribute("class", "unLesson");
    lesson3.setAttribute("class", "unLesson");
    lesson5.setAttribute("class", "unLesson");
    lesson6.setAttribute("class", "unLesson");
    lesson1Content.style.display = "none";
    lesson2Content.style.display = "none";
    lesson3Content.style.display = "none";
    lesson5Content.style.display = "none";
    lesson6Content.style.display = "none";
}

function lesson5Appear() {

    lesson5.setAttribute("class", "onLesson");
    lesson5Content.style.display = "block";

    // 取消选择
    lesson1.setAttribute("class", "unLesson");
    lesson2.setAttribute("class", "unLesson");
    lesson3.setAttribute("class", "unLesson");
    lesson4.setAttribute("class", "unLesson");
    lesson6.setAttribute("class", "unLesson");
    lesson1Content.style.display = "none";
    lesson2Content.style.display = "none";
    lesson3Content.style.display = "none";
    lesson4Content.style.display = "none";
    lesson6Content.style.display = "none";
}

function lesson6Appear() {

    lesson6.setAttribute("class", "onLesson");
    lesson6Content.style.display = "block";

    // 取消选择
    lesson1.setAttribute("class", "unLesson");
    lesson2.setAttribute("class", "unLesson");
    lesson3.setAttribute("class", "unLesson");
    lesson4.setAttribute("class", "unLesson");
    lesson5.setAttribute("class", "unLesson");
    lesson1Content.style.display = "none";
    lesson2Content.style.display = "none";
    lesson3Content.style.display = "none";
    lesson4Content.style.display = "none";
    lesson5Content.style.display = "none";
}

/************************ 已用css实现 ************************/
// // 每个格子的Hover效果
// document.getElementById("lesson11Wrapper").addEventListener("mouseover", showLesson);

// // 获得变量
// var favor = document.getElementById('favor');
// var hudBox = document.getElementById('hudBox');
// var infoBox = document.getElementById('infoBox');
// var infoP = document.getElementById('infoP');
// var studentCountDiv = document.getElementById('studentCountDiv');
// var difficultyDiv = document.getElementById('difficultyDiv');
// function showLesson() {

//     // lesson6.setAttribute("class", "onLesson");
//     favor.style.display = "block";
// 	hudBox.style.opacity = "1";
// 	infoBox.style.height = "175px";
// 	infoP.style.display = "block";
// 	studentCountDiv.style.display = "block";
// 	difficultyDiv.style.display = "block";

// }
// // 每个格子失去Hover时的效果
// document.getElementById("lesson11Wrapper").addEventListener("mouseleave", hiddeLesson);

// function hiddeLesson() {

//     // lesson6.setAttribute("class", "onLesson");
//     favor.style.display = "none";
// 	hudBox.style.opacity = "0";
// 	infoBox.style.height = "88px";
// 	infoP.style.display = "none";
// 	studentCountDiv.style.display = "none";
// 	difficultyDiv.style.display = "none";
// }
