const User = require("../models/user")
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator/check');
const jwt = require("jsonwebtoken")


const userRegister = async (req, res) => {
    const errors = validationResult(req);
    console.log("error:", errors.array());
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array()[0].msg);
    } 

    const { email, username, password, confirmPass } = req.body
    try {
        const user = await User.findOne({ email })
        if (user) {
           return res.status(404).json({
               success: false,
               msg: "user with given email already exist"
            })
        }

        if (password == confirmPass) {
            bcrypt.hash( password, 10, function (err, hash) {
                if (err) {
                    return res.status(400).json({ msg: err.message })
                } 
                User.create({ email, username, password: hash }, (err, doc) => {
                    if (err) {
                       res.json(err)

                    } 
                    res.status(200).json({
                        success: true,
                        msg: "user added successful",
                        user: doc
                    })
                })
            });
        } else {
            return res.status(406).json({msg: "your password and confirmPassword not match..."})
        }

    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
    
    
}

const userLogin = async (req, res) => {
    const errors = validationResult(req);
    console.log('error:', errors.array());
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array()[0].msg);
    }
    const {email, password} = req.body
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(404).json({msg: "invalid email or password"})
    }
    bcrypt.compare(password, user.password).then(function (result) {
        if (!result) {
            returnres.status(401).json({msg: "ivalid email or password"})
        }

        //const token = user.generateToken(); 
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                username: user.username,
            },
            process.env.SECRET_KEY,
        );
        res.status(200).json({
            user,
            token
        });
    });
};


module.exports = {
    userRegister,
    userLogin,
};