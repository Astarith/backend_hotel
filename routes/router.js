
const router = require("express").Router();
const { createUser, loginUser, } = require("../controllers/user");
const { createTransaksi, getTransaksi } = require("../controllers/transaksi");

router.post('/create', createUser);
router.post('/login', loginUser);
router.post('/transaksi', createTransaksi);
router.get('/transaksi', getTransaksi);

module.exports = router;