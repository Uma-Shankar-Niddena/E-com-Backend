const express=require("express")
const connectDB=require("../../../../Task manager/Task-manager-app/backend/db/connect")
const router=express.Router()
const middleware=require("../db/middleware")
let db;

router.post('/add-checkout-details',middleware,async (req, res)=>{
    try{

        db=await connectDB()
        const userid=req.user.userId 
       const {
  username, // ✅ match frontend key
  phoneNumber,
  deliveryAddress,
  paymentMethod,
  specialInstructions,
  items,
  subtotal,
  deliveryFee,
  taxes,
  total
} = req.body






     

    const query=await db.run(`INSERT INTO admin_checking_orders( userId, userName, phoneNumber, deliveryAddress,
    paymentMethod, specialInstructions,
    items, subtotal, deliveryFee, taxes, total
  ) VALUES (?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?) `,[userid,username,
  phoneNumber,
  deliveryAddress,
  paymentMethod,
  specialInstructions,
  JSON.stringify(items),
  subtotal,
  deliveryFee,
  taxes,
  total
  ])
    
   res.json({message:query})

    }
    catch(err){
        res.json({error:err.message})
    }
})

module.exports=router;