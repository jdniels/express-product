const Product = require("../model/product.model")
const {DataNotFound} = require("../utils/apperror");
const Category = require("../model/category.model")


class ProductRepository {
    async getAll() {
        return await Product.findAll({ include: Category});
    }

    async createProduct(product) {
        try {
            return await Product.create(product);
        } catch (e) {
            console.log(e)
        }
    }

    async getOne(id) {
        const product = await Product.findByPk(id);

        if (!product) {
            throw new DataNotFound("Product Not Found");
        }

        return product;
    }

    async updateProduct(product) {
        return Product
          .findOne(product)
          .then(product => {
              if (!product) {
                  throw new DataNotFound("Product Not Found");
              }
              return product
                .update({
                    name: product.name,
                })
                .then(() => console.log('sss'))
                .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
    }

    async deleteProduct(product) {
        return Product.findOne(product).then(product => {
            if (!product) {
                throw new DataNotFound("Product Not Found");
            }
            return product.destroy().finally()
        })
    }
}

module.exports = ProductRepository;
