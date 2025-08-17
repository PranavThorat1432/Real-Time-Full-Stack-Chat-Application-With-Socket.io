import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import http from 'http';
import connectDB from './lib/mongodb.js';
import userRouter from './routes/userRoute.js';
import msgRouter from './routes/messageRoutes.js';
import { Server } from 'socket.io';
import jwt from 'jsonwebtoken';

// Create Express app and HTTP Server
const app = express();
const server = http.createServer(app);

// Initialize Socket.io Server
export const io = new Server(server, {
    cors: {origin: '*'}
})

// Store online user's
export const userSocketMap = {}; // { userId: socketId }

// Socket.io JWT auth middleware
io.use((socket, next) => {
    try {
        const token = socket.handshake?.auth?.token;
        if (!token) return next(new Error('Unauthorized'));
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        socket.userId = decoded.userId;
        next();
    } catch (err) {
        next(new Error('Unauthorized'));
    }
});

// Socket.io connection handler
io.on('connection', (socket) => {
    const userId = socket.userId;
    console.log('User Connected:', userId);

    if(userId) {
        userSocketMap[userId] = socket.id;
    }

    // Emit online user's to all connected client
    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    socket.on('disconnect', () => {
        console.log('User disconnected: ', userId);
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap));      
    })    
})

// Middleware setup
app.use(express.json({limit: '4mb'}));
app.use(cors());

// Route setup
app.use('/api/status', (req, res) => res.send('Server is live'));

// User Router
app.use('/api/auth', userRouter);

// Message Router
app.use('/api/messages', msgRouter);

// MongoDB Connnection  
connectDB();

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))