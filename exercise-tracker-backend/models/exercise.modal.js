const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exeriseSchema = new Schema({
    username:{
        type:String,
        requried:true
    },
    description: {
        type:String,
        required: true
    },
    duration:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
},{
    timestamps:true
});

const exercise = mongoose.model('Exercise', exeriseSchema);

module.exports = exercise;