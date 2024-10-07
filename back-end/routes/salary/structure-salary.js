const express=require('express');
const router=express.Router();
const salaryController=require('../../controllers/salary/salary-structureControllers');

router.post('/create-structure',salaryController.createstructureSalary);
router.put('/update-salary-structure/:id',salaryController.updatestructureSalary);
router.get('/get-salary-strcuture-id/:id',salaryController.getstructurewithid);
router.get('/get-all-salary-strcutures',salaryController.getallstructures);

module.exports=router;