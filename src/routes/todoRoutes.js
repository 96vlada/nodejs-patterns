const express = require("express");
const router = express.Router();
const container = require("../container");

const todoController = container.get("TodoController");

router.get("/", todoController.getAllTodos);

router.get("/:id", todoController.getTodoById);

router.post("/", todoController.createTodo);

router.put("/:id", todoController.updateTodo);

router.delete("/:id", todoController.deleteTodo);

module.exports = router;
