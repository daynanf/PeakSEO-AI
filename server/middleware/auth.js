import jwt from "jsonwebtoken";

const auth = async(req, res, next) => {
    try{
        const authHeader = req.header("Authorization")?.replace("Bearer ", "")
        if (!authHeader) return res.status(401).json({success: false, message: "Access denied"})

        const decoded = jwt.verify(authHeader, process.env.JWT_SECRET)
        req.userId = decoded.id
        next()
    } catch (error) {
        console.error("Auth error", error.message)
        res.status(401).json({success: false, message: "Invalid token"})
    }
}