import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => console.log("MongoDB connected successfully"));
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // Stop the server if the DB won't connect
    }
};

export default connectDB;