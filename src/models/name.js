const mongoose = require("mongoose");

const NameSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Name", NameSchema);