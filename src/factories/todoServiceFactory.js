const TodoRepo = require("../repositories/todoRepo");
const TodoService = require("../services/todoService");

class TodoServiceFactory {
  static create() {
    const todoRepo = new TodoRepo();
    return new TodoService(todoRepo);
  }
}

module.exports = TodoServiceFactory;
