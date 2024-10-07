const express=require('express');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const paySlipSchema=new Schema({
    idemployee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'employee',
        required:true
    },
    payroll:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'payroll-processing',
        required:true
    },
    payPeriod:{
        type:String,
        required:true
    },
    details:{ 

        basesalary:{
            type:Number,
            required:true
        },
        allowances:{
            type:Number,
            default:0
        },
        tax:{
            type:Number,
            default:0
        },
        netsalary:{
            type:Number,
            required:true
        },
        bonuses:[{
            description:{type:String,required:true},
            amount:{type:Number,required:true} 
            }],
        deductions:[{ 
            description:{type:String,required:true},
            amount:{type:Number,required:true}
            }]
    }
});

module.exports=mongoose.model('paySlip',paySlipSchema);

