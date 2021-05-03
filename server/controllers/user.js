const UserModel = require("../models").User;

exports.create = (req, res) => {
  UserModel.create({
    name: req.body.name,
    email: req.body.email,
  })

    .then((todo) => res.status(201).send(todo))
    .catch((error) => res.status(400).send(error));
};

exports.user_list = (req, res) => {
  UserModel.findAll()

    .then((todo) => res.status(201).send(todo))
    .catch((error) => res.status(400).send(error));
};
