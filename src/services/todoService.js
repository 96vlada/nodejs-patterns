class TodoService {
  constructor(todoRepo) {
    this.todoRepo = todoRepo;
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

module.exports = TodoService;
