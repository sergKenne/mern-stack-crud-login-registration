
const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// userSchema.methods.generateToken = () => {
//     const token = jwt.sign({
//         id: this._id,
//         email: this.email,
//         username: this.username
//     },process.env.SECRET_KEY);
           
//     return token;
// }

const User = mongoose.model("User", userSchema);

module.exports = User