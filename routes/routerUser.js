const router = require("express").Router();
const { createUser, loginUser, } = require("../controllers/user");

router.post('/create', createUser);
router.post('/login', loginUser);

module.exports = router;