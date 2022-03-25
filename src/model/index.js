const Product = require("../model/product.model");
const Category = require("../model/category.model");

const dbAssociation = () => {
  Category.hasMany(Product);
  Product.belongsTo(Category);
}

module.exports = dbAssociation;
