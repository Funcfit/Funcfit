const Message = require("../models/message.js");
//import Message from "../models/message.js";
const User = require("../models/user.js");
//import User from "../models/user.js";
const Chat = require("../models/chat.js");
//import Chat from "../models/chat.js";
const { StatusCodes } = require("http-status-codes");
//import { StatusCodes } from "http-status-codes";

const { BadRequestError } = require("../errors/index.js");
//import { BadRequestError } from "../errors/index.js";

const sendMessage = async (req, res) => {
  const { message, chatId } = req.body;

  if (!message || !chatId) {
    return BadRequestError("Please Provide All Fields To send Message");
  }

  let newMessage = {
    sender: req.user.id,
    message: message,
    chat: chatId,
  };

  let m = await Message.create(newMessage);

  m = await m.populate("sender", "username avatar");
  m = await m.populate("chat");
  m = await User.populate(m, {
    path: "chat.users",
    select: "username avatar email _id",
  });

  await Chat.findByIdAndUpdate(chatId, { latestMessage: m }, { new: true });

  res.status(StatusCodes.OK).json(m);
};

const allMessages = async (req, res) => {
  const { chatId } = req.params;

  const getMessage = await Message.find({ chat: chatId })
    .populate("sender", "username avatar email _id")
    .populate("chat");

  res.status(StatusCodes.OK).json(getMessage);
};

module.exports = { allMessages, sendMessage };
