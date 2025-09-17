const express=require("express");
const products=require("../models/products");
const cartuu=require("../models/cart");
const middleware=require("../db/middleware");
const users=require("../models/users");
const AdminCheckingOrder=require("../models/adminCheckingOrders");

const router=express.Router(); 

router.post("/add",middleware,async(req,res)=>{
    const userid=req.user.userId;
 /* const {
    userName,
    phoneNumber,
    deliveryAddress,

    paymentMethod,
    specialInstructions
  }=req.body;
    try {
        const cartItems=await cartuu.find({userId:userid}).populate("productId").exec();
        if(cartItems.length===0){
          return res.status(400).json({message:"Cart is empty"});
        }   
        let subtotal=0;
        cartItems.forEach(item=>{
          subtotal+=item.productId.price*item.quantity;
        });
        const deliveryFee=50;
        const taxes=0.1*subtotal;
        const total=subtotal+deliveryFee+taxes; 
        const newOrder=new AdminCheckingOrder({
          userId:userid,
          userName,
            phoneNumber,
            deliveryAddress,
            paymentMethod,
            specialInstructions,
            items:cartItems.map(item=>({
                productId:item.productId._id,
                quantity:item.quantity,
                price:item.productId.price
            })),
            subtotal,
            deliveryFee,
            taxes,
            total
        });
        await newOrder.save();
        await cartuu.deleteMany({userId:userid});
        res.status(200).json({message:"Order placed successfully",orderId:newOrder._id});
    } catch (error) {
        res.status(500).json({message:error.message});
    }*/
   const {
       
        userName,phoneNumber,deliveryAddress, 

        paymentMethod,specialInstructions,
        items,subtotal,deliveryFee,taxes,total,
    }=req.body;

    try{
        const cartItems=await cartuu.find({userId:userid}).populate("productId").exec();
        if (cartItems.length===0){
            return res.status(400).json({message:"cart is empty"});

        }
          



       const newOrder= new AdminCheckingOrder({
            userId:userid,
            userName,phoneNumber,
            deliveryAddress,
            paymentMethod,

            specialInstructions,
        items:cartItems.map(each=>({
          
            
            productId:each.productId._id, 
            quantity:each.quantity,
            price:each.productId.price
     } )) 
        ,
        subtotal,
        deliveryFee,
        taxes,
        total,
        })
       await newOrder.save();
    
       await cartuu.deleteMany({userId:userid}) 
        res.status(200).json({message:"order placed successfully",orderId:newOrder._id   
    
    })
    
    
        }
catch(error){
        res.status(500).json({message:error.message})
    }   


  }    

)        


module.exports=router;



