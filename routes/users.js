const  express=require("express")

const connectDB=require("../db/connection")
const router =express.Router()

const bcrypt=require('bcrypt')
const jwt=require("jsonwebtoken")
const SECRET_KEY="Arey Koushik Taagudham!!"
const middleware= require('../db/middleware')



let db;

router.post('/signup',async(req,res)=>{
    try{
        const {username,email,password}=req.body 
            db=await connectDB()

        const usenameExist=await db.get(`SELECT * FROM users WHERE username=?`,[username])
        if (usenameExist==undefined){
            const hashedPass=await bcrypt.hash(password,10)

            await db.run(`INSERT INTO users(username,email,password) VALUES(?,?,?)`,[username,email,hashedPass])
            res.json({ message: "Registration Successful" });

        }
        else{
             res.status(400)
        res.json({ error: "username already exists" });
        
        }
       
    }catch(error){
        res.json({ error: error.message })
    }
     
})

router.post('/login', async (req, res) => {
    try {
        const db = await connectDB();
        const { username, password } = req.body;

        const isaUser = await db.get(`SELECT * FROM users WHERE username=?`, [username]);

        if (!isaUser) {
            return res.status(400).json({ message: "User Not Found!" });
        }

        const comparePass = await bcrypt.compare(password, isaUser.password);
        if (!comparePass) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        const jwttoken = jwt.sign({ userId: isaUser.id }, SECRET_KEY);

        res.cookie("token", jwttoken, {
            httpOnly: false,
            secure: false,
            sameSite: "Strict"
        });

        return res.json({ message: "Login successful! Welcome back.", jwtToken: jwttoken });

    

    } catch (e) {
        return res.json({ message: e.message });
    }
});


router.get('/users',async(req,res)=>{
    try{
        db=await connectDB()
        const alluserss=await db.all(`SELECT * FROM users`)
        res.send(alluserss)
    }
    catch(error){
        res.send(error.message)
    }
})

router.get('/user/:id',middleware,async (req,res)=>{
    try{
        db=await connectDB()
        const  userid=req.user.userId 

        const res=await db.get(`SELECT username FROM users WHERE id=?`,[userid])
        res.json(res.json())
        
    }
    catch(err){
        res.json(err.message)
    }
})

module.exports= router
