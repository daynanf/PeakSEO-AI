import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>res.send("Server is running"))

const PORT = process.env.PORT;

app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
