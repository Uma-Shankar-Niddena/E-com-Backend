const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDb = require("./db/connection");

dotenv.config();
connectDb();

const app = express();
app.use(cookieParser());

app.set("trust proxy", 1);

// ✅ Correct CORS — works for ALL Vercel deployments
app.use(
  cors({
    origin: (origin, callback) => {
      const allowed = [
        "http://localhost:5173",
        "https://e-com-frontend-tau.vercel.app",
        "https://e-com-frontend-git-master-umaniddena-gmailcoms-projects.vercel.app",
        "https://e-com-frontend-o6impnrmg-umaniddena-gmailcoms-projects.vercel.app",
      ];

      if (!origin) return callback(null, true);

      if (origin.endsWith(".vercel.app")) return callback(null, true);
      if (allowed.includes(origin)) return callback(null, true);

      return callback(new Error("Not allowed by CORS: " + origin));
    },
    credentials: true,
  })
);

app.use(express.json());
app.use("/images", express.static("images"));

// Models
require("./models/users");
require("./models/admin");
require("./models/products");
require("./models/orders");
require("./models/orderItems");
require("./models/cart");
require("./models/adminCheckingOrders");

// Routes
app.use("/api", require("./routes/productsss"));
app.use("/user", require("./routes/users"));
app.use("/cart", require("./routes/cart"));
app.use("/admin/checkoutdetails", require("./routes/checkout"));
app.use("/orders", require("./routes/orders"));
app.use("/orders", require("./routes/orderItems"));
app.use("/", require("./routes/authcheck"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});
module.exports = app;