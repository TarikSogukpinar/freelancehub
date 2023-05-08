import { Router } from "express";
import loginController from "../../controllers/auth/loginController.js";
import registerController from "../../controllers/auth/registerController.js";
import logoutController from "../../controllers/auth/logoutController.js";
import verifyEmailController from "../../controllers/auth/verifyEmailController.js";
import { verifyToken } from "../../middleware/verifyTokens/verifyTokens.js";

const router = Router();

router.post("/login", loginController.loginUser);
router.post("/register", registerController.registerUser);
router.get("/logout", verifyToken, logoutController.logoutUser);
router.get("/verify-email/:id/:token", verifyEmailController.verifyEmail);

export default router;
