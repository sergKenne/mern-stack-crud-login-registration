require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const userRouter = require("./routes/user");

const taskRouter = require("./routes/task");


const dbConnect = require('./db');
dbConnect();


app.use("/api/user", userRouter);

app.use('/api/task', taskRouter);


const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`server run in port ${PORT}`);
})