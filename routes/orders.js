const express=require("express")
const connectDB=require("../../../../Task manager/Task-manager-app/backend/db/connect")
const jwt=require("jsonwebtoken")
const authMiddleware=require("../db/middleware")
const middleware = require("../db/middleware")

const router=express.Router()

let db;
router.post("/place-order",authMiddleware,async (req,res)=>{
    try{
         
        const userid=req.user.userId
        const {totalamount}=req.body 
        db=await connectDB()


        const cartItems=await db.all(`SELECT * FROM cart WHERE userId=?`,[userid])
         

        if (cartItems.length==0){
            res.json("Cart is Empty! Add Items")

        }
        else{
                 const usersid=req.user.userId
   

        const ordersquery=await db.run(`INSERT INTO orders(user_id,total_amount,status) VALUES(?,?,?)`,[usersid,totalamount,"pending!"])
        const orderId=ordersquery.lastID
        console.log(orderId)
        

        for (let each of cartItems ){
                    await db.run(`INSERT INTO order_items(order_id,product_id,quantity,price) VALUES(?,?,?,?)`,[orderId,each.productId,each.quantity,"null"]);
                
        }

      
       
        }
        
        
         
        
     

       
     
        
 

        
    }
    catch(error){
        res.json({error:error.message})
    }
})

router.get('/',middleware,async(req,res)=>{
    try{

        db=await connectDB()
        const userid=req.user.userId

        const result=await db.all(`SELECT orders.user_id,
  orders.total_amount,
  orders.status,
  orders.created_at,

  order_items.id AS order_item_id,
  order_items.order_id,
  order_items.product_id,
  order_items.quantity,
  order_items.price,products.* FROM orders
             JOIN order_items
              ON orders.id=order_items.order_id
              JOIN products ON order_items.product_id=products.id

             WHERE orders.user_id=?`,[userid])
       
        res.json({message:result})

    }
    catch(error){
        res.json({error:error.message})
    }
})


module.exports=router;