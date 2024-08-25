const express=require('express');
const router=express.Router();
const payrollController=require('../../controllers/salary/payroll-processingControllers');


router.post('/create-payroll',payrollController.createPayroll);
router.put('/update-payroll/:id',payrollController.updatepayrollprocessing);
router.get('/getpayrollwithid/:id',payrollController.getpayrollwithid);
router.get('/get-all-payroll-processing',payrollController.getallpayrollprocessing);

module.exports=router;