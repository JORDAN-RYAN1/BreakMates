const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rsvpSchema = new Schema({
    rsvp: {
        type: String,
        required: [true, "is required"],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "is required"]
    },
    connection: {
        type: Schema.Types.ObjectId,
        ref: 'Connection',
        required: [true, "is required"]
    }
})

module.exports = mongoose.model('Rsvp', rsvpSchema);