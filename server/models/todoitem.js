module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define("TodoItem", {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete_status: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["pending", "done", "inprogress"],
      defaultValue: "pending",
    },
  });
  TodoItem.associate = (models) => {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: "todoId",
      onDelete: "CASCADE",
    });
  };
  return TodoItem;
};
