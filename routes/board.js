var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
	res.render('board_list',{
		articles: BoardService.findAll();
	});
});

router.get('/write',function(req,res,next){
	res.render('board_write',{
		articles: BoardService.findAll();
	});
});

router.post('/write',function(req,res,next){
	res.redirect('/');
});

router.get('/delete',function(req,res,next){
	res.render('board_delete',{
		
	});
});

module.exports = router;
