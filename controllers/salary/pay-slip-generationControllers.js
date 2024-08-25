const Payroll=require('../../models/HR tasks/salary/payroll-processing');
const PaySlip=require('../../models/HR tasks/salary/Pay-slip-generation');



exports.createpayslip=async (req,res)=>{
    try{
        const {employeeID}=req.body;
        const payroll =await Payroll.findById(employeeID).populate('idemployee');
        console.log(payroll)
        if(!payroll){
            res.status(500).json({msg:'payroll ont found '})
        };
        const payslip=new PaySlip({
            idemployee:payroll.idemployee,
            payroll:payroll._id,
            payPeriod:payroll.payPeriod,
            details:{
                basesalary:payroll.grossSalary,
                allowances:payroll.allowances,
                tax:payroll.tax,
                netsalary:payroll.netSalary,
                bonuses:payroll.bonuses,
                deductions:payroll.deductions       
            }
        });
        await payslip.save();
        res.status(200).json({msg:"success"});
    
    }catch(error){
            console.log(error);
            res.status(404).json({msg:"failed to create payslip"});
        }

}

exports.updatepayrollprocessing=async (req,res)=>{

    try{

        const {id}=req.params;
        const {payPeriod,grossSalary,netSalary,deductions,bonuses,status}=req.body;
        const payroll=await SalaryStructure.findOne({idemployee:id});
        if(!payroll){
            res.status(500).json({msg:"couldn't find payroll with id "});
            console.log(payroll);
        }
        const updatepayroll=await Payroll.findOneAndUpdate(
            {idemployee:id},
            {$set:{payPeriod,grossSalary,netSalary,deductions,bonuses,status}},
            {new:true,runvalidators:true});
        res.status(200).json({msg:"payroll processiing  updated successfully"});
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to update  payroll processing "});
    }
}

exports.getpayrollwithid=async(req,res)=>{
    try{
        const {id}=req.params;
        const payroll=await SalaryStructure.findOne({idemployee:id})
        res.status(200).json({payroll});
        console.log(payroll);
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to get payroll withid"});

    }
}

exports.getallpayrollprocessing=async(req,res)=>{
    try{
        await SalaryStructure.find().then((payroll)=>{
            res.status(200).json(payroll);
        }).catch((error)=>{
            console.log(error);
            res.status(404).json({msg:"failed to get all payroll"});
        })
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to get all payroll"});
    }
}

