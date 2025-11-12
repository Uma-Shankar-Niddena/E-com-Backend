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

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const checkingUserExist = await Users.findOne({ username });

    if (!checkingUserExist) {
      return res.status(404).json({ message: "User not found" });
    }

    const comparePass = await bcrypt.compare(password, checkingUserExist.password);

    if (!comparePass) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const jwtToken = jwt.sign({ userId: checkingUserExist.id }, SECRET_KEY, { expiresIn: "1d" });

    // 🧠 FIX: Send proper cookie options
res.cookie("token", jwtToken, {
  httpOnly: true,
  secure: true,        // ✅ must be true for HTTPS (Render + Vercel)
  sameSite: "None",    // ✅ required for cross-domain cookies
  maxAge: 24 * 60 * 60 * 1000
});



return res.status(200).json({ message: "Login successful" });


    console.log("✅ Token set in cookie:", jwtToken);
    return res.status(200).json({ message: "Login successful" });

  } catch (error) {
    console.error("❌ Login error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});



module.exports=router;