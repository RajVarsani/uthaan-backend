// Event Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const showsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    season: {
        type: Number,
        required: true
    },
    playlistId: {
        type: String,
        required: true
    },
});

const shows = new model("show", showsSchema);

module.exports = shows;