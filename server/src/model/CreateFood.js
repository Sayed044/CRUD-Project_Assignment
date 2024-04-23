const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    FoodName:{type:String,required:true},
    FoodCode:{type:String,required:true},
    FoodImg:{type:String,required:true},
    FoodCategory:{type:String,required:true},
    Qty:{type:String,required:true},
    Price:{type:String,required:true},
    CreateDate:{type:Date,default:Date.now()}
},{versionKey:false});
const CreateFood=mongoose.model('products',DataSchema);
module.exports=CreateFood;