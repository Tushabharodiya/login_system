let mongoose = require("mongoose")

let blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    public_id: {
        type: String,
    }
})


let Blog = mongoose.model("blogSchema", blogSchema)

module.exports = Blog;