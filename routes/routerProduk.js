const router = require("express").Router();
const { getProduk, getProdukById, createProduk, updateProduk, deleteProduk } = require("../controllers/produk");
const upload = require('../config/multerConfig');

// Rute produk
router.get('/get', getProduk);
router.get('/get/:id', getProdukById);
router.post('/createProduct', upload.single('image'), createProduk);
router.patch('/updateProduct/:id', upload.single('image'), updateProduk);
router.delete('/deleteProduct/:id', deleteProduk);

module.exports = router;
