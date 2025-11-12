const express=require("express")
const products=require("../models/products")
const cartuu=require("../models/cart")
const middleware=require("../db/middleware")
const users=require("../models/users")
const { route } = require("./productsss")

const router=express.Router()



router.post("/add",middleware,async(req,res)=>{
    const userid=req.user.userId 
    console.log("user id from middleware",userid)

    const {productId,quantity}=req.body 
    try { 

        const cartProductExist=await cartuu.findOne({productId})
        if(cartProductExist){
             cartProductExist.quantity+=quantity || 1

             await cartProductExist.save()
             
        }

        const newCart= new cartuu({
          userId:userid ,
          productId,
          quantity:quantity || 1
          
        })

      await newCart.save()
      res.status(200).json({message:"item added to cart"})

        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
})

//// get all cart items 
router.get('/', middleware, async (req, res) => {
  console.log("✅ Cart routes file loaded");

  console.log("🧠 req.user:", req.user);
  const userId = req.user?.userId;
  console.log("🧾 userId:", userId);

  try {
    const allCartItems = await cartuu.find({ userId }).populate("productId").exec();
    console.log("🛒 Found items:", allCartItems);
    res.status(200).json({ allCartItems });
  } catch (error) {
    console.error("❌ Error fetching cart items:", error);
    res.status(500).json({ message: error.message });
  }
});


// delete cart item

router.delete("/delete/:id",middleware,async(req,res)=>{
  const cartId=req.params.id
  try {
    await cartuu.findByIdAndDelete(cartId)
    res.status(200).json({message:"item removed from cart"})  
  } catch (error) {
    res.status(500).json({message:error.message})
  }})




module.exports=router;