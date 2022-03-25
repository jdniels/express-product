const Sequelize = require("sequelize");
const connection = require("../db.connection")

const Product = connection.define("category", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
}, {
  freezeTableName: true,
  tableName: "category",
  paranoid: false,
});

module.exports = Product;
