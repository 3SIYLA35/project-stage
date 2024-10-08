const express=require('express');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const attendanceSchema=new Schema({

   idemployee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'employee',
        required:false
    },
    checkIn:[{
        checkInTime:{ 
        type:Date,
        default:Date.now,
        required:true
        },
        date:{
            type:Date,
            required:true
        }
    }],
    checkOut:[{
        checkOutTime:{ 
             type:Date,
             default:Date.now,
             required:true
        },
        date:{
            type:Date,
            required:true
        }
    }],
    status:{
        type:String,
        enum:['Present','Absent','Leave'],
        required:true,
    }
})

module.exports=mongoose.model('attendance',attendanceSchema);