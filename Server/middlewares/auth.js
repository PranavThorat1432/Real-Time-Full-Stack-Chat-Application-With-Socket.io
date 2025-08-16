import User from "../models/User.js";
import jwt from 'jsonwebtoken';

// Middleware to protect routes
export const protectRoute = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || '';
        const parts = authHeader.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer') {
            return res.status(401).json({ message: 'Unauthorized', success: false });
        }
        const token = parts[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId).select('-password');
        if(!user) {
            return res.status(401).json({ message: 'User not found', success: false })
        }
        
        req.user = user;
        next();

    } catch (error) {
        console.log(error.message);
        res.status(401).json({ message: 'Unauthorized', success: false })
    }
}