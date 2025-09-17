const express=require("express");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const admin=require("../models/admin");
require("dotenv").config();
const SECRET_KEY=process.env.adminSecretKey;

const router=express.Router(); 

router.post("/login",async(req,res)=>{
     const {username,password}=req.body; 

     try{
        const checkingAdminDetails=await admin.findOne({username})

        if (checkingAdminDetails){

          const comparePass=await bcrypt.compare(password,checkingAdminDetails.password)
          if (comparePass){
            const jwtToken=jwt.sign({adminId:checkingAdminDetails._id},SECRET_KEY)
            res.cookie("token",jwtToken,{
                httpOnly:true,
                secure:false,
                sameSite:"None"
            });
            res.status(200).json({message:"Admin logged in successfully",token:jwtToken})
          }

     }
    }
    catch(err){
        res.status(500).json({message:err.message})
     }  
   
      


}  
)
