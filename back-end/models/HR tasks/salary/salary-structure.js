const express=require('express');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const salaryStructureSchema = new mongoose.Schema({
    idemployee:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employee',
        required: true 
        },
    baseSalary:{
        type: Number,
        required: true 
        },
    allowances:[{
        type: {
            type:String,
            required:true
            },
        amount:{
            type: Number,
            required:true
            } 
        }],
    bonuses:{
        type: Number,
        required: true ,
        default:0
        },
    deductions:{
        type: Number,
        required: true 
        },
    tax:{
        type: Number,
        required: true 
        },
});


module.exports=mongoose.model('salarystructure',salaryStructureSchema);
