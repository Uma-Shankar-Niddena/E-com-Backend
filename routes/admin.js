const express=require("express")
const connectDB=require("../../../../Task manager/Task-manager-app/backend/db/connect")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const router=express.Router()
let db;
;
const SECRET_KEY=process.env.JWT_SECRET_ADMIN;

router.post('/signup',async(req,res)=>{
     try{
        const {username,password}=req.body 
         db=await connectDB()
         const isExist=await db.get(`SELECT * FROM admins`)
         const hashpass=await bcrypt.hash(password,10)
         if (!isExist){
            await db.run(`INSERT INTO admins(username,password) VALUES(?,?)`,[username,hashpass])
            res.json({message:"Admin Account created!"})

         }
         else{
            res.json({message:"admins table lo already data vundi ra ungamma!!"})
         }
     }
     catch(error){
        res.json({error:error.message})
     }
})

router.post('/signIn',async(req,res)=>{  
             const {username,password}=req.body 
             console.log(username)
            

    try{
      
    
       db=await connectDB()
        const isExist=await db.get(`SELECT * FROM admins WHERE username=?`,[username])
          console.log(isExist)
     

       if (!isExist){
        return res.status(400).json({message:"Admin not found!"})
       }

        const comparepass=await bcrypt.compare(password,isExist.password)
        if (!comparepass){
          return   res.status(400).json({message:"password is incorrect!"})
        }
      
            const token=jwt.sign({
            adminId:isExist.id
        },SECRET_KEY)

     
        res.cookie("token", token, {
        httpOnly: false,    
        secure: false,      
        sameSite: "Strict"  
    });
     
   return  res.status(200).json({message:"admin login sucessfull!",jwttoken:token})
        



    
    }
    catch(error){
      return   res.status(400).json({message:error.message})
    }
})
module.exports=router;
