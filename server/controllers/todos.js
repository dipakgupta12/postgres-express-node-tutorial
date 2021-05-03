const Todo = require("../models").Todo;
const TodoItem = require("../models").TodoItem;

exports.create = (req, res) => {
  Todo.create({
    title: req.body.title,
  })
    .then((todo) => res.status(201).send(todo))
    .catch((error) => res.status(400).send(error));
};

exports.list = (req, res) => {
  Todo.findAll({
    include: [
      {
        model: TodoItem,
        as: "todoItems",
      },
    ],
    order: [
      ["createdAt", "DESC"],
      [{ model: TodoItem, as: "todoItems" }, "createdAt", "ASC"],
    ],
  })
    .then((todos) => res.status(200).send(todos))
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
};

exports.retrieve = (req, res) => {
  Todo.findById(req.params.todoId, {
    include: [
      {
        model: TodoItem,
        as: "todoItems",
      },
    ],
  })
    .then((todo) => {
      if (!todo) {
        res.status(404).send({
          message: "Todo Not Found",
        });
      }
      res.status(200).send(todo);
    })
    .catch((error) => res.status(400).send(error));
};

exports.update = (req, res) => {
  Todo.findById(req.params.todoId, {
    include: [
      {
        model: TodoItem,
        as: "todoItems",
      },
    ],
  })
    .then((todo) => {
      if (!todo) {
        res.status(404).send({
          message: "Todo Not Found",
        });
      }
      todo
        .update({
          title: req.body.title || todo.title,
        })
        .then(() => res.status(200).send(todo))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};

exports.destroy = (req, res) => {
  return Todo.findById(req.params.todoId)
    .then((todo) => {
      if (!todo) {
        return res.status(400).send({
          message: "Todo Not Found",
        });
      }
      return todo
        .destroy()
        .then(() => res.status(204).send())
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};
