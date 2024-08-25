const Attendance=require('../models/attendance');
const employee=require('../models/employee');


//check-IN
exports.CheckIN=async (req,res)=>{

    try{

        const {employeeID,status}=req.body;
        //employee exists
        const Employee= await employee.findById(employeeID);
        const currentdate=new Date().setHours(0,0,0,0);
        if(!Employee && status!='Present'){
            res.status(500).json({msg:'employee not found '});
            exit();
        }
        const existingcheckindate=await Attendance.findOne({     
            idemployee:employeeID,
            "checkIn.date": currentdate
        })
        if(existingcheckindate){
            res.status(400).json({msg:"check-in already exists for today"})
            var exist=1;
        };
        if(exist!=1){ 

            const attendance=new Attendance({
                idemployee:req.body.employeeID,
                checkIn:[{
                    date:currentdate,
                    checkInTime:new Date()
                }],
                status:req.body.status
            })
            await attendance.save();
            console.log(attendance)
            res.status(200).json({msg:'check-in successfully'});
        }
        
        
    }catch(error){
        console.error('error details :',error);
        res.status(500).json({msg:'failed to recocrd check-in'});
    }
}


//check-Out
exports.CheckOut=async (req,res)=>{

    try{

        const {employeeID,status}=req.body;
        //employee exists
        const Employee= await employee.findById(employeeID);
        const currentdate=new Date().setHours(0,0,0,0);
        if(!Employee && status!='Leave'){
            res.status(500).json({msg:'employee not found '});
        }
        const existingcheckIndate=await Attendance.findOne({     
            idemployee:employeeID,
            "checkIn.date":currentdate
        })
        var exist=0;
        if(!existingcheckIndate){
            res.status(400).json({msg:"check-In Not found for today "})
             exist=1;
        };
        const existingcheckOutdate=await Attendance.findOne({     
            idemployee:employeeID,
            "checkOut.date":currentdate
        })
        if(exist!=1){
            if(existingcheckOutdate){
                res.status(400).json({msg:"check-Out already exists for today  "});
                exist=2;
            }
        }
        if(exist==0){ 
            existingcheckIndate.checkOut.push({
                checkOutTime:new Date(),
                date:currentdate,
            });
            console.log(existingcheckIndate)
           
            await existingcheckIndate.save();
            res.status(200).json({msg:'check-Out successfully'});
        }
        
        
    }catch(error){
        console.error('error details :',error);
        res.status(500).json({msg:'failed to recocrd check-Out'});
    }
}

//get attendance with id 
exports.Getattendance=async (req,res)=>{
    try{
        const {employeeid}=req.params;
        const attendance=await Attendance.findOne({idemployee:employeeid})
        res.status(200).json({attendance});
        console.log(attendance);

    }catch(error){
        console.error('error details :',error);
        res.status(500).json({msg:'failed to get this identity'});
    }
}

