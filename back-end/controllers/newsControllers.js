const News=require('../models/news');

exports.createnews=async(req,res)=>{
    try{

        const {title,content,auteur,Datepublished,tag}=req.body; 
       
        const news=new News({
            title,
            content,
            auteur,
            Datepublished,
            tag
        });
        await news.save();
        res.status(200).json({msg:"news saved successfully"});
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to create news"});
    }
};


exports.updatenews=async (req,res)=>{

    try{

        const {id}=req.params;
        const {title,content,auteur,Datepublished,tag}=req.body;
        
        const updatevaction=await News.findOneAndUpdate(
            {_id:id},
            {$set:{title,content,auteur,Datepublished,tag}},
            {new:true,runvalidators:true});
        res.status(200).json({msg:"news updated successfully"});
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to update  news"});
    }
}

exports.getnews=async(req,res)=>{
    try{
        const {id}=req.params;
        const news=await News.findOne({_id:id})
        res.status(200).json({news});
        console.log(news);
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to get news with this id"});

    }
}

exports.getallnews=async(req,res)=>{
    try{
        await News.find().then((news)=>{
            res.status(200).json(news);
        }).catch((error)=>{
            console.log(error);
            res.status(404).json({msg:"failed to get all news"});
        })
    }catch(error){
        console.log(error);
        res.status(404).json({msg:"failed to get all news"});
    }
}