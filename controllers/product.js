const Product = require('../models/productModels');

const getProduct = async(req, res) => {
    try {
        const response = await Product.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

const getProductById = async(req, res) => {
    try {
        const response = await Product.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

const createProduct = async(req, res) => {
    const { product_name, description, category, sku, stock_quantity, regular_price, sale_price } = req.body;
    try {
        await Product.create({
            product_name: product_name,
            description: description,
            category: category,
            sku: sku,
            stock_quantity: stock_quantity,
            regular_price: regular_price,
            sale_price: sale_price
        });
        res.status(200).json({message: "Product created"});
    } catch (error) {
        console.log(error.message);
    }
}

const updateProduct = async(req, res) => {
    const { product_name, description, category, sku, stock_quantity, regular_price, sale_price } = req.body;
    try {
        await Product.update({
            product_name: product_name,
            description: description,
            category: category,
            sku: sku,
            stock_quantity: stock_quantity,
            regular_price: regular_price,
            sale_price: sale_price
        }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ message: "Product updated" });
    } catch (error) {
        console.log(error.message);
    }
}

const deleteProduct = async(req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Product deleted" });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { getProduct, getProductById, createProduct, updateProduct, deleteProduct };