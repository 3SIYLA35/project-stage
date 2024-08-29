const express=require('express');
const router=express.Router();
const vaction=require("../controllers/vactionControllers");


router.post("/createvaction",vaction.createvaction);
router.put('/updatevaction/:id',vaction.updatevaction);
router.get('/getstatusvaction/:id',vaction.getstatusvaction);
router.get('/getallvaction',vaction.getallvaction);




module.exports=router;