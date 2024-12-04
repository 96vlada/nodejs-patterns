class TodoController {
  constructor(todoService) {
    this.todoService = todoService;
  }

  getAllTodos = async (req, res) => {
    try {
      const todos = await this.todoService.getAllTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch todos" });
    }
  };
  getTodoById = async (req, res) => {
    try {
      const todo = await this.todoService.getTodoById(req.params.id);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch todo" });
    }
  };
  createTodo = async (req, res) => {
    try {
      const todo = await this.todoService.createTodo(req.body);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: "Failed to create todo" });
    }
  };
  updateTodo = async (req, res) => {
    try {
      const todo = await this.todoService.updateTodo(req.params.id, req.body);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: "Failed to update todo" });
    }
  };
  deleteTodo = async (req, res) => {
    try {
      const todo = await this.todoService.deleteTodo(req.params.id);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: "Failed to delete todo" });
    }
  };
}

module.exports = TodoController;
