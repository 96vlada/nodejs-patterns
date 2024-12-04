const TodoRepo = require("../repositories/todoRepo");

class TodoService {
  constructor() {
    if (TodoService.instance) {
      return TodoService.instance;
    }
    this.todoRepo = TodoRepo;
    TodoService.instance = this;
  }

  async getAllTodos() {
    return await this.todoRepo.getAllTodos();
  }

  async getTodoById(id) {
    return await this.todoRepo.getTodoById(id);
  }

  async createTodo(todo) {
    return await this.todoRepo.createTodo(todo);
  }

  async updateTodo(id, todo) {
    return await this.todoRepo.updateTodo(id, todo);
  }

  async deleteTodo(id) {
    return await this.todoRepo.deleteTodo(id);
  }
}

module.exports = new TodoService();
