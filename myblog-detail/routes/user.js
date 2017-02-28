var express = require('express');
var router = express.Router();

router.get('/:name',function(req,res){
	// res.send('this is '+req.params.name);
	res.render('user', {
		name: req.params.name
	})
	// res.render渲染ejs模板。参数1是模板名字，参数2是传给模板的数据。
	// 作用：将模板与数据结合生成html 同事设置响应头Content-Type:text/html
})

module.exports = router;