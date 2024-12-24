import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./Db/connecDB.js"
 
dotenv.config()
const app = express()

const corsOptions = {
  origin: "http://localhost:5173", // Replace with the frontend URL
  credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));
const PORT = process.env.PORT || 1411
app.use(express.json());
app.use(cookieParser());
app.listen(PORT,()=>{
    console.log(`Server is Running ${PORT}`)
    connectDB()
})
