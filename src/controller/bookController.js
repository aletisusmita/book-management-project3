const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const bookModel=require("../models/bookModel")
const userModel=require("../models/bookModel")
const moment=require("moment")

const createBook=async (req,res)=>{
    try {
        const data=req.body
        if(Object.keys(data).length==0)return res.status(400).send({status:false,msg:"please provide something to createBook"})
         let{title,ISBN,excerpt,userId,category,subcategory,reviews,deletedAt,isDeleted,releasedAt}=data

         if(!title)return res.status(400).send({status:false,msg:"title should be requird"})

         if(!ISBN) return res.status(400).send({status:false,msg:"ISBN should be required.............................."})

         if(!excerpt)return res.status(400).send({status:false,msg:"excerpt should be required........"})

         if(!userId)return res.status(400).send({status:false,msg:"userId should be required.........."})

         if(!category)return res.status(400).send({status:false,msg:"category should be required......."})

         if(!subcategory)return res.status(400).send({status:false,msg:"subcategory should be required.........."})

         if(!reviews)return res.status(400).send({status:false,msg:"reviews should be required.........."})

         let result=await bookModel.create(data)
         if(isDeleted){result.deletedAt=Date()}
         result.save()
         return res.status(201).send({msg:result})

    } 
        catch (error) {
            res.status(500).send({ status: false, error: error.message })
    }
}
// ################################################################################################################################################################################

const getbooks=async(req,res)=>{
    try{
       const data=req.query
    //    const books={}
    //    const{userId,category,subcategory}=data

    //    if(!userId)return res.status(400).send({status:false,msg:"authorId should be valid"})

    //    if(!category)return res.status(400).send({status:false,msg:"category should be valid"})

    //    if(!subcategory)return res.status(400).send ({status:false,msg:"subcategory should be valid"})

    //    let savedUser = await usereModel.findOne({userId:userId}).select({isDeleted:0,createdAt:0,updatedAt:0,__v:0,_id:1, title:1, excerpt:1, userId:1, category:1, releasedAt:1, reviews:1 })
    //    console.log(savedUser)
    //    let UserId= savedUser._id
    //    console.log(UserId)
       
        // books.isDeleted=false
        let result=await bookModel.find(req.query)
        if(result.length==0)return res.status(400).send({status:false,msg:"NO book found"})
        return res.status(200).send({status:true,msg:result})
       
    }

    catch (err){
       res.status(500).send({Error:err.message}) 
    }
}


// ##############################################################################################################################################



module.exports.createBook=createBook
module.exports.getbooks=getbooks





