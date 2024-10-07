const Payroll=require('../../models/HR tasks/salary/payroll-processing');
const PaySlip=require('../../models/HR tasks/salary/Pay-slip-generation');



exports.createpayslip=async (req,res)=>{
    try{
        const {employeeID}=req.body;
        const payroll =await Payroll.findOne({idemployee:employeeID}).populate('idemployee');
        console.log(employeeID);
        console.log(payroll)
        if(!payroll){
            res.status(500).json({msg:'payroll ont found '})
        };
        const payslip=new PaySlip({
            idemployee:employeeID,
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

exports.updatepayslip=async (req,res)=>{

    try{

        const {id}=req.params;
        const {payroll,payPeriod,deductions,basesalary,allowances,tax,netsalary,bonuses}=req.body;
        const payslip=await Payroll.findOne({idemployee:id});
        if(!payslip){
            res.status(500).json({msg:"couldn't find payslip with id "});
            console.log(payslip);
        };
        const updatepayslip={}
        if(payroll!==undefined) {updatepayslip["details.payroll"]=payroll};
        if(payPeriod!==undefined){updatepayslip["details.payPeriod"]=payPeriod};
        if(deductions!==undefined){updatepayslip["details.deductions"]=deductions};
        if(basesalary!==undefined){updatepayslip["details.basesalary"]=basesalary};
        if(allowances!==undefined){updatepayslip["details.allowances"]=allowances};
        if(tax!==undefined){updatepayslip["details.tax"]=tax};
        if(netsalary!==undefined){updatepayslip["details.netsalary"]=netsalary};
        if(bonuses!==undefined){updatepayslip["details.bonuses"]=bonuses};
        const updatedpayslip=await PaySlip.findOneAndUpdate(
            {idemployee:id},
            {$set:updatepayslip},
            {new:true,runvalidators:true});
        res.status(200).json({msg:"paysilp generation updated successfully"});
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to update  payslip processing "});
    }
}

exports.getpayslip=async(req,res)=>{
    try{
        const {id}=req.params;
        const payslip=await PaySlip.findOne({idemployee:id})
        res.status(200).json({payslip});
        console.log(payslip);
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to get payslip withid"});

    }
}

exports.getallpayslip=async(req,res)=>{
    try{
        await PaySlip.find().then((payslip)=>{
            res.status(200).json(payslip);
        }).catch((error)=>{
            console.log(error);
            res.status(404).json({msg:"failed to get all payslip"});
        })
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to get all payslip"});
    }
}

