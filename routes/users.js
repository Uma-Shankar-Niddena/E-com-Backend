const express=require("express")
const Users=require('../models/users')
const bcrypt=require("bcrypt")

const jwt=require('jsonwebtoken')
require("dotenv").config();

const router=express.Router()

const SECRET_KEY=process.env.secreteKey


router.post("/register",async(req,res)=>{
    const {username,email,password}=req.body
    try {

        const isUsernameExist=await Users.findOne({username})
        if (isUsernameExist){
            return res.status(400).json({message:"Username already exists"})

        }

        const hashedPassword= await bcrypt.hash(password,10)

        const newUser= new Users({
            username,
            email:email,
            password:hashedPassword,
        })

        newUser.save()

        res.json({message:"Registered!!"})      
        
    } catch (error) {
        res.json({message:error.message})
        
    }
})

router.post('/login',async(req,res)=>{
    try {
        console.log("secret key",SECRET_KEY)

     const {username,password}=req.body 
     const checkingUserExist=await Users.findOne({username})
     if (checkingUserExist){
        const comparePass=await bcrypt.compare(password,checkingUserExist.password)

        if (comparePass){

            const jwtToken=jwt.sign({userId:checkingUserExist.id},SECRET_KEY)
           res.cookie("token",jwtToken,{
            httpOnly:true,
            secure:false,
            sameSite:"None"
           });
         
           res.status(200).json({message:jwtToken})

       
        }
        res.status(500).json({message:"Invalid password"})
     }


        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
})


module.exports=router;