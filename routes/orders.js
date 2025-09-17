const express=require("express");
const middleware=require("../db/middleware"); 
const checkoutDetails=require("../models/adminCheckingOrders"); 
const orders=require("../models/orders");
const Products=require("../models/products");
const router=express.Router(); 

router.post("/add",middleware,async(req,res)=>{
    const userid=req.user.userId; 
    let productDetails;

    const checkout=await checkoutDetails.findById(req.body.checkoutId);
     for (let eachProduct of checkout.items){
         productDetails=await Products.findById(eachProduct.productId);
     }

    if (!checkout){
        return res.status(400).json({message:"Invalid checkout details"});
    }
    try{ 
        console.log("checkout info",checkout)
         console.log("checkout details",productDetails)
        const newOrder=new orders({
            userId:userid,
            totalAmount:checkout.total,
            products:checkout.items.map(item => item.productId),


            checkoutDetailsId:checkout._id
        }); 
        
       await newOrder.save();
        res.status(200).json({message:"Order placed successfully",orderId:newOrder._id});
    }catch(err){
        res.status(500).json({message:err.message})
    }

})



module.exports=router; 
