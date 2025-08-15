import express from 'express';
import { getMessages, getUsersForSidebar, markMessageAsSeen, sendMessage } from '../controllers/messageController.js';
import { protectRoute } from '../middlewares/auth.js';

const msgRouter = express.Router();

// Get User listen
// @API :- /api/messages/get-user
msgRouter.get('/get-user', protectRoute, getUsersForSidebar);

// Get Messages
// @API :- /api/messages/:id
msgRouter.get('/:id', protectRoute, getMessages);

// Mark message as seen
// @API :- /api/messages/mark/:id
msgRouter.put('mark/:id', protectRoute, markMessageAsSeen); 

// Send Message
// @API :- /api/messages/send-msg/:id
msgRouter.post('/send-msg/:id', protectRoute, sendMessage); 

export default msgRouter;