const express=require('express');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const payrollSchema = new mongoose.Schema({
    idemployee:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'employee',
        required: true 
        },
    salaryStructure:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'salarystructure', 
        required:true
        },
    payPeriod:{
        type: String,
        required: true 
        },
    grossSalary:{
        type: Number,
        required: true 
        },
    netSalary:{
        type: Number,
        required: true
        },
    deductions:[{ 
        description:{type:String,required:true},
        amount:{type:Number,required:true}
        }],
    bonuses:[{
        description:{type:String,required:true},
        amount:{type:Number,required:true} 
        }],
    status:{
        type: String,
        enum:['Pending', 'Processed', 'Paid'],
        default: 'Pending'
        }
});

module.exports=mongoose.model('payroll-processing',payrollSchema);