const Produk = require('../models/produkModels');

const getProduk = async(req, res) => {
    try {
        const response = await Produk.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

const getProdukById = async(req, res) => {
    try {
        const response = await Produk.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

const createProduk = async(req, res) => {
    const { product_name, description, category, sku, stock_quantity, regular_price, sale_price } = req.body;
    try {
        await Produk.create({
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

const updateProduk = async(req, res) => {
    const { product_name, description, category, sku, stock_quantity, regular_price, sale_price } = req.body;
    try {
        await Produk.update({
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

const deleteProduk = async(req, res) => {
    try {
        await Produk.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Product deleted" });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { getProduk, getProdukById, createProduk, updateProduk, deleteProduk };