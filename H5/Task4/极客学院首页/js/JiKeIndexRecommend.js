var normalList = document.getElementById('normalList');
var popList = document.getElementById('popList');
var questionContent = document.getElementById('questionContent');
var questionTitle = document.getElementById('questionTitle');
var wikiContent = document.getElementById('wikiContent');
var wikiTitle = document.getElementById('wikiTitle');
var lessonContent = document.getElementById('lessonContent');
var lessonTitle = document.getElementById('lessonTitle');
var groupContent = document.getElementById('groupContent');
var groupTitle = document.getElementById('groupTitle');


// 主要内容第一列：第三部分：标题1：问答版块标题的Hover效果
document.getElementById("questionList").addEventListener("mouseover", questionMenuAppear);

// 主要内容第一列：第三部分：标题1：问答版块列表标题的Hover效果
document.getElementById("questionTitle").addEventListener("mouseover", questionMenuAppear);

// 主要内容第一列：第三部分：标题2：wiki版块标题的Hover效果
document.getElementById("wikiList").addEventListener("mouseover", wikiMenuAppear);

// 主要内容第一列：第三部分：标题2：wiki版块列表标题的Hover效果
document.getElementById("wikiTitle").addEventListener("mouseover", wikiMenuAppear);

// 主要内容第一列：第三部分：标题3：课程版块标题的Hover效果
document.getElementById("lessonList").addEventListener("mouseover", lessonMenuAppear);

// 主要内容第一列：第三部分：标题3：课程版块列表标题的Hover效果
document.getElementById("lessonTitle").addEventListener("mouseover", lessonMenuAppear);

// 主要内容第一列：第三部分：标题4：社群版块标题的Hover效果
document.getElementById("groupList").addEventListener("mouseover", groupMenuAppear);

// 主要内容第一列：第三部分：标题4：社群版块列表标题的Hover效果
document.getElementById("groupTitle").addEventListener("mouseover", groupMenuAppear);

function questionMenuAppear() {

    normalList.style.display = "none";
    popList.style.display = "block";
    questionContent.style.display = "block";

    wikiContent.style.display = "none";
    lessonContent.style.display = "none";
    groupContent.style.display = "none";
}


function wikiMenuAppear() {

    normalList.style.display = "none";
    popList.style.display = "block";
    wikiContent.style.display = "block";

    questionContent.style.display = "none";
    lessonContent.style.display = "none";
    groupContent.style.display = "none";
}


function lessonMenuAppear() {

    normalList.style.display = "none";
    popList.style.display = "block";
    lessonContent.style.display = "block";

    questionContent.style.display = "none";
    wikiContent.style.display = "none";
    groupContent.style.display = "none";
}

function groupMenuAppear() {

    normalList.style.display = "none";
    popList.style.display = "block";
    groupContent.style.display = "block";

    questionContent.style.display = "none";
    wikiContent.style.display = "none";
    lessonContent.style.display = "none";
}


// 主要内容第一列：第三部分：标题1：推荐区域中问答版块的hover效果
document.getElementById("questionContent").addEventListener("mouseover", questionTitleActive);


function questionTitleActive() {

    questionTitle.style.cssText = "border-bottom: 0;background-color: #FFF;color: #35b558;";
}


// 主要内容第一列：第三部分：标题2：推荐区域中wiki版块的hover效果
document.getElementById("wikiContent").addEventListener("mouseover", wikiTitleActive);


function wikiTitleActive() {

    wikiTitle.style.cssText = "border-bottom: 0;background-color: #FFF;color: #35b558;";
    questionTitle.style.cssText = "background: #FCFCFC;border-bottom: 1px solid #F5F5F5;color: #666;";
    lessonTitle.style.cssText = "background: #FCFCFC;border-bottom: 1px solid #F5F5F5;color: #666;";
    groupTitle.style.cssText = "background: #FCFCFC;border-bottom: 1px solid #F5F5F5;color: #666;";
}

// 主要内容第一列：第三部分：标题3：推荐区域中职业版块的hover效果
document.getElementById("lessonContent").addEventListener("mouseover", lessonTitleActive);


function lessonTitleActive() {

    lessonTitle.style.cssText = "border-bottom: 0;background-color: #FFF;color: #35b558;";
    questionTitle.style.cssText = "background: #FCFCFC;border-bottom: 1px solid #F5F5F5;color: #666;";
    wikiTitle.style.cssText = "background: #FCFCFC;border-bottom: 1px solid #F5F5F5;color: #666;";
    groupTitle.style.cssText = "background: #FCFCFC;border-bottom: 1px solid #F5F5F5;color: #666;";
}

// 主要内容第一列：第三部分：标题4：推荐区域中社群版块的hover效果
document.getElementById("groupContent").addEventListener("mouseover", groupTitleActive);


function groupTitleActive() {

    groupTitle.style.cssText = "border-bottom: 0;background-color: #FFF;color: #35b558;";
    questionTitle.style.cssText = "background: #FCFCFC;border-bottom: 1px solid #F5F5F5;color: #666;"
    lessonTitle.style.cssText = "background: #FCFCFC;border-bottom: 1px solid #F5F5F5;color: #666;";
    wikiTitle.style.cssText = "background: #FCFCFC;border-bottom: 1px solid #F5F5F5;color: #666;";
}
// 主要内容第一列：第三部分：推荐区域的Hover效果移除
document.getElementById("popList").addEventListener("mouseleave", menuDisappear);

function menuDisappear() {

    popList.style.display = "none";
    normalList.style.display = "block";
}
