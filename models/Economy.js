const mongoose = require('mongoose')

const EconomySchema = new mongoose.Schema({
    UserId: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    Cash: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: 0,
    },
});

module.exports = mongoose.model("EconomySchema", EconomySchema)