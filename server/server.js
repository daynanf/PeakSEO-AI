import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoutes.js";

dotenv.config();

connectDB();

const app = express()


app.use(express.json())
app.use(cors())
app.use("/api/auth", authRouter)


app.get('/', (req,res)=>res.send("Server is running"))

const PORT = process.env.PORT;

app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
