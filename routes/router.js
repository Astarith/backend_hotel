const router = require("express").Router();
const { createUser, loginUser, } = require("../controllers/user");
const { getProduct, getProductById, createProduct, updateProduct, deleteProduct } = require("../controllers/product");

router.post('/create', createUser);
router.post('/login', loginUser);
router.get('/get', getProduct);
router.get('/get/:id', getProductById);
router.post('/createProduct', createProduct);
router.patch('/updateProduct/:id', updateProduct);
router.delete('/deleteProduct/:id', deleteProduct)

module.exports = router;