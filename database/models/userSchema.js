const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    discordId: {
        type: String,
        unique: true,
    },
    username: {
        type: String,
    },
    discriminator: {
        type: String,
    },
    profile: {
        wordcount: {
            type: Number,
        },
        admin: {
            type: Boolean,

        }
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.export = User;