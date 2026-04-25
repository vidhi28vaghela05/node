// chatbot --> static(rule based Chatbot), ai chatbot (gemini key)
const express = require("express");
const router = express.Router();
const chatController = require("../../controllers/chat.controller")
const  userMiddleware = require("../../middlewares/user.middleware")
// rule based Chatbot 
router.post("/chat",chatController.StaticBot)

// Ai Based Chatbot

router.post("/chat/ai", userMiddleware.authUser, chatController.AIBot);


module.exports = router;
