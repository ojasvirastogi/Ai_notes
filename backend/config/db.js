import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();


const connectDb=async()=>{
    try {
       const conn= await mongoose.connect(process.env.MONGODB_URI);
       console.log("Database connected successfully")
    } catch (error) {
        return res.status(400).json({
            message:"Connection failed"
        })
    }
}
export default connectDb;