const router = require("express").Router();
const { createUser, loginUser, } = require("../controllers/user");

router.post('/user', createUser);
router.post('/login', loginUser);
router.post('/register', createUser);

module.exports = router;