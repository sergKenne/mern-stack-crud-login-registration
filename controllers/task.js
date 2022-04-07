const Task = require("../models/task")

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({
            msg:error.message
        });
    } 
 };

const getSingleTask = async (req, res) => {
    const id = req.params.id
    try {
        const task = await Task.findOne({ _id: id })
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
};

const createTask = (req, res) => {
    const { name, description } = req.body;
    if (name === "" || description === "") {
        return res.status(402).json({
            msg: "field name or description can not be empty"
        })
    }
    const newTask = new Task({
        name,
        description
    })
    newTask.save().then(result => {
        res.status(200).json({
            task: result,
            msg: "task created successful"
        })
    }).catch(err => {
        res.status(400).json({
            msg: err.message
        })
    })
 };

const updateTask = async (req, res) => { 
    const { name, description } = req.body;
    if (name === '' || description === '') {
        return res.status(402).json({
            msg: 'filed name or description can not be empty',
        });
    }
    try {
        const updateTask = await Task.findByIdAndUpdate(req.params.id, {name, description})
        res.status(200).json({
            msg: "task updated successfully...",
            task: updateTask
        })
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
};

const deleteTask = async (req, res) => {
    try {
        const deleteTask = await Task.findByIdAndDelete(req.params.id)
        res.status(200).json({
            msg: "task deleted successfully...",
            task: deleteTask
        })
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
 };

module.exports = {
    getTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
};