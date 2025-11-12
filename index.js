const express = require("express");
const middleware = require("./db/middleware");

require("dotenv").config();

// Import database setup and seeding

const connectDb=require("./db/connection")





// Import API routes

const productsRoutes=require("./routes/productsss")
const usersRoutes=require("./routes/users")
const cartRoutes=require("./routes/cart")
const adminCheckingOrdersRoute=require("./routes/checkout")
const ordersRoute=require("./routes/orders")
const orderItemsRoute=require("./routes/orderItems")


/*
const productsRoutes = require("./sqlite-routes/products");
const usersRoutes=require('./sqlite-routes/users')
const cartRoutes=require("./sqlite-routes/cart")

const orderRoute=require("./sqlite-routes/orders")
const checkingOrdersRoute=require("./sqlite-routes/checkingorders")
const totalordersForadminRoute=require("./sqlite-routes/totalordersForadmin")
const adminRoute=require("./sqlite-routes/admin")
const addEachorderDetails=require('./sqlite-routes/checkoutdetails')*/
const cookieParser = require("cookie-parser");
const dotenv=require("dotenv")

dotenv.config()
connectDb()


const cors = require("cors");



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


require('./models/users');
require('./models/admin');
require('./models/products');
require('./models/orders');
require('./models/orderItems');
require('./models/cart');
require('./models/adminCheckingOrders');

// Routes
app.use("/api",productsRoutes)
app.use("/user",usersRoutes)
app.use("/cart",middleware,cartRoutes)
app.use("/admin/checkoutdetails",adminCheckingOrdersRoute)
app.use("/orders",ordersRoute)
app.use("/orders",orderItemsRoute)
/*
app.use("/api", productsRoutes);
app.use('/',usersRoutes)
app.use('/cart',cartRoutes)
app.use('/orders',orderRoute)
app.use('/orders',checkingOrdersRoute)
app.use('/admin',totalordersForadminRoute)

app.use('/admin',adminRoute)
app.use('/place-order/',addEachorderDetails)
*/

const PORT=process.env.PORT || 5000
const JWT_SECRET=process.env.JWT_SECRET 


const ADMIN_SECRET=process.env.ADMIN_SECRET

// Start the server and prepare DB
const startServer = async () => {
 
//  await createTables();     // ✅ Creates tables if not exist
 // await seedProducts();


  app.listen(PORT, () => {
    console.log(`🚀 Server running on ${PORT} `);
  });
};

startServer();
