module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    /*we can relate user with organizaton*/

    //   organization_id: {
    //     type: sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: OrganizationModel,
    //       key: "id",
    //     },
    //   },
  });

  return User;
};
