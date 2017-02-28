// var path = require('path');
var express = require('express');
var app = express();
// var indexRouter = require('./routes/index');
// var userRouter = require('./routes/user');

// 访问路径
// app.get('/',function(req,res){
//  res.send('hello,express using supervisor');
// });
// 访问其他路径 eg: /user/jiangdandan
// :name占位符，这个占位符的名字是name,可通过req.params.name获取
// app.get('/user/:name',function(req,res){
// 	res.send('hello '+req.params.name);//express的api
// })
// app.listen(3000)
// 常用的req属性 ： req.query/req.params/req.body
// 实际开发需要express.Router
// app.set('views',path.join(__dirname,'views'));//设置存放模板文件的目录
// app.set('view engine','ejs');//设置模板引擎为ejs


// app.use('/',indexRouter)
// 	.use('/user',userRouter).listen(3000)
	// 使用app.use挂载到不同路径

	//express 中间件
	app.use(function(req,res,next){
		console.log('1'); //终端输出
		// next();
		next(new Error('hahh'))//错误显示在终端和浏览器
	}).use(function(req,res,next){
		console.log('2');
		res.status(200).end();
	});

    //错误处理
    app.use(function(err,req,res,next){
    	console.error(err.stack);
    	res.status(500).send('Something broke!');//在浏览器跑出somthing broke
    })

	app.listen(3000);

	// app.use加载中间件，通过next()将请求传递到下个中间件，next()也可跑出错误，蛋不会传递下去
   //应用程序为我们自动返回了错误栈信息（express 内置了一个默认的错误处理器），假如我们想手动控制返回的错误内容，则需要加载一个自定义错误处理的中间件














