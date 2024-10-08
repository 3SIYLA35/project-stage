require("dotenv").config();
const cors=require('cors');

const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//connection basse donnee
const connectDB=require('./config/db');
connectDB();

app.use(cors());
const session = require('express-session');
app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

app.use('/api',require('./routes/employee'));
app.use('/attendance',require('./routes/attedance'));
app.use('/salary',require('./routes/salary/structure-salary'));
app.use('/salary',require('./routes/salary/payroll-processing'));
app.use('/salary',require('./routes/salary/pay-slip-generation'));
app.use('/vaction',require('./routes/vaction'));
app.use('/news',require('./routes/news'));
app.use('/HR',require('./routes/HR'));

app.get('*',(req,res)=>{
    res.status(404).send('404');
})
const port=4000 || process.env.PORT ;
app.listen(port,()=>{
    console.log(`server lestning at port ${port}`)
});