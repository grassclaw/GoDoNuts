const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const boxSchema = new Schema({
    id: {type: Schema.Types.ObjectId, required: true },
    boxname: { type: String, required: true },
    donutcount: [
        {
            id: {type: Number, required: true },
            donutname: { type: String, required: true },
          
        }
    ]
});

const Box = mongoose.model("Box", boxSchema);

module.exports = Box;