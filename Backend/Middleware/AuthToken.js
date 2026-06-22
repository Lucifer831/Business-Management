const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtauth = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            error: "Token missing"
        });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            error: "Invalid Token Format"
        });
    }

    try {

        const decoded = jwt.verify(
            token,
            process.env.SECRET_KEY
        );

        req.user = decoded;

        next();

    } catch (err) {

        console.log(err);

        return res.status(401).json({
            error: 'Invalid Token'
        });
    }
}

module.exports = jwtauth;