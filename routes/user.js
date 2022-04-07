const express = require("express")
const { check } = require('express-validator/check');

const { userRegister, userLogin } = require("../controllers/user")
const protected = require("../middleware/protected")

const router = express.Router()

router.post(
    '/register',
    [
        check('username').not().isEmpty() .isLength({ min: 5 }).withMessage('userName must have more than 5 characters'),   
        check('email', 'Your email is not valid').not().isEmpty().isEmail().normalizeEmail(),
        check('password', 'Your password must be at least 5 characters').not().isEmpty().isLength({ min: 5 }),     
    ],
    userRegister,
);

router.post('/login', [
    check('email', 'Your email is not valid').not().isEmpty().isEmail().normalizeEmail(),
    check('password', 'Your password must be at least 5 characters').not().isEmpty().isLength({ min: 5 }),        
], userLogin);




router.get("/", protected ,(req, res) => {
    res.send(req.user)
})

module.exports = router