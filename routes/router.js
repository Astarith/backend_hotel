const router = require("express").Router();
const Auth = require("../midleware/midleware");
const { createUser, Login, } = require("../controllers/user");
const { createReservasi, getReservasi } = require("../controllers/reservasi");
const { getRoom, createRoom, updateRoom, deleteRoom } = require("../controllers/room");
const upload = require('../config/multer');


// user
router.post('/user', createUser);
router.post('/login', Login);
router.post('/register', createUser);

//reservasi
router.post('/reservasi', createReservasi);
router.get('/riwayat', getReservasi);

// router room
router.get('/get', Auth(['admin']), getRoom);
router.post('/rooms', Auth(['admin']), upload.single('image'), createRoom);
router.put('/rooms/:id', Auth(['admin']), upload.single('image'), updateRoom);
router.delete('/hapus/:id', Auth(['admin']), deleteRoom);

module.exports = router;