const express=require("express")
const Products=require("../models/products")
const router=express.Router()

router.get("/products",async(req,res)=>{
   
    try {
        const Response=await Products.find()
        res.json({message:Response})

     
    } catch (error) {
        res.json({message:error.message})
        
    }
})

module.exports=router;