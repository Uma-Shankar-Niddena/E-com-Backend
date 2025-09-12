const jwt=require("jsonwebtoken")
const SECRET_KEY=process.env.ADMIN_SECRET 

const adminmiddleware=async (req,res,next)=>{

    const jwttoken = req.cookies.token
  
    

    
    if (!jwttoken){
          
      return res.status(400).json({message:"Acess denied!"})
    }
   
    try{
         const isToken=jwt.verify(jwttoken,SECRET_KEY)
    if(!isToken){
       return  res.status(400).json({message:"wrong Jwt token!"})
    }
    
    req.admin=isToken
    next()

    }
    catch(err){
       return  res.status(400).json({message:err.message})

    }
   
    
    



}
module.exports= adminmiddleware ;