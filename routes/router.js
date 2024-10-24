const router = require("express").Router();
const { createCheckin, deleteCheckin, updateCheckin, } = require("../controllers/checkin");
const { createUser, loginUser, } = require("../controllers/user");

router.post('/user', createUser);
router.post('/login', loginUser);
router.post('/bikin', createCheckin);
router.delete('/hapus/:id', deleteCheckin);
router.patch('/update/:id', updateCheckin);

module.exports = router;