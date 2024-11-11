const router = require("express").Router();

const Auth = require("../midleware/midleware");
const { createReservasi, checkin, checkout, riwayatTransaksi } = require("../controllers/reservasi");
const { getRoom, createRoom, updateRoom, deleteRoom } = require("../controllers/room");
const { createHistoryFnB, getHistoryFnB} = require("../controllers/fnb");
const upload = require('../config/multer');

const { createUser, Login, } = require("../controllers/user");




router.post('/reservasi', Auth(['user']), createReservasi);
router.post('/Masuk', checkin);
router.put('/chekout/:id', checkout);
router.get('/riwayatRoom', riwayatTransaksi );
// riwayat fnb
router.post('/createfnb', createHistoryFnB);
router.get('/fnb', getHistoryFnB);



// user
//router.post('/user', createUser);
router.post('/login', Login);
router.post('/register', createUser);

// router room
router.get('/get', Auth(['admin']), getRoom);
router.post('/rooms', Auth(['admin']), upload.single('image'), createRoom);
router.put('/rooms/:id', Auth(['admin']), upload.single('image'), updateRoom);
router.delete('/hapus/:id', Auth(['admin']), deleteRoom);




module.exports = router;