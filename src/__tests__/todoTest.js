const request = require("supertest");
const app = require("../app");

describe("Todo API", () => {
  let todoId;
  it("should create a new todo", async () => {
    const res = await request(app).post("/api/v1/todos").send({
      title: "Buy milk",
      completed: false,
    });

    todoId = res.body._id;
    expect(res.body.title).toEqual("Buy milk");
    expect(res.body.completed).toEqual(false);
  });

  it("should get all todos", async () => {
    const res = await request(app).get("/api/v1/todos");
    expect(res.statusCode).toEqual(200);
  });

  it("should get one todo by id", async () => {
    const res = await request(app).get("/api/v1/todos/" + todoId);
    expect(res.statusCode).toEqual(200);
  });

  it("should update a todo", async () => {
    const res = await request(app)
      .put("/api/v1/todos/" + todoId)
      .send({
        title: "Buy eggs",
        completed: true,
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual("Buy eggs");
    expect(res.body.completed).toEqual(true);
  });

  it("should delete a todo", async () => {
    const res = await request(app).delete("/api/v1/todos/" + todoId);
    expect(res.statusCode).toEqual(200);
  });
});
