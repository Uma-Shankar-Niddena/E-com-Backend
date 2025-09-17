const express=require("express");
const orders=require("../models/orders");


const OrderItem=require("../models/orderItems");
const router=express.Router();
const middleware=require("../db/middleware");

router.post("/orderItems",middleware,async(req,res)=>{
    const userid=req.user.userId;
    const {quantity}=req.body;
   let newOrderItems;
    try{
        const orderId= await orders.find({userId:userid}).populate("products").exec();
     
        console.log(orderId)
        if(!orderId){
            return res.status(400).json({message:"No orders found for this user"});
        }
      for (let eachorder of orderId){
        
  newOrderItems = eachorder.products.map(prod => ({
  orderId: eachorder._id,
  quantity: quantity || 1,
  products: [prod._id],        // save productId inside array
  price: prod.price
}));
await OrderItem.insertMany(newOrderItems);
}


  

        
 


// Insert all at once

        res.status(200).json({message:"Order items added successfully",orderItemId:newOrderItems._id}); 





        
    }
    catch(err){

        res.status(500).json({message:err.message})
    }
})

module.exports=router;