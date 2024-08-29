const HR=require('../models/HR');
const employee=require('../models/employee');


exports.createnewhr=async(req,res)=>{
    try{

        const {email,password,Role,fullname,department,phone,adress,salary}=req.body; 
       
        const hr=new HR({
            email,
            password,
            Role,
            fullname,
            department,
            phone,
            adress,
            salary
        });
        await hr.save();
        res.status(200).json({msg:"HR saved successfully"});
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to create new HR"});
    }
};


exports.updateinfoHR=async (req,res)=>{

    try{

        const {id}=req.params;
        const {email,password,Role,fullname,department,phone,adress,salary}=req.body;
        const hr=await HR.findById(id);
        if(!hr){
            res.status(500).json({msg:"couldn't find HR with this  id "});
            console.log(hr);
        }
        console.log({email,password,Role,fullname,department,phone,adress,salary})
        const updateinfoHR=await HR.findOneAndUpdate(
            {_id:id},
            {$set:{email,password,Role,fullname,department,phone,adress,salary}},
            {new:true,runvalidators:true});
        res.status(200).json({msg:"information updated successfully"});
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to update  information"});
    }
}

exports.getinfoHR=async(req,res)=>{
    try{
        const {id}=req.params;
        const hr=await HR.findOne({_id:id})
        res.status(200).json({hr});
        console.log(hr);
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to get HR with this id"});

    }
}

exports.getallHR=async(req,res)=>{
    try{
        await HR.find().then((hr)=>{
            res.status(200).json(hr);
        }).catch((error)=>{
            console.log(error);
            res.status(404).json({msg:"failed to get all HR"});
        })
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to get all HR"});
    }
}