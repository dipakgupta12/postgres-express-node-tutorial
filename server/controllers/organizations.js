const OrganizationModel = require("../models").Organization;

exports.create = (req, res) => {
  OrganizationModel.create({
    name: req.body.name,
    email: req.body.email,
  })

    .then((organizationModel) => res.status(201).send(organizationModel))
    .catch((error) => res.status(400).send(error));
};

exports.org_list = (req, res) => {
  OrganizationModel.findAll()

    .then((organizationModels) => res.status(201).send(organizationModels))
    .catch((error) => res.status(400).send(error));
};
