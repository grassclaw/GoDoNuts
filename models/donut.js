const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const donutSchema = new Schema({
    id: {type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true }
});

const Donut = mongoose.model("Donut", donutSchema);

module.exports = Donut;
