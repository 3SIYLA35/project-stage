const express=require('express');
const mongoose = require('mongoose');
const Schema=mongoose.Schema;


const VactionSchema=new Schema({
    idemployee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'loginemployee',
        required:true
    },
    type:{
        type:String,
        enum:["Vaction",'Sick leave',"personal leave"," Maternity // Paternity leave ",'unpaid leave '],
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        enum:['Pending','Approved','Rejected'],
        required:true 
    },
    reviewedBy:{
        type:mongoose.Schema.Types.ObjectId,
        Ref:'HR'
    },
},{timestamps:true});



module.exports=mongoose.model('Vaction',VactionSchema);