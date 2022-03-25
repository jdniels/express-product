const ProductDto = require('../dtos/product.dto')

const getProductList = async (req, res, next, service) => {
    try {
        const products = await service.products();
        res.json(products);
    } catch (e) {
        next(e)
    }
};

const createProduct = async (req, res, next, service) => {
    try {
        const newProduct = await service.createProduct(req.body);
        const productDto = ProductDto(newProduct);

        res.json(new ProductDto(newProduct));
    } catch (e) {
        next(e)
    }
};

const getProduct = async (req, res, next, service) => {
    try {
        const products = await service.getOne(req.params.id);
        res.json(products);
    } catch (e) {
        next(e)
    }
};

const updateProduct = async (req, res, next, service) => {
    try {
        const newProduct = await service.update(req.body)
        res.json(newProduct);
    } catch (e) {
        next(e)
    }
};

const deleteProduct = async (req, res, next, service) => {
    try {
        const newProduct = await service.deleteProduct(req.body)
        res.json(newProduct);
    } catch (e) {
        next(e)
    }
};
    //
    // const updateProduct = async (req, res, next) => {
    //     try {
    //         const product = req.body;
    //         const updatedProduct = await req.service.updateProductInfo(product);
    //         res.json(updatedProduct);
    //     } catch (e) {
    //         next(e)
    //     }
    // };
    //
    // const deleteProduct = async (req, res, next) => {
    //     try {
    //         const productId = req.query.id;
    //         const id = await req.service.deactivatedProduct(productId)
    //         res.json({id: id});
    //     } catch (e) {
    //         next(e)
    //     }
    // };


module.exports = {
    getProductList, createProduct, getProduct, updateProduct, deleteProduct
};
