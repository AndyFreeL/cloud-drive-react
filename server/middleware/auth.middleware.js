const config = require("config")
const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        console.log(req.headers)
        const token = req.headers.authorization.split(' ')[1]
        console.log('mwt',token)
        if (!token) {
            return res.status(401).json({message: 'Auth error'})
        }
        const decoded = jwt.verify(token, config.get('secretKey'))
        req.user = decoded
        next()
    } catch (e) {
        return res.status(401).json({message: 'Auth error e'})
    }
}
