const mongoose = require('mongoose');
const { Schema } = mongoose;

// Created a new schema for pushing movie booking details.
const bookMovieSchema = new Schema({
    movie: { type: String,  default:"" },
    slot: { type: String, default:"" },
    seats: {
        A1: { type: Number, default:0 },
        A2: { type: Number, default:0 },
        A3: { type: Number, default:0 },
        A4: { type: Number, default:0 },
        D1: { type: Number, default:0 },
        D2: { type: Number, default:0 }
    }
}, { timestamps: true })

// Registering the schema with mongoose model.
module.exports = mongoose.model('bookmovieticket', bookMovieSchema);
