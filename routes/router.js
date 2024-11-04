const router = require("express").Router();
const { createCheckin, deleteCheckin, updateCheckin, getCheckin, } = require("../controllers/checkin");
const { createCheckout, deleteCheckout, updateCheckout, getCheckout,} = require("../controllers/checkout");
const { createRiwayat, deleteRiwayat, updateRiwayat, getRiwayat, } = require("../controllers/riwayat");
const { createUser, loginUser, } = require("../controllers/user");
const protect = require("../middleware/authentikasi");
const { createReservasi, getReservasi } = require("../controllers/reservasi");

router.post('/user', createUser);
router.post('/login', loginUser);
router.post('/checkout', createCheckout);
router.delete('/checkout/:id', deleteCheckout);
router.patch('/checkout/:id', protect(['admin']), updateCheckout);
router.get('/checkout', getCheckout);
router.post('/checkin', createCheckin);
router.delete('/checkin/:id', deleteCheckin);
router.patch('/checkin/:id', updateCheckin);
router.get('/checkin', getCheckin);
router.post('/riwayat', createRiwayat);
router.delete('/riwayat/:id', deleteRiwayat);
router.patch('/riwayat/:id', updateRiwayat);
router.get('/riwayat', getRiwayat);
router.post('/register', createUser);
router.post('/reservasi', createReservasi);
router.get('/riwayat', getReservasi);

module.exports = router;