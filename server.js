require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());


const userRouter = require("./routes/user");

const taskRouter = require("./routes/task");


const dbConnect = require('./db');
dbConnect();


app.use("/api/user", userRouter);

app.use('/api/task', taskRouter);

if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`server run in port ${PORT}`);
})