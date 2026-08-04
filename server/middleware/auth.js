import jwt from "jsonwebtoken";

const auth = async(req, res, next) => {
    try{
        const authHeader = req.header("Authorization")?.replace("Bearer ", "")
        if (!authHeader || !authHeader.startsWith("Bearer ")) return res.status(401).json({success: false, message: "Not authorized, no token"})
        const token = authHeader.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.id
        next()
    } catch (error) {
        console.error("Auth middleware error", error.message)
        res.status(401).json({success: false, message: " Not authorized, invalid token"})
    }
}

export default auth;