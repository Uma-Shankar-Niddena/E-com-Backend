const connectDB = require("./connection");

const createTables = async () => {
  const db = await connectDB();

  


 await db.run(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,         -- 'wine', 'stuff', 'water', 'soda', 'cigar'
    description TEXT,
    price REAL,
    originalPrice REAL,
    image TEXT,
    region TEXT,
    

    -- Wine-specific
    vintage TEXT,
    type TEXT,                      -- wine type (e.g., red, white)
    rating REAL,
    inStock BOOLEAN,

    -- Stuff-specific
    spice_level TEXT,
    best_with TEXT,

    -- Cigar-specific
    nicotine_strength TEXT,
    length_cm REAL,
    flavor TEXT,

    -- Water/Soda-specific
    volume_ml INTEGER,
    is_carbonated BOOLEAN,
    expiry_date TEXT
);

  `) 



 await db.run(` CREATE TABLE IF NOT EXISTS cart (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          userId INTEGER,
          productId INTEGER,
          quantity INTEGER
        );`)

  await db.run (`
    CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL, -- Hashed password
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
    `)

///creating table for admin 

await db.run(`CREATE TABLE IF NOT EXISTS admins (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL -- Hashed password
);`)

///creating table for order deatils 

await db.run(`CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  total_amount REAL NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending', -- pending, confirmed, shipped, delivered
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);`)



///create table for order_items (what the user ordered)
await db.run(`CREATE TABLE IF NOT EXISTS order_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id INTEGER NOT NULL ,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  price REAL NOT NULL, -- Price at time of order
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id),
    UNIQUE(order_id, product_id)


);`)

await db.run(`CREATE TABLE IF NOT EXISTS admin_checking_orders (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER NOT NULL,
  userName TEXT NOT NULL,
  phoneNumber TEXT NOT NULL,
  deliveryAddress TEXT NOT NULL,
  paymentMethod TEXT NOT NULL,         -- "Card", "Wallet", "Cash"
  specialInstructions TEXT,
  items TEXT NOT NULL,                 -- Store as JSON string
  subtotal REAL NOT NULL,
  deliveryFee REAL NOT NULL,
  taxes REAL NOT NULL,
  total REAL NOT NULL,
  status TEXT DEFAULT 'Placed',        -- Placed, Preparing, Delivered etc.
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      
  
  )`)

  



  console.log("✅ Tables created successfully");
};

module.exports=createTables
