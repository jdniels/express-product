const ProductRepository = require("../repository/product.repository")
const productRepository = new ProductRepository();

class ProductService {
    async products() {
        try {
          return await productRepository.getAll();
        } catch (e) {

        }
    }

    async createProduct(product) {
        try {
            return productRepository.createProduct(product);
        } catch (e) {
            console.log(e)
        }
    }

    async getOne(id) {
        try {
            return productRepository.getOne(id);
        } catch (e) {
            console.log(e)
        }
    }

    async update(product) {
        try {
            return productRepository.updateProduct(product);
        } catch (e) {
            console.log(e)
        }
    }

    async deleteProduct(product) {
        try {
            return productRepository.deleteProduct(product);
        } catch (e) {
            console.log(e)
        }
    }

}


module.exports = ProductService;
