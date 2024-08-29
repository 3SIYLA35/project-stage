const express=require('express');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const newsSchema= new Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxlength:100
    },
    content:{
        type:String,
        required:true,
        trim:true
    },
    auteur:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'HR'
    },  
    Datepublished:{
        type:Date,
        required:true,
        default:Date.now
    },
    tag:[{
        type:String,
        trim:true
    }]
    
});

module.exports=mongoose.model('news',newsSchema);
