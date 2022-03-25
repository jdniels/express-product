const CategoryRepository = require("../repository/category.repository")
const categoryRepository = new CategoryRepository();

class CategoryService {
    async categories() {
        try {
          return await categoryRepository.getAll();
        } catch (e) {

        }
    }

    async createCategory(category) {
        try {
            return categoryRepository.createCategory(category);
        } catch (e) {
            console.log(e)
        }
    }

    async getOne(id) {
        try {
            return categoryRepository.getOne(id);
        } catch (e) {
            console.log(e)
        }
    }

    async update(category) {
        try {
            return categoryRepository.updateCategory(category);
        } catch (e) {
            console.log(e)
        }
    }

    async deleteProduct(category) {
        try {
            return categoryRepository.deleteCategory(category);
        } catch (e) {
            console.log(e)
        }
    }

}


module.exports = CategoryService;
