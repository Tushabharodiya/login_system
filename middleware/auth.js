let jwt = require("jsonwebtoken")

let verifyToken = (req, res,next) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            return res.status(403).json({
                message: "token is Balnk"
            });
        }
        let doneToken = token.split(' ')[1];
        jwt.verify(doneToken, "hello_wod", (err, decoded) => {
            if (err) {
                return res.status(403).json({
                    message: "token is not valid"
                })
            }
            req.user = decoded;
            console.log(req.user);
            next()
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = { verifyToken }