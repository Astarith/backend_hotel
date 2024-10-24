const router = require("express").Router();
const { createUser, loginUser, } = require("../controllers/user");
const { createReservasi } = require("../controllers/reservasi");

router.post('/user', createUser);
router.post('/login', loginUser);
router.post('/register', createUser);
router.post('/reservasi', createReservasi);

module.exports = router;