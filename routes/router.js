const router = require("express").Router();
const { createUser, loginUser } = require("../controllers/user");
const { createTransaksi, getRiwayatTransaksi, updateStatusTransaksi } = require("../controllers/transaksi");
const { createHarga, updateHarga, deleteHarga, getAllHarga } = require("../controllers/createHarga");
const protect = require("../middleware/autenticasi");

router.post('/create',protect(['admin']), createUser);
router.post('/login', loginUser);
router.post('/transaksi', createTransaksi);
router.get('/riwayat-transaksi', getRiwayatTransaksi);
router.put('/transaksi/updateStatus/:id', updateStatusTransaksi); 
router.post('/harga', createHarga);
router.put('/harga/update/:id', updateHarga);
router.delete('/harga/delete/:id', deleteHarga);
router.get('/harga/all', getAllHarga);

module.exports = router;