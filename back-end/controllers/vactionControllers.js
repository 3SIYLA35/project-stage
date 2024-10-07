const Vaction=require('../models/HR tasks/Vaction');

exports.createvaction=async(req,res)=>{
    try{

        const {idemployee,type,startDate,endDate,status}=req.body; 
       
        const vaction=new Vaction({
            idemployee,
            type,
            startDate,
            endDate,
            status:status || 'Pending'
        });
        await vaction.save();
        res.status(200).json({msg:"vatcion saved successfully"});
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to create vaction"});
    }
};


exports.updatevaction=async (req,res)=>{

    try{

        const {id}=req.params;
        const {type,startDate,endDate,status,reviewedBy}=req.body;
        const vaction=await Vaction.findOne({idemployee:id});
        if(!vaction){
            res.status(500).json({msg:"couldn't find vaction with id "});
            console.log(vaction);
        }
        const updatevaction=await Vaction.findOneAndUpdate(
            {idemployee:id},
            {$set:{type,startDate,endDate,status,reviewedBy}},
            {new:true,runvalidators:true});
        res.status(200).json({msg:"vaction updated successfully"});
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to update  vaction"});
    }
}

exports.getstatusvaction=async(req,res)=>{
    try{
        const {id}=req.params;
        const vaction=await Vaction.findOne({idemployee:id})
        res.status(200).json({vaction});
        console.log(vaction);
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to get vaction with id"});

    }
}

exports.getallvaction=async(req,res)=>{
    try{
        await Vaction.find().then((vaction)=>{
            res.status(200).json(vaction);
        }).catch((error)=>{
            console.log(error);
            res.status(404).json({msg:"failed to get all vactions"});
        })
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to get all vactions"});
    }
}