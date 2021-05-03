const UserModel = require("../models").User;

exports.create = (req, res) => {
  UserModel.create({
    name: req.body.name,
    email: req.body.email,
  })

    .then((user) => res.status(201).send(user))
    .catch((error) => res.status(400).send(error));
};

exports.user_list = (req, res) => {
  UserModel.findAll()

    .then((users) => res.status(201).send(users))
    .catch((error) => res.status(400).send(error));
};
