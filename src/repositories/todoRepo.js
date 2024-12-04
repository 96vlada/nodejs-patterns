const todoModel = require("../models/todoModel");

class TodoRepo {
  async getAllTodos() {
    const todos = await todoModel.find();
    return todos;
  }
  async getTodoById(id) {
    const todo = await todoModel.findById(id);
    return todo;
  }
  async createTodo(todo) {
    const newTodo = await todoModel.create(todo);
    return newTodo;
  }
  async updateTodo(id, todo) {
    const updatedTodo = await todoModel.findByIdAndUpdate(id, todo, {
      new: true,
    });
    return updatedTodo;
  }
  async deleteTodo(id) {
    const deletedTodo = await todoModel.findByIdAndDelete(id);
    return deletedTodo;
  }
}

module.exports = TodoRepo;
