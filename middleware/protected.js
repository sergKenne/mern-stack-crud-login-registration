require('dotenv').config();
const jwt = require('jsonwebtoken');

const protected = (req, res, next) => {
    const token = req.header('x-auth-token');
    console.log(token)
    if (!token) {
        return res.status(400).send('No authorized ....');
    }
    console.log('token:', token);
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
        if (err) {
            return res.status(400).json({ msg: 'no authenticate token' });
        }
        req.user = decoded;
        next();
    });
};

module.exports = protected;
