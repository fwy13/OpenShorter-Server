const { Schema, model } = require("mongoose");

const shortLink = new Schema(
    {
        long_url: String,
        expires: Number,
        password: String,
        id_link: String,
    },
    { timestamps: true }
);

module.exports = model("shortLink", shortLink);
