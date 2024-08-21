import { Schema, model, Types } from "mongoose";

const userSchema = Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        //required: true
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    password: {
        type: String,
        //required: true
    },
    age: {
        type: Number,
        //required: true
    },
    role: {
        type: String,
        enum: ['admin', 'usuario', 'premium'],
        default: 'usuario'
    },
    cart: {
        type: Types.ObjectId,
        ref: 'Cart'
    },
    resetToken: {
        token: String,
        expire: Date
    }
});

export const UserModel = model("user", userSchema);