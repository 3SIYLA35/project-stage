const express=require('express');
const employee=require('../models/employee');

exports.logingEmployee =async (req, res) => {
    const {email, password}=req.body;

    try {
        const Employee = await employee.findOne({email});
        if (!Employee)
        return res.status(400).send('Invalid credentials');
        if (Employee.password!==password) 
            return res.status(400).send('Invalid credentials');

        res.send('Logged in successfully');
    }catch(error) {
        res.status(500).send('Server error');
    }
};


exports.updateemployee=async(req,res)=>{
    try{
        const employeeupdated= await employee.findById(req.params.id);
        if(!employeeupdated){
            res.status(500).json({msg:"employee not fond"});
        }
        if(req.body.email && req.body.email!==employeeupdated.email){
            const emailalreadyexiste= await employee.findOne({email:req.body.email,_id:{$ne:req.params.id}})//$ne =not equale that mean exclude the current employee from the search  
            if(emailalreadyexiste){
            return res.status(500).json({msg:"email already existe"});}
        }   
        if(req.body.id && req.body.id!==employeeupdated.idemployee){
            const idalreadyexiste=await employee.findOne({idemployee:req.body.idemployee,_id:{$ne:req.params.id}});
            if(idalreadyexiste){
                return res.status(500).json({msg:"id already existe"});
            } 
        }
        const update_employee = await employee.findByIdAndUpdate(req.params.id,req.body,{new: true, runValidators: true });
            console.log(req.body);
            res.status(200).json({msg:"employee seccessfully updated",update_employee:req.body});
        
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"failed !! check your information"})
    }
};
exports.createnewemployee=async(req,res)=>{
    try{

        const {email,password}=req.body; 
       
        const Employee=new employee({
            email,
            password
        });
        await Employee.save();
        res.status(200).json({msg:"employee saved successfully"});
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to create new employee"});
    }
};
// exports.createemployee=async(req,res)=>{

//     console.log(req.body);
//     const newemployee=new employee({
//         email:req.body.email,
//         password:req.body.password,
//         idemployee:req.body.idemployee
//     });
//     try{
//         await employee.create(newemployee);
//         console.log(newemployee);
//         res.status(200).json({msg:"employee successfully saved"});
//     }catch(error){

//         console.log("error saving contact ",error);
//         if(error.code==11000 && error.keyPattern && error.keyPattern.email ){
//             res.status(500).json({msg:"email adress already in  use "});
//         }else if( error.code==11000 && error.keyPattern && error.keyPattern.idemployee) {
//             res.status(500).json({msg:"failed ?? id already in  use "})

//         }
//         else{            
//             res.status(500).json({msg:"failed !! check your information"})
//         }
//         }
// };


exports.showemployee=async(req,res)=>{
    try{
        await employee.find().
        then((employee)=>{
            console.log(employee);
            res.status(200).json({employee:employee})
        }).catch((error)=>{
            console.log(error);
            res.status(500).json({msg:"enable to get contact  "});
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"enable to get contact  "});
    }

};  