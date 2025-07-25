const connectDB=require("../db/connection")
const express=require("express");
const middleware = require("../db/middleware");
const { route } = require("./products");
const router=express.Router()

let db;

router.post('/add',middleware,async(req,res)=>{
    try{
        const userid=req.user.userId 
        db=await connectDB()
         const {productId,quantity}=req.body


        const isExist=await db.get(`SELECT * FROM cart WHERE userId=? AND productId=?`,[userid,productId])

        if(isExist){
            
            await db.run(`UPDATE cart SET quantity=quantity+? WHERE id=?`,[quantity,isExist.id])
            

        }
    
         else{
           
           await db.run(`INSERT INTO cart(userId,productId,quantity) VALUES(?,?,?)`,[userid,productId,quantity])
                   res.json({message:"added to cart!"})


         }
     



    }
    catch(error){
        res.json({message:error.message})
    }
})

router.get('/',middleware,async (req,res)=>{

    try{
        db=await connectDB()
        const userid=req.user.userId 
      const resfromdb = await db.all(`
    SELECT 
  cart.id AS cartId, 
  cart.userId, 
  cart.productId, 
  cart.quantity,
  products.*
FROM cart 
LEFT JOIN products ON cart.productId = products.id
WHERE userId = ?
     
    `,[userid]);

       if (!resfromdb){
        res.json({message:"No products"})
      }
     res.json({message:resfromdb})



    }
    catch(error){
        res.json({message:error.message})
    }
})

///delete cartItem 

router.delete('/remove/:id',middleware,async(req,res)=>{
      
    try{
        db=await connectDB()
        const cartuuId = req.params.id

        const userid=req.user.userId


       const response= await db.run(`DELETE FROM cart WHERE userId=? AND id=?`,[userid,cartuuId])
    
        res.json({message:response})
        
        
       
        
       





    }
    catch(error){
        res.json({message:error.message})
    }
})

router.delete('/remove-all-items',middleware,async(req,res)=>{
    try{
        db=await connectDB()
        const userid=req.user.userId 
        await db.run(`DELETE FROM cart WHERE userId=?`,[userid]) 
        res.send("all cartitems deleted!")
    }
    catch(err){
        res.send(err.message)
    }
})

module.exports=router