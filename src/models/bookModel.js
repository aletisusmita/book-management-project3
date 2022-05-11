const mongoose=require("mongoose")
const moment=require("moment")


const objectId=mongoose.Schema.Types.ObjectId
const bookSchema=new mongoose.Schema({
    title: {type:String, required:true, unique:true},
    excerpt: {type:String, required:true}, 
    userId: {type:objectId,ref:"User",required:true},
    ISBN: {type:String, required:true, unique:true},
    category: {type:String, required:true},
    subcategory: {type:[String], required:true},
    reviews: {type:Number},
    deletedAt: {type:Date,default:""}, 
    isDeleted: {type:Boolean, default: false},
    releasedAt: {type:Date, required:true,default:moment(Date.now())},

       
},{timestamps:true})

module.exports=mongoose.model("book",bookSchema)
