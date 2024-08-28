let express = require("express")
const { view_blog, create_blog, delete_blog, update_blog } = require("../controller/blog.controller")
let route = express.Router()

let multer = require("multer")
let Storage = multer.diskStorage({})
let upload = multer({ storage: Storage }).single('image')

route.get("/get", view_blog);
route.post("/create", upload, create_blog);
route.delete("/delete/:id", upload, delete_blog);
route.put("/update/:iduser.route.js", upload, update_blog)

module.exports = route;