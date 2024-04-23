const CreateFood = require("../model/CreateFood");
exports.CreateFood=async(req,res)=>{
    try{
        let reqBody=req.body;
        await CreateFood.create(reqBody);
        return res.status(200).json({status:"success",message:"Successfully created"});
    }catch(e){
        return res.status(200).json({err:e.toString()});
    }
}

exports.AllFood=async(req,res)=>{
    try{
        let rows=await CreateFood.find();
        return res.status(200).json({status:"success",message:"Successfully Complete",row:rows});
    }catch(e){
        return res.status(200).json({err:e.toString()});
    }
}

exports.AllFoodByID=async(req,res)=>{
    try{
        let {id} = req.params;
        let rows=await CreateFood.find({_id:id});
        return res.status(200).json({status:"success",message:"Successfully Complete",row:rows});
    }catch(e){
        return res.status(200).json({err:e.toString()});
    }
}

exports.UpdateFood=async(req,res)=>{
    try{
        let {id} = req.params;
        let reqBody=req.body;
        await CreateFood.updateOne({_id:id},reqBody);
        return res.status(200).json({status:"success",message:"Successfully Complete"});
    }catch(e){
        return res.status(200).json({err:e.toString()});
    }
}

exports.DeleteFood=async(req,res)=>{
    try{
        let {id} = req.params;
        await CreateFood.deleteOne({_id:id});
        return res.status(200).json({status:"success",message:"Successfully Complete"});
    }catch(e){
        return res.status(200).json({err:e.toString()});
    }
}