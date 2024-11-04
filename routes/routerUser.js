const router = require("express").Router();
const { createUser, loginUser, } = require("../controllers/user");
const { createReservasi, getReservasi } = require("../controllers/reservasi");

router.post('/create', createUser);
router.post('/login', loginUser);
router.post('/register', createUser);
router.post('/reservasi', createReservasi);
router.get('/riwayat', getReservasi);

module.exports = router;