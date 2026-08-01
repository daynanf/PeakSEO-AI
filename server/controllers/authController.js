import User from "../models/User.js"
import bcrypt from "bcrypt"

const generateToken =(id)=>{
    return JsonWebTokenError.sign({id},process.env.JWT_SECRET, {expiresIn: "30d"})
}

export const register =async(req,res)=>{
    try {
        const {name,email,password}= req.body;
        if (!name | !email | !password) return res.status(400).json({success: false, message: "All feilds are required"});

        const existingUser = await User.findOne({email})
        if (existingUser) return res.status(400).json({success: false, message: "user already exist"})
        
            const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10))
            const user = await User.create({name,email, password: hashedPassword})

            const token = generateToken(user._id);
            res.status(201).json({success: true, token, user})
    } catch (error) {
        console.error("Register error", error.message)
        res.status(500).json({success: false, message: "Server error"})
    }
}


