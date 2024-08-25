const express=require('express');
const router=express.Router();
const attendanceController=require('../controllers/attendanceControllers');

router.post('/employee-check-in',attendanceController.CheckIN);
router.get('/getattendance/:employeeid',attendanceController.Getattendance);
router.post('/employee-check-out',attendanceController.CheckOut);




module.exports=router;