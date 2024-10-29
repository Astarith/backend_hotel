const router = require("express").Router();
const { getProduk, getProdukById, createProduk, updateProduk, deleteProduk } = require("../controllers/produk");


router.get('/get', getProduk);
router.get('/get/:id', getProdukById);
router.post('/createProduct', createProduk);
router.patch('/updateProduct/:id', updateProduk);
router.delete('/deleteProduct/:id', deleteProduk);

module.exports = router;