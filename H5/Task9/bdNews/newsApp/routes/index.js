var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 处理特殊字符的方法 */
function htmlspecialchars(str)    
{    
    str = str.replace(/&/g, '&amp;');  
    str = str.replace(/</g, '&lt;');  
    str = str.replace(/>/g, '&gt;');  
    str = str.replace(/"/g, '&quot;');  
    str = str.replace(/'/g, '&#039;');  
    return str;  
} 

// 数据库登陆
var theUserName = "root";
var thePassWord = "";

// 连接数据库：
var mysql = require('mysql'); 

// connection config
var connection = mysql.createConnection({
  host : 'localhost' ,
  user : theUserName,
  password : thePassWord,
  database : 'NewsBaidu',
  dateStrings:'DATETIME'
});
connection.connect();


// 前端地址
router.get('/BaiduNews',function(req,res){
	// req.session.lastPage = '/newsAdd';
	res.render("BaiduNews.ejs");
})

// 登录地址
router.get('/login',function(req,res){
  	res.render("login.ejs");
});
// 后台首页地址
router.get('/bgSystem',function(req,res){

  // 初始化页面记录
  req.session.lastPage = null;

  // 检查登录状态：
  if (!req.session.user) {
    res.redirect('/login');
    return;
  }
	res.render("BGSystem.ejs");
})

// 数据中心地址
router.get('/newsCenter',function(req,res){
	req.session.lastPage = '/newsCenter';
	res.render("newsCenter.ejs");
})

// 添加数据地址
router.get('/newsAdd',function(req,res){
	req.session.lastPage = '/newsAdd';
	res.render("newsAdd.ejs");
})

// 注销代码：
router.get('/logOff',function(req,res){
	
	req.session.user = null;
	req.session.lastPage = null;
	res.render("login.ejs");
  	// checkLoging(req,res,next);
});

// 登陆判断代码：
router.post('/loging',function(req,res){

  var userName = req.body.userName;
  var passWord = req.body.passWord; 

    // console.log(req.body.userName);

  // 查询数据
  connection.query('select * from userInfo where userName="'+userName+'"',function(err,result){
    if(err){
      // 找不到该用户：
      console.log('[select error]-',err.message);
      return;
    }
    console.log(result);

    if (!result[0]) {
        // if (req.session.user) {
        //   console.log("userName");
        // }else{

        // // req.session.user = "123454545";
        // // console.log(req.session);
        // }
      // 没有这个用户时：
      res.send({status:"noUser"});
      return;
    }else {

      // 判断密码是否一致：
      if (result[0].passWord == passWord) {

        // 密码一致：
        req.session.user = userName;
        console.log(req.session.user);
        console.log(req.session.lastPage);

        if (req.session.lastPage) {
        	res.send({status:"success",lastPage:req.session.lastPage});
        }else{
        	res.send({status:"success"});
        }

      }else{

        // 密码不一致：
        // console.log("passWord:"+passWord);
        // console.log("result.passWord:"+result[0].passWord);
        res.send({status:"mismatching"});
      }
    }
    // res.send(result);
  });
    // res.send({status:"200"});
  // console.log(req.body.userName); 
  // if (req.body.userName == usersName&&req.body.passWord == usersPass) {
  //   res.send({status:"200"});
  // }else{
  //   res.send({status:"404"});
  // }
  // res.redirect(clientUrl+'newsCenter.html');
  // res.send([{userName:"123",password:"1923"}]);

});

// 添加数据接口：
router.post('/add',function(req,res){
// console.log(req.body);
  // res.render("newsAdd.ejs");
  // checkLoging(req,res,next);
  // console.log(req.session.user);

  // 检查登录状态：
  if (!req.session.user) {
    res.redirect('/login');
    return;
  }
  // 获取传来的参数
  var newsTitle = htmlspecialchars(req.body.newsTitle);
  var newsImg = htmlspecialchars(req.body.newsImg);
  var newsType = req.body.newsType;
  var addTime = req.body.addTime;

  // mysqlConnect();

  connection.query('insert into news (newsTitle, newsType, newsImg, addTime) values ("'+newsTitle+'", "'+newsType+'","'+newsImg+'","'+addTime+'")');
  res.redirect('/newsCenter');
});
  // connection.query('insert into news (newsTitle, newsImg) values ("qwert" , "19801793")');

// 删除数据接口：
router.get('/delete',function(req,res){

  // 检查登录状态：
  if (!req.session.user) {
    res.redirect('/login');
    return;
  }

  // console.log(req.session.user);

  // 获取传来的ID：
  var newsId = req.query.newsId;

  // mysqlConnect();

  // 删除记录
  connection.query('delete from news where newsId ="'+newsId+'"');
  
  res.setHeader('Content-Type', 'text/plain'); 
  res.end('success');
});

// 修改数据接口：
router.post('/update',function(req,res){

  // 检查登录状态：
  if (!req.session.user) {
    res.redirect('/login');
    return;
  }
  // 获取传来的ID：
  var newsId = req.body.newsId;

  // 获取传来的参数
  var newsTitle = htmlspecialchars(req.body.newsTitle);
  var newsImg = htmlspecialchars(req.body.newsImg);
  var newsType = req.body.newsType;
  var addTime = req.body.addTime;

  // mysqlConnect();

  // 修改记录
  connection.query('UPDATE News SET newsTitle="'+newsTitle+'", newsImg="'+newsImg+'", newsType="'+newsType+'", addTime="'+addTime+'" WHERE newsId="'+newsId+'"');
  res.redirect('/newsCenter');
  // res.render("BGSystem.ejs");

  // res.end(newsTitle);
});

// 后台查询数据接口：
router.get('/all', function(req,res){
  // checkLoging(req,res);
  // mysqlConnect();
  // var sdf = req.session;
  // console.log(sdf.user);
  console.log(req.session.user);
  if (!req.session.user) {
    res.send({user:"none"});
    return;
  }else{
  	// 查询数据
  	// res.end(newsTitle);
  	// connection.query('UPDATE news SET (newsTitle, newsType, newsImg, addTime) values ("'+newsTitle+'", "'+newsType+'","'+newsImg+'","'+addTime+'") where newsId="'+newsId+'"');
  	connection.query('select * from news',function(err,result){
	    if(err){
	      console.log('[select error]-',err.message);
	      return;
	    }
	    // console.log(result[1].addTime);
	    // console.log(result);
	    res.send(result);
	 });
  }
});

// 前端查询数据接口：
router.get('/category',function(req,res){

  // 获取传来的参数
  var newsType = req.query.newsTypeBtn;
  
  // mysqlConnect();
  
  // 查询数据
  connection.query('select * from news where newsType="'+newsType+'"',function(err,result){
    if(err){
      console.log('[select error]-',err.message);
      return;
    }
    // console.log(result);
    res.send(result);
  });
});
module.exports = router;
