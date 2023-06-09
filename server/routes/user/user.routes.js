import { Router } from "express";
import userController from "../../controllers/user/userController.js";
import { verifyToken } from "../../middleware/verifyTokens/verifyTokens.js";
import { verifyRoles } from "../../middleware/verifyRoles/verifyRoles.js";

const router = Router();

router.get(
  "/getAllUser",
  verifyToken,
  verifyRoles("admin"),
  userController.getAllUser
);

router.get(
  "/getUserLocationInformation",
  verifyToken,
  userController.getUserLocationInformation
);

router.get(
  "/getUserById/:id",
  verifyToken,
  verifyRoles("admin"),
  userController.getUserById
);

router.put(
  "/updateUserById/:id",
  verifyToken,
  verifyRoles("admin"),
  userController.updateUserById
);

router.post("/reset-password", userController.passwordReset);

router.delete(
  "/deleteUserById/:id",
  verifyToken,
  userController.deleteUserById
);

router.get("/getUser", verifyToken, userController.getUser);

export default router;
