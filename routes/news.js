const express=require('express');
const router=express.Router();
const news=require('../controllers/newsControllers');


router.post('/createnews',news.createnews);
router.put('/updatenews/:id',news.updatenews);
router.get('/getnews/:id',news.getnews);
router.get('/getallnews',news.getallnews);


module.exports=router;