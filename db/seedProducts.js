const mongoose=require('mongoose')
const path=require("path")
const dotenv=require('dotenv')
dotenv.config({path:path.resolve(__dirname,'../.env')});

const product=require('../models/products')
const productsData=require("../data/products.json")



const seedProducts=async(req,res)=>{

  
  try{  
  await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("mongodb database connected!!!")

    await product.deleteMany()

    await product.insertMany(productsData) 
    console.log("products added sucesfully")
   
    process.exit()
  }
  catch(error){
    console.log({message:error.message})
    process.exit(1)

  }

}
