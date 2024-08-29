const express=require('express');
const mongoose = require('mongoose');
const Schema=mongoose.Schema;


const HRschema=new Schema({
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
    Role:{
        type:String,
        enum:["recruiter",'HR Manager',"Payroll Specialist","Genaralist"],
        required:true
    },
    fullname:{
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
    phone:{
        type:String,
        maxlength:10,
        validate:{
            validator:function(value){
                return /^0\d{9}$/.test(value);
            },
            message:"phone number must be 10 digits"
        },
        trim:true,
        required:true
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
    Datejoined:{
        type:Date,
        default:Date.now
    }
},{timestamps:true});



module.exports=mongoose.model('HR',HRschema);