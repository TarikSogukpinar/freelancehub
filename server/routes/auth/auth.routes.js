import { Router } from "express";
import loginController from "../../controllers/auth/loginController.js";
import registerController from "../../controllers/auth/registerController.js";
import logoutController from "../../controllers/auth/logoutController.js";
import { verifyToken } from "../../middleware/tokens/verify.js";

const router = Router();

router.post("/login", loginController.loginUser);
router.post("/register", registerController.registerUser);
router.get("/logout", verifyToken, logoutController.logoutUser);

export default router;
