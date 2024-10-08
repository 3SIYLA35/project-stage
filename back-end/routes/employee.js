const express=require('express');
const router=express.Router();
const employeecontroller=require("../controllers/employeeControllers");


router.post('/create-employee',employeecontroller.createnewemployee);
router.get('/session',employeecontroller.getemployeeID);
router.put('/update-employee/:id',employeecontroller.updateemployee);
router.get('/employee',employeecontroller.showemployee);
router.post('/login',employeecontroller.logingEmployee);

module.exports=router;
