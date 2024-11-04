const router = require("express").Router();

const Auth = require("../midleware/midleware");
const { createReservasi, getReservasi } = require("../controllers/reservasi");
const { getRoom, createRoom, updateRoom, deleteRoom } = require("../controllers/room");
const upload = require('../config/multer');

const { createCheckin, deleteCheckin, updateCheckin, getCheckin, } = require("../controllers/checkin");
const { createCheckout, deleteCheckout, updateCheckout, getCheckout,} = require("../controllers/checkout");
const { createRiwayat, deleteRiwayat, updateRiwayat, getRiwayat, } = require("../controllers/riwayat");
const { createUser, Login, } = require("../controllers/user");
const protect = require("../middleware/authentikasi");



// user
//router.post('/user', createUser);
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

// router checkin wildan
router.post('/checkout', createCheckout);
router.delete('/checkout/:id', deleteCheckout);
router.patch('/checkout/:id', updateCheckout);
router.get('/checkout', getCheckout);
router.post('/checkin', createCheckin);
router.delete('/checkin/:id', deleteCheckin);
router.patch('/checkin/:id', updateCheckin);
router.get('/checkin', getCheckin);
router.post('/riwayat', createRiwayat);
router.delete('/riwayat/:id', deleteRiwayat);
router.patch('/riwayat/:id', updateRiwayat);
router.get('/riwayat', getRiwayat);


module.exports = router;