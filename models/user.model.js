let mongoose = require("mongoose")


let userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
    }
})

let User = mongoose.model("userSchema", userSchema)

module.exports = User;