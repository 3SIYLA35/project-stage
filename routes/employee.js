const express=require('express');
const router=express.Router();
const employeecontroller=require("../controllers/employeeControllers");


router.post('/create-employee',employeecontroller.createemployee);
router.put('/update-employee/:id',employeecontroller.updateemployee);
router.get('/employee',employeecontroller.showemployee);

module.exports=router;