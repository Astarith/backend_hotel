
const router = require("express").Router();
const { createUser, loginUser, } = require("../controllers/user");
const { createTransaksi, deleteTransaksi } = require("../controllers/transaksi");
const { createHarga, updateHarga, deleteHarga, getAllHarga } = require("../controllers/createHarga");
const { getRiwayatTransaksi } = require("../controllers/transaksi");
const protect = require("../middleware/autentikasi");

router.post('/create', createUser);
router.post('/login', loginUser);
router.post('/transaksi', protect([ 'admin']), createTransaksi);
router.delete('/transaksi/:id', deleteTransaksi);
router.post('/createHarga', createHarga);
router.put('/updateHarga/:id', updateHarga);
router.delete('/deleteHarga/:id', deleteHarga);
router.get('/getAllHarga', getAllHarga);
router.get('/riwayat-transaksi', getRiwayatTransaksi);


module.exports = router;