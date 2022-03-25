const express = require("express")
const router = express.Router();

const CategoryService = require("../service/category.service");
const {getCategoryList, createCategory, updateCategory, deleteCategory, getCategory} = require("../controller/category.controller");
const categoryService = new CategoryService();


router.get('/', (req, res, next) => getCategoryList(req, res, next, categoryService))
router.post('/', (req, res, next) => createCategory(req, res, next, categoryService))
router.put('/', (req, res, next) => updateCategory(req, res, next, categoryService))
router.delete('/', (req, res, next) => deleteCategory(req, res, next, categoryService))

router.get('/:id', (req, res, next) => getCategory(req, res, next, categoryService))

module.exports = router;
