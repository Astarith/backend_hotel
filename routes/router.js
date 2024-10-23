const router = require("express").Router();
const { getUser, createUser, loginUser } = require("../controllers/user");

router.get('/user', getUser);
router.post('/user', createUser);
router.post('/login', loginUser);

module.exports = router;