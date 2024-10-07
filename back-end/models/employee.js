const express=require('express');
const mongoose = require('mongoose');
const Schema=mongoose.Schema;


const employeeSchema=new Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        validate:{
            validator:function(value){
                const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message:"email not valid "
        },
        lowercase: true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
                return passwordRegex.test(value);
            },message:"the password is weak "
        },
        minlength:8,
        trim:true
    },
    idemployee:{
        type:Number,
        unique:true,
        required:false
    },
    fullname:{
        type:String,
        maxlength:30,
        trim:true,
        lowercase:true
    },
    jobtitle:{
        type:String,
        maxlength:30,
        trim:true,
        lowercase:true
    },
    department:{
        type:String,
        maxlength:30,
        trim:true,
        lowercase:true
    },
    startdate:{
        type:Date,
        trim:true,
    },
    phone:{
        type:Number,
        maxlength:10,
        validate:{
            validator:function(value){
                return /^\d{10}$/.test(value.toString());
            },
            message:"phone number must be 10 digits"
        },
        trim:true,
        required:false
    },
    adress:{
        type:String,
        maxlength:60,
        trim:true,
        lowercase:true
    },
    salary:{
        type:Number,
        trim:true,
        min:0
    },
    createAt:{
        type:Date
    },
    updateAt:{
        type:Date
    }
},{timestamps:true});



module.exports=mongoose.model('employee',employeeSchema);