const Employee= require('../../models/employee');
const salarystructure=require('../../models/HR tasks/salary/salary-structure');


exports.createstructureSalary=async(req,res)=>{
    try{

        const {employeeID,deductions,baseSalary,allowances,bonuses,tax}=req.body; 
        const employee =await Employee.findById(employeeID);
        if(!employee){
            res.status(500).json({msg:"Employee not found"});
            exit();
        }
        const structure=new salarystructure({
            idemployee:employeeID,
            baseSalary:baseSalary,
            deductions:deductions,
            allowances:allowances,
            bonuses:bonuses,
            tax:tax
        });
        await structure.save();
        res.status(200).json({msg:"structure saved successfully"});
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to create  structure salary"});
    }
};


exports.updatestructureSalary=async (req,res)=>{

    try{

        const {id}=req.params;
        const {deductions,baseSalary,allowances,tax,bonuses}=req.body;
        console.log(id,baseSalary);
        const structure=await salarystructure.findOne({idemployee:id});
        if(!structure){
            res.status(500).json({msg:"couldn't find structure with id "});
            console.log(structure);
        }
        const updatestructure=await salarystructure.findOneAndUpdate(
            {idemployee:id},
            {$set:{deductions,baseSalary,tax,allowances,bonuses}},
            {new:true,runvalidators:true});
        res.status(200).json({msg:"salary structure updated successfully"});
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to update  structure salary"});
    }
}

exports.getstructurewithid=async(req,res)=>{
    try{
        const {id}=req.params;
        const salary=await salarystructure.findOne({idemployee:id})
        res.status(200).json({salary});
        console.log(salary);
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to get structure withid"});

    }
}

exports.getallstructures=async(req,res)=>{
    try{
        await salarystructure.find().then((structures)=>{
            res.status(200).json(structures);
        }).catch((error)=>{
            console.log(error);
            res.status(404).json({msg:"failed to get all structures"});
        })
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to get all structures"});
    }
}