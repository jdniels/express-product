const express = require("express")
const router = express.Router();

const ProductService = require("../service/product.service");
const { getProductList, createProduct, getProduct, updateProduct, deleteProduct } = require("../controller/product.controller");
const productService = new ProductService();


router.get('/', (req, res, next) => getProductList(req, res, next, productService))
router.post('/', (req, res, next) => createProduct(req, res, next, productService))
router.put('/', (req, res, next) => updateProduct(req, res, next, productService))
router.delete('/', (req, res, next) => deleteProduct(req, res, next, productService))

router.get('/:id', (req, res, next) => getProduct(req, res, next, productService))

module.exports = router;
