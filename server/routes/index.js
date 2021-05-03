//NPM module
const router = require("express").Router();

// files
const todosController = require("../controllers").todos;
const todoItemsController = require("../controllers").todoItems;

router.get("/api", (req, res) =>
  res.status(200).send({
    message: "Welcome to the Todos API!",
  })
);

router.post("/api/todos", todosController.create);
router.get("/api/todos", todosController.list);
router.get("/api/todos/:todoId", todosController.retrieve);
router.put("/api/todos/:todoId", todosController.update);
router.delete("/api/todos/:todoId", todosController.destroy);

router.post("/api/todos/:todoId/items", todoItemsController.create);
router.put("/api/todos/:todoId/items/:todoItemId", todoItemsController.update);
router.delete(
  "/api/todos/:todoId/items/:todoItemId",
  todoItemsController.destroy
);
router.all("/api/todos/:todoId/items", (req, res) =>
  res.status(405).send({
    message: "Method Not Allowed",
  })
);

module.exports = router;
