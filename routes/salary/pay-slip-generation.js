const express=require('express');
const router=express.Router();
const payslip=require('../../controllers/salary/pay-slip-generationControllers');

router.post('/generatepayslip',payslip.createpayslip);


module.exports=router;