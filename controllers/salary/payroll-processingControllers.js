const Employee=require('../../models/employee');
const SalaryStructure=require('../../models/HR tasks/salary/salary-structure');
const Payroll=require('../../models/HR tasks/salary/payroll-processing');



exports.createPayroll=async (req,res)=>{
    try{
        const {employeeID,payPeriod}=req.body;
        const employee=await Employee.findById(employeeID)
        if(!employee){
            res.status(500).json({msg:'employee ont found '})
        };
        const salarystructure=await SalaryStructure.findOne({idemployee:employeeID})
        if(!salarystructure){
            res.status(500).json({msg:'salary structure not found'})
        };
        console.log(employee._id);
        const grossSalary=calculategrossSalary(salarystructure);
        console.log(grossSalary);
        const {netSalary,deductions,bonuses}=calculatenetsalary(grossSalary);
        console.log(calculatenetsalary(grossSalary))
        console.log(netSalary,deductions,bonuses);
        const payroll= new Payroll({
            idemployee:employee._id,
            salaryStructure:salarystructure._id,
            payPeriod:payPeriod,
            grossSalary:grossSalary,
            netSalary:netSalary,
            deductions:deductions,
            bonuses:bonuses,
            status:'Pending'
        })
        await payroll.save();
        res.status(200).json({msg:"payroll saved succsessflly"});

    }catch(error){
        console.error(error)
        res.status(404).json({msg:'failed to create payroll'})
    }

    function calculategrossSalary(salarystructure){
        return salarystructure.baseSalary + salarystructure.allowances.reduce((acc, allowance) => acc + allowance.amount, 0);
    }
    function calculatenetsalary(grossSalary){
        const deductions=[{description:'tax',amount:grossSalary*0.1}];
        const bonuses=[{description:'performance bonus',amount:500}];
        const totaldeductionals=deductions.reduce((acc,deduction) => acc+deduction.amount,0);
        const totalbonuses=bonuses.reduce((acc,bonuses)=>acc+bonuses.amount,0);
        const netSalary=grossSalary-totaldeductionals+totalbonuses;
        console.log(netSalary)
        return {netSalary,deductions,bonuses};
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

