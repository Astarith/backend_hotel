const router = require("express").Router();
const { createUser, loginUser, } = require("../controllers/user");
const { getProduk, getProdukById, createProduk, updateProduk, deleteProduk } = require("../controllers/produk");

router.post('/create', createUser);
router.post('/login', loginUser);
router.get('/get', getProduk);
router.get('/get/:id', getProdukById);
router.post('/createProduct', createProduk);
router.patch('/updateProduct/:id', updateProduk);
router.delete('/deleteProduct/:id', deleteProduk)

module.exports = router;