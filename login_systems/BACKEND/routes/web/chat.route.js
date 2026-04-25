// chatbot --> static(rule based Chatbot), ai chatbot (gemini key)
const express = require("express");
const router = express.Router();
const chatController = require("../../controllers/chat.controller")

// rule based Chatbot 
router.post("/chat",chatController.StaticBot)


module.exports = router;