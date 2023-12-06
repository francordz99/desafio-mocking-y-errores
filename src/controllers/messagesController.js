import Message from "../dao/models/messageModel.js";
import configureSocket from '../config/socketConfig.js';
import { messagesErrors } from '../services/errors/messagesErrors.js';
const { io } = configureSocket();

const messagesController = {
    getChat: async (req, res) => {
        try {
            const messages = await Message.find().sort({ timestamp: 1 });
            res.render('chat', { messages });
        } catch (error) {
            console.error(error);
            messagesErrors.getChatMessagesError();
        }
    },
    postMessage: async (req, res) => {
        try {
            const { nick, contenido } = req.body;
            const newMessage = new Message({
                sender: nick,
                content: contenido,
            });
            await newMessage.save();
            io.emit('newMessage', newMessage);
            const messages = await Message.find().sort({ timestamp: 1 });
            res.render('chat', { messages });
        } catch (error) {
            console.error(error);
            messagesErrors.postMessageError();
        }
    },
};

export default messagesController;
