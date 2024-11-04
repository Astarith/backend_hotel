const router = require("express").Router();
const { getProdukById, createProduk, updateProduk, deleteProduk } = require("../../controllers/produk/produk");
const upload = require('../../middelware/multerConfig');
const protect = require('../../middelware/auth')

// Rute produk
router.get('/getProduk/:id', getProdukById);
router.post('/createProduk', protect(['kasir']), upload.single('image'), createProduk);
router.patch('/updateProduk/:id', upload.single('image'), updateProduk);
router.delete('/deleteProduk/:id', deleteProduk);

module.exports = router;
