require("express-async-errors;")
require("dotenv").config({path:"./.env"})
const express =require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth")
const planRouter = require("./routes/plan")
const Sub = require("./routes/subscribe")
const planUnSubRouter = require("./routes/unsubscribe")
const auth=require("./middleware/auth")

const app = express();

//middleware
app.use(express.json());
app.use("/api/auth",authRouter);

app.use(auth)
//app use plans
app.use("/plans/subscribe", Sub);
app.use("/plans/unsubscribe", planUnSubRouter)
app.use("/plans", planRouter);

// app.get("/",(req,res)=>{
//     throw new Error("un-expected-error")
//     console.log(req.user);
//     if(req.user.isAdmin)
//        return res.json({message:"hello world"})
//     res.status(401).json({message:"must be admin"})
// })

// error handling middleware
// app.use((err,req,res,next)=>{
//     res.status(500).json({message:err.message})
// })
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("successfully connected to database");
    app.listen(3000)
    console.log("listening on port 3000")
}).catch(e =>console.log(e.message))