const express=require("express")
const router=express.Router()
const connectDB=require("../../../../Task manager/Task-manager-app/backend/db/connect");
const middleware = require("../db/middleware");


let db;
/*
router.get('/:id',middleware,async (req,res)=>{
    try{
        db=await connectDB()
        const orderid=req.params.id
        

        const userid=req.user.userId 

       const results= await db.get(`SELECT * FROM orders WHERE id=? AND user_id=? `,[orderid,userid])

    
        if (!results){
            res.json("There is no orders at!")
        }
       else{
              const orders= await db.all(`SELECT order_items.*,products.* FROM order_items JOIN products ON order_items.product_id=products.id WHERE order_items.order_id=? `,[orderid])
    
       res.json(orders)
       } 
      
    }
    catch(error){
        res.json(error.message)
    }
})

*/
module.exports=router