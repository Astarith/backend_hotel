
const router = require("express").Router();
const { createUser, loginUser, } = require("../controllers/user");
const { createTransaksi } = require("../controllers/transaksi");
const { createHarga, updateHarga, deleteHarga, getAllHarga } = require("../controllers/createHarga");
const { getRiwayatTransaksi } = require("../controllers/transaksi");

router.post('/create', createUser);
router.post('/login', loginUser);
router.post('/transaksi', createTransaksi);
router.post('/createHarga', createHarga);
router.put('/updateHarga/:id', updateHarga);
router.delete('/deleteHarga/:id', deleteHarga);
router.get('/getAllHarga', getAllHarga);
router.get('/riwayat-transaksi', getRiwayatTransaksi);


module.exports = router;