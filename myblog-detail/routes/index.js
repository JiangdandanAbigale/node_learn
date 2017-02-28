var express = require('express');
var router = express.Router();
// 每个路由文件通过生成一个express.Router实例router并导出

router.get('/',function(req,res){
	res.send('hello,express with supervisor and router');
})

module.exports = router;