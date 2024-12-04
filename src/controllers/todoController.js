const todoService = require("../services/todoService");

class TodoController {
  getAllTodos = async (req, res) => {
    try {
      const todos = await todoService.getAllTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch todos" });
    }
  };
  getTodoById = async (req, res) => {
    try {
      const todo = await todoService.getTodoById(req.params.id);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch todo" });
    }
  };
  createTodo = async (req, res) => {
    try {
      const todo = await todoService.createTodo(req.body);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: "Failed to create todo" });
    }
  };
  updateTodo = async (req, res) => {
    try {
      const todo = await todoService.updateTodo(req.params.id, req.body);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: "Failed to update todo" });
    }
  };
  deleteTodo = async (req, res) => {
    try {
      const todo = await todoService.deleteTodo(req.params.id);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: "Failed to delete todo" });
    }
  };
}

module.exports = new TodoController();
