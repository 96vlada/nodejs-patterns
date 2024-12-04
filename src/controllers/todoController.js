const TodoServiceFactory = require("../factories/todoServiceFactory");

class TodoController {
  constructor() {
    this.todoService = TodoServiceFactory.create();
  }

  getAllTodos = async (req, res) => {
    try {
      const todos = await this.todoService.getAllTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch todos" });
    }
  };
  getTodoById = (req, res) => {
    try {
      const todo = this.todoService.getTodoById(req.params.id);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch todo" });
    }
  };
  createTodo = (req, res) => {
    try {
      const todo = this.todoService.createTodo(req.body);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: "Failed to create todo" });
    }
  };
  updateTodo = (req, res) => {
    try {
      const todo = this.todoService.updateTodo(req.params.id, req.body);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: "Failed to update todo" });
    }
  };
  deleteTodo = (req, res) => {
    try {
      const todo = this.todoService.deleteTodo(req.params.id);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: "Failed to delete todo" });
    }
  };
}

module.exports = new TodoController();
