module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define("Organization", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Organization;
};
