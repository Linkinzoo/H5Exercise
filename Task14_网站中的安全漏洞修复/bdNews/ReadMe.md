启动服务：到相应的文件目录下，npm start或node ./bin/www；
	主要链接：
		后台管理首页：localhost:3000/bgSystem
		后台管理登陆页面：localhost:3000/login
		用户名：admin
		密   码：123
		后台首页右上角的注销按钮可以清除登陆状态；

XSS防御：
  1. 对input中的字符进行转义：
	位置：./newsApp/routes/index.js  164行、211行，方法位于第10行；
  2. 请求中需要带参数时使用post方式发送请求；
  3. 发送请求时，如需返回json格式的数据，写明Content-Type:application/json；
	位置：./newsApp/public/javascripts/BaiduNews.js 17行；

SQL防注入：
	位置：./newsApp/public/javascripts/login.js 21行；
      后台登录界面中的帐号、密码输入位置将在点击登录按钮入，将输入框中内容做为参数，发送POST请求至后端，后端（./newsApp/routes/index.js 84行）将直接接收参数并将其作为数据库查询语句中的参数；
      如果不使用escape对字符进行处理，登录时在帐号框内录入admin" and ‘1’=“1，可顺利登录。

CSRF防御：
	利用token进行防御：token的生成和管理：登录界面输入帐户、密码，验证成功后生成token，后端记录token，同时返回token给用户，用户端用localStorage记录token，每次向服务端发送请求时携带token参数，后端将本地的token与请求中的token值做对比，如不相同，页面跳转至登录界面。token的有效期与cookie一致，为10分钟。
	token生成位置：./newsApp/routes/index.js 第21行。