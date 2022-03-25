const Sequelize = require("sequelize");
const connection = require("../db.connection")

const Product = connection.define("product", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    tableName: "product",
    paranoid: false,
});

module.exports = Product;
