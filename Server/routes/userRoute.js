import express from 'express';
import { isAuth, login, signup, updateProfile } from '../controllers/userController.js';
import { protectRoute } from '../middlewares/auth.js';

const userRouter = express.Router();

// Create/Sign-up new User
// @API :- /api/auth/signup
userRouter.post('/signup', signup);

// Login User
// @API :- /api/auth/login
userRouter.post('/login', login);

// Update User Profile
// @API :- /api/auth/update-profile
userRouter.put('/update-profile', protectRoute, updateProfile);

// User Authentication
// @API :- /api/auth/is-auth
userRouter.get('/is-auth', protectRoute, isAuth);

export default userRouter;