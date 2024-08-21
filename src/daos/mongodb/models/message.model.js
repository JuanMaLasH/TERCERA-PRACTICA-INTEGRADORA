import { Schema, model  } from "mongoose";

const messageSchema = Schema({
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const MessageModel = model("messages", messageSchema);

export default MessageModel; 