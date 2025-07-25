const express=require("express")
const connectDB=require("../db/connection")
const router=express.Router()
const admiddleware=require("../db/adminmiddleware");


let db;
router.get('/checkout-Data',admiddleware,async(req,res)=>{
     try{
        db=await connectDB()
       
       
        
  const allorders=await db.all(`SELECT * FROM admin_checking_orders`)
      
         res.send(allorders)
        
     }
     catch(error){
        res.send(error.message)
     }
})


router.get('/all-orders',admiddleware,async(req,res)=>{

   try{
      db=await connectDB()
      const adminid=req.admin.adminId 
    const response=  await db.all(`
SELECT 
  orders.id AS order_id,
  orders.user_id,
  orders.total_amount,
  orders.status,
  orders.created_at,

  order_items.id AS order_item_id,
  order_items.product_id,
  order_items.quantity,
  order_items.price,

  products.name,
  products.category,
  products.description,
  products.image,
  products.type,
  products.rating,
  products.price,

  users.username AS customer_name,
  users.email AS customer_email,

  aco.deliveryAddress,
  aco.paymentMethod,
  aco.specialInstructions,
  aco.subtotal,
  aco.deliveryFee,
  aco.taxes,
  aco.total AS grandTotal,
  aco.createdAt AS placedAt

FROM orders
JOIN order_items ON order_items.order_id = orders.id
JOIN products ON products.id = order_items.product_id
JOIN users ON users.id = orders.user_id
JOIN admin_checking_orders AS aco ON aco.userId = users.id
ORDER BY orders.created_at DESC;


`)
   
      res.send(response)


    
   }
   catch(err){
      res.send(err.message)
   }
})
module.exports=router;