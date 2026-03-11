const { Signup, Login, VerifyUser, Logout } = require("../controllers/AuthController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/verify", VerifyUser);
router.post("/logout", Logout);

module.exports = router;