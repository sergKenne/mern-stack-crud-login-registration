const express = require('express');
const router = express.Router();
const { getTasks ,  getSingleTask, createTask, updateTask, deleteTask} = require("../controllers/task")
const protected = require("../middleware/protected")
router.get("/", getTasks);

router.get("/:id", getSingleTask);

router.post("/", protected ,createTask);

router.put("/:id", updateTask);

router.delete('/:id', deleteTask);


module.exports = router