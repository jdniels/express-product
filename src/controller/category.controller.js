
const getCategoryList = async (req, res, next, service) => {
    try {
        const products = await service.categories();
        res.json(products);
    } catch (e) {
        next(e)
    }
};

const createCategory = async (req, res, next, service) => {
    try {
        const category = await service.createCategory(req.body);

        res.json(category);
    } catch (e) {
        next(e)
    }
};

const getCategory = async (req, res, next, service) => {
    try {
        const category = await service.getOne(req.params.id);
        res.json(category);
    } catch (e) {
        next(e)
    }
};

const updateCategory = async (req, res, next, service) => {
    try {
        const category = await service.update(req.body)
        res.json(category);
    } catch (e) {
        next(e)
    }
};

const deleteCategory = async (req, res, next, service) => {
    try {
        const category = await service.deleteCategory(req.body)
        res.json(category);
    } catch (e) {
        next(e)
    }
};


module.exports = {
    getCategoryList, createCategory, getCategory, updateCategory, deleteCategory
};
