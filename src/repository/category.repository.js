const Category = require("../model/category.model")
const {DataNotFound} = require("../utils/apperror");
const Product = require("../model/product.model")


class CategoryRepository {
    async getAll() {
        return await Category.findAll({ include: Product});
    }

    async createCategory(category) {
        try {
            return await Category.create(category);
        } catch (e) {
            console.log(e)
        }
    }

    async getOne(id) {
        const category = await Category.findByPk(id);

        if (!category) {
            throw new DataNotFound("Product Not Found");
        }

        return category;
    }

    async updateCategory(category) {
        return Category
          .findOne(category)
          .then(category => {
              if (!category) {
                  throw new DataNotFound("Product Not Found");
              }
              return category
                .update({
                    name: category.name,
                })
                .then(() => console.log('sss'))
                .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
    }

    async deleteCategory(category) {
        return Category.findOne(category).then(category => {
            if (!category) {
                throw new DataNotFound("Product Not Found");
            }
            return category.destroy().finally()
        })
    }
}

module.exports = CategoryRepository;
