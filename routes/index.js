let express = require("express")
let routes = express.Router()
let blogRoute = require("./blog.route");
let UserRoute = require("./user.route");
const { verifyToken } = require("../middleware/auth");

routes.use("/blog", verifyToken, blogRoute);
routes.use("/user", UserRoute)


module.exports = routes;
