const TodoController = require("./controllers/todoController");
const TodoService = require("./services/todoService");
const TodoRepo = require("./repositories/todoRepo");

module.exports = (container) => {
  // Registracija servisa i repository-ja u kontejner
  container.register("TodoRepo", new TodoRepo());
  container.register("TodoService", new TodoService(container.get("TodoRepo")));
  container.register(
    "TodoController",
    new TodoController(container.get("TodoService"))
  );
};
