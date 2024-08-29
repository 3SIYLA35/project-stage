const express=require('express');
const router=express.Router();
const payslip=require('../../controllers/salary/pay-slip-generationControllers');

router.post('/generatepayslip',payslip.createpayslip);
router.put('/updatepayslip/:id',payslip.updatepayslip);
router.get('/getpayslip/:id',payslip.getpayslip);
router.get('/getallpayslip',payslip.getallpayslip);


module.exports=router;