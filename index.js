const express = require("express");

require("dotenv").config();

// Import database setup and seeding
const createTables = require("./db/initTables");
const seedProducts = require("./db/seedProducts");




// Import API routes
const productsRoutes = require("./routes/products");
const usersRoutes=require('./routes/users')
const cartRoutes=require("./routes/cart")

const orderRoute=require("./routes/orders")
const checkingOrdersRoute=require("./routes/checkingorders")
const totalordersForadminRoute=require("./routes/totalordersForadmin")
const adminRoute=require("./routes/admin")
const addEachorderDetails=require('./routes/checkoutdetails')
const cors = require("cors");
const cookieParser = require("cookie-parser");





const app = express();
app.use(cookieParser());




app.use(cors({
 origin: "http://localhost:5173",  // frontend URL
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
// Middlewares


app.use("/images", express.static("images"));
app.use(express.json()); // This is needed to read req.body




// Routes
app.use("/api", productsRoutes);
app.use('/',usersRoutes)
app.use('/cart',cartRoutes)
app.use('/orders',orderRoute)
app.use('/orders',checkingOrdersRoute)
app.use('/admin',totalordersForadminRoute)
app.use('/admin',adminRoute)
app.use('/place-order/',addEachorderDetails)

const PORT=process.env.PORT || 5000
const JWT_SECRET=process.env.JWT_SECRET 


const ADMIN_SECRET=process.env.ADMIN_SECRET

// Start the server and prepare DB
const startServer = async () => {
  await createTables();     // ✅ Creates tables if not exist
  await seedProducts();
 // ✅ Inserts product data if table is empty
       // ✅ Inserts stuff data if table is empty
  ; //update category to wine" 

  app.listen(PORT, () => {
    console.log(`🚀 Server running on ${PORT} `);
  });
};

startServer();
