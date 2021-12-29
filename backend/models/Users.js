const mongoose = require("mongoose")
const Schema  = mongoose.Schema;

const UserSchema = new Schema({
    mail:{
        type:String,
        required:true,
    }
})

module.exports = Users = mongoose.model("users",UserSchema);