const express=require("express"); 
const mongoose=require("mongoose" );
const bcrypt=require("bcrypt");
const admin=require("../models/admin");


const admindata=async ()=>{
    const hashedpass=await bcrypt.hash("uma777",10)
    const adminData=new admin({
        username:"uma",
        password:`${hashedpass}`
    })

    adminData.save() 

}

module.exports=admindata;