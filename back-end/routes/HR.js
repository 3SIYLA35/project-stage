const express=require('express');
const router=express.Router();
const HR=require('../controllers/HRContronllers');

router.post('/createnewHR',HR.createnewhr);
router.get('/getinfoHR/:id',HR.getinfoHR);
router.put('/updateinfoHR/:id',HR.updateinfoHR);
router.get('/getallHR',HR.getallHR);
router.post('/login',HR.logingHR)

module.exports=router;
