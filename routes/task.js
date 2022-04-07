const express = require('express');
const router = express.Router();
const { getTasks ,  getSingleTask, createTask, updateTask, deleteTask} = require("../controllers/task")

router.get("/", getTasks);

router.get("/:id", getSingleTask);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete('/:id', deleteTask);


module.exports = router