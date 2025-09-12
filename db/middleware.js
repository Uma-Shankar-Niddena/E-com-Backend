const jwt=require("jsonwebtoken")
const SECRET_KEY=process.env.JWT_SECRET


const middleware=async (req,res,next)=>{

    const token = req.cookies.token
    
  
    if (!token){
        res.json({message:"Acess denied!"})
    }
    try{
          const isToken=jwt.verify(token,SECRET_KEY)
    if(!isToken){
        res.json({message:"wrong Jwt token!"})
    }
    req.user=isToken
    next()
    }
    catch(error){
        res.json({error:error.message})
    }

    
    



}
module.exports= middleware;