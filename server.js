let http = require("http")
let express = require("express")
let app = express()
app.use(express.json())
let mongoose = require("mongoose")
const routes = require("./routes")

// routes
app.use("/", routes)


// database connection
mongoose.connect("mongodb+srv://4341tushabharodiya:tusha4341@ecommerce.badwcfw.mongodb.net/login").then(() => {
    console.log("database connect successful");
}).catch((error) => {
    console.log(error, "database connection error");

})


// http server 
http.createServer(app).listen(3001, () => {
    console.log("server stated successfully");
})