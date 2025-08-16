
import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from 'bcryptjs'; 

// Signup New User
export const signup = async (req, res) => {
    const { fullName, email, password, bio } = req.body;

    try {
        if(!fullName || !email || !password || !bio) {
            return res.json({
                message: 'All fields are required',
                success: false
            })
        }

        const user = await User.findOne({email});
        if(user) {
            return res.json({
                message: 'Email already exists', 
                success: false
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            fullName, email, password: hashedPassword, bio
        })

        const token = generateToken(newUser._id);
        const userObj = newUser.toObject();
        delete userObj.password;
        res.json({
            message: 'Account created successfully',
            userData: userObj,
            token,
            success: true
        })

    } catch (error) {
        console.log(error.message);
        res.json({
            message: error.message,
            success: false
        })
    }
}

// Login User
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await User.findOne({email});

        if(!userData) {
            return res.json({
                message: 'Invalid email or password',
                success: false
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, userData.password);
        if(!isPasswordCorrect) {
            return res.json({
                message: 'Invalid email or password',
                success: false
            })
        }

        const token = generateToken(userData._id);
        const safeUser = userData.toObject();
        delete safeUser.password;
        res.json({
            message: 'Login successfully',
            userData: safeUser,
            token,
            success: true
        })
        
    } catch (error) {
        console.log(error.message);
        res.json({
            message: error.message,
            success: false
        })
    }
}

// Check user is Authenticated or not
export const isAuth = async (req, res) => {
    res.json({
        message: 'User is Authenticated',
        user: req.user,
        success: true
    })
}

// Update User profile
export const updateProfile = async (req, res) => {
    try {
        const { profilePic, bio, fullName } = req.body;

        const userId = req.user._id;
        let updatedUser;

        if(!profilePic) {
            updatedUser = await User.findByIdAndUpdate(userId, {bio, fullName}, {new: true}); 

        } else {
            const upload = await cloudinary.uploader.upload(profilePic);

            updatedUser = await User.findByIdAndUpdate(userId, {profilePic: upload.secure_url, bio, fullName}, {new: true});
        }

        res.json({
            message: 'Profile Updated Successfully',
            user: updatedUser,
            success: true
        })

    } catch (error) {
        console.log(error.message);
        res.json({
            message: error.message,
            success: false
        })
    }
}