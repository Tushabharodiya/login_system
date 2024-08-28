const Blog = require("../models/blog.model")
let cloudinary = require("../middleware/cloudinary")




let view_blog = async (req, res) => {
    try {

        let blog = await Blog.find()

        res.status(200).json({
            message: "blog get succesful",
            blog
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let create_blog = async (req, res) => {
    try {

        let body = req.body;
        let image_url = await cloudinary.uploader.upload(req.file.path)

        let newBody = {
            ...body,
            image: image_url.secure_url,
            public_id: image_url.public_id
        }
        // console.log(newBody);


        let blog = await Blog.create(newBody)
        // console.log(blog);

        res.status(201).json({
            message: "blog create successfully",
            blog
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let delete_blog = async (req, res) => {
    try {

        let { id } = req.params;

        let findImage = await Blog.findById(id)
        let image_url = await cloudinary.uploader.destroy(findImage.public_id)

        let blog = await Blog.findByIdAndDelete(id)

        res.status(200).json({
            message: "blog delete successfully",
            blog,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let update_blog = async (req, res) => {
    try {

        let { id } = req.params;
        let body = req.body;

        if (req.file) {
            let old = await Blog.findById(id)
            // console.log(old);

            await cloudinary.uploader.destroy(old.public_id)
            let image_url = await cloudinary.uploader.upload(req.file.path);

            let newBody = {
                id,
                ...body,
                image: image_url.secure_url,
                public_id: image_url.public_id,
            }

            let data = await Blog.findByIdAndUpdate(id, {
                ...body,
                image: image_url.secure_url,
                public_id: image_url.public_id,
            })
            res.status(200).json({
                message: "blog update successfully",
                newBody
            })
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = { view_blog, create_blog, delete_blog, update_blog }